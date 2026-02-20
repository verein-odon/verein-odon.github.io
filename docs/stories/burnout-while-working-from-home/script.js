const CHART_CONFIG = {
  margin: { top: 16, right: 20, bottom: 44, left: 48 },
  dotRadius: 3.2,
  dotOpacity: 0.7,
  trendOpacity: 0.7,
  violinPadding: 0.2,
  violinBandwidth: 0.7,
};

const chartDefinitions = [
  {
    id: "chart-sleep",
    xKey: "sleep_hours",
    yKey: "burnout_score",
    xLabel: "Hours of sleep",
  },
  {
    id: "chart-work",
    xKey: "work_hours",
    yKey: "burnout_score",
    xLabel: "Work hours per day",
  },
  {
    id: "chart-breaks",
    xKey: "breaks_taken",
    yKey: "burnout_score",
    xLabel: "Breaks taken",
  },
  {
    id: "chart-tasks",
    xKey: "task_completion_rate",
    yKey: "burnout_score",
    xLabel: "Task completion rate",
  },
];

const chartState = new Map();

const placeholderImageFiles = [
  "Burnout comparison.svg",
  "Many-working-hours.svg",
  "Not-enough-sleep.svg",
  "Too-few-breaks.svg",
  "cross.svg",
  "day.svg",
  "house-worker.svg",
  "person-thinking.svg",
  "task-completion-effect.svg",
];

const normalizeAssetName = (value) =>
  String(value)
    .toLowerCase()
    .replace(/\.svg$/i, "")
    .replace(/[\s_-]+/g, "-")
    .trim();

function linkPlaceholderImages() {
  const imagesByLabel = new Map(
    placeholderImageFiles.map((fileName) => [
      normalizeAssetName(fileName),
      `images/${encodeURIComponent(fileName)}`,
    ])
  );

  document.querySelectorAll(".placeholder[data-label]").forEach((placeholder) => {
    const label = placeholder.getAttribute("data-label");
    const imagePath = imagesByLabel.get(normalizeAssetName(label));

    if (imagePath) {
      placeholder.style.backgroundImage = `url("${imagePath}")`;
      placeholder.classList.add("has-image");
    }
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".reveal").forEach((section) => {
  revealObserver.observe(section);
});

linkPlaceholderImages();

function parseRow(row) {
  return {
    sleep_hours: +row.sleep_hours,
    work_hours: +row.work_hours,
    breaks_taken: +row.breaks_taken,
    task_completion_rate: +row.task_completion_rate,
    burnout_score: +row.burnout_score,
  };
}

function buildChart({ id, xKey, yKey, xLabel }, data) {
  const container = document.getElementById(id);
  if (!container) return;

  const width = container.clientWidth;
  const height = container.clientHeight;
  const { margin } = CHART_CONFIG;
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  container.innerHTML = "";
  const svg = d3
    .select(container)
    .append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("preserveAspectRatio", "xMidYMid meet");

  const chart = svg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  if (id === "chart-breaks") {
    buildViolinChart({ chart, data, xKey, yKey, xLabel, innerWidth, innerHeight, margin });
    chartState.set(id, { definition: { id, xKey, yKey, xLabel }, data });
    return;
  }

  const xDomain = d3.extent(data, (d) => d[xKey]);
  const yDomain = d3.extent(data, (d) => d[yKey]);

  const xScale = d3.scaleLinear().domain(xDomain).nice().range([0, innerWidth]);
  const yScale = d3
    .scaleLinear()
    .domain(yDomain)
    .nice()
    .range([innerHeight, 0]);

  chart
    .append("g")
    .attr("class", "axis")
    .attr("transform", `translate(0,${innerHeight})`)
    .call(d3.axisBottom(xScale).ticks(5));

  chart.append("g").attr("class", "axis").call(d3.axisLeft(yScale).ticks(5));

  chart
    .append("text")
    .attr("class", "axis-label")
    .attr("x", innerWidth / 2)
    .attr("y", innerHeight + margin.bottom - 8)
    .attr("text-anchor", "middle")
    .text(xLabel);

  chart
    .append("text")
    .attr("class", "axis-label")
    .attr("x", -innerHeight / 2)
    .attr("y", -margin.left + 14)
    .attr("transform", "rotate(-90)")
    .attr("text-anchor", "middle")
    .text("Burnout score");

  chart
    .append("g")
    .selectAll("circle")
    .data(data)
    .join("circle")
    .attr("class", "dot")
    .attr("r", CHART_CONFIG.dotRadius)
    .attr("cx", (d) => xScale(d[xKey]))
    .attr("cy", (d) => yScale(d[yKey]))
    .attr("opacity", CHART_CONFIG.dotOpacity);

  const trend = d3
    .line()
    .x((d) => xScale(d.x))
    .y((d) => yScale(d.y));

  const trendData = buildTrend(data, xKey, yKey, 20);

  chart
    .append("path")
    .datum(trendData)
    .attr("class", "trend")
    .attr("fill", "none")
    .attr("d", trend)
    .attr("opacity", CHART_CONFIG.trendOpacity);

  chartState.set(id, { definition: { id, xKey, yKey, xLabel }, data });
}

function buildViolinChart({ chart, data, xKey, yKey, xLabel, innerWidth, innerHeight, margin }) {
  const grouped = Array.from(d3.group(data, (d) => d[xKey]), ([breaks, values]) => ({
    breaks,
    values: values.map((d) => d[yKey]).filter(Number.isFinite),
  })).sort((a, b) => d3.ascending(a.breaks, b.breaks));

  const yDomain = d3.extent(data, (d) => d[yKey]);
  const yScale = d3
    .scaleLinear()
    .domain(yDomain)
    .nice()
    .range([innerHeight, 0]);

  const xScale = d3
    .scaleBand()
    .domain(grouped.map((d) => d.breaks))
    .range([0, innerWidth])
    .padding(CHART_CONFIG.violinPadding);

  const yTicks = yScale.ticks(30);
  const kernel = kernelEpanechnikov(CHART_CONFIG.violinBandwidth);
  const densityByGroup = grouped.map((group) => {
    const density = kernelDensityEstimator(kernel, yTicks)(group.values);
    return {
      breaks: group.breaks,
      density,
      avg: d3.mean(group.values) ?? 0,
    };
  });

  const maxDensity = d3.max(densityByGroup, (group) => d3.max(group.density, (d) => d.density)) ?? 0;
  const densityScale = d3
    .scaleLinear()
    .domain([0, maxDensity])
    .range([0, xScale.bandwidth() / 2]);

  chart
    .append("g")
    .attr("class", "axis")
    .attr("transform", `translate(0,${innerHeight})`)
    .call(d3.axisBottom(xScale));

  chart.append("g").attr("class", "axis").call(d3.axisLeft(yScale).ticks(5));

  chart
    .append("text")
    .attr("class", "axis-label")
    .attr("x", innerWidth / 2)
    .attr("y", innerHeight + margin.bottom - 8)
    .attr("text-anchor", "middle")
    .text(xLabel);

  chart
    .append("text")
    .attr("class", "axis-label")
    .attr("x", -innerHeight / 2)
    .attr("y", -margin.left + 14)
    .attr("transform", "rotate(-90)")
    .attr("text-anchor", "middle")
    .text("Burnout score");

  const violin = d3
    .area()
    .curve(d3.curveCatmullRom)
    .x0((d) => d.x0)
    .x1((d) => d.x1)
    .y((d) => yScale(d.y));

  const avgTrend = d3
    .line()
    .x((d) => xScale(d.breaks) + xScale.bandwidth() / 2)
    .y((d) => yScale(d.avg));

  chart
    .append("path")
    .datum(densityByGroup)
    .attr("class", "violin-avg-trend")
    .attr("fill", "none")
    .attr("d", avgTrend);

  chart
    .append("g")
    .selectAll("path")
    .data(densityByGroup)
    .join("path")
    .attr("class", "violin")
    .attr("d", (group) => {
      const center = xScale(group.breaks) + xScale.bandwidth() / 2;
      const areaData = group.density.map((d) => ({
        y: d.y,
        x0: center - densityScale(d.density),
        x1: center + densityScale(d.density),
      }));
      return violin(areaData);
    });

  chart
    .append("g")
    .selectAll("line")
    .data(densityByGroup)
    .join("line")
    .attr("class", "violin-avg")
    .attr("x1", (group) => xScale(group.breaks) + xScale.bandwidth() * 0.25)
    .attr("x2", (group) => xScale(group.breaks) + xScale.bandwidth() * 0.75)
    .attr("y1", (group) => yScale(group.avg))
    .attr("y2", (group) => yScale(group.avg));

}

function kernelDensityEstimator(kernel, domain) {
  return (values) =>
    domain.map((y) => ({
      y,
      density: d3.mean(values, (value) => kernel(y - value)) ?? 0,
    }));
}

function kernelEpanechnikov(bandwidth) {
  return (value) => {
    const scaled = value / bandwidth;
    return Math.abs(scaled) <= 1 ? (0.75 * (1 - scaled * scaled)) / bandwidth : 0;
  };
}

function buildTrend(data, xKey, yKey, points) {
  const xExtent = d3.extent(data, (d) => d[xKey]);
  const step = (xExtent[1] - xExtent[0]) / (points - 1);
  return Array.from({ length: points }, (_, i) => {
    const x = xExtent[0] + step * i;
    const neighbors = data.filter((d) => Math.abs(d[xKey] - x) < step * 2);
    const y = d3.mean(neighbors, (d) => d[yKey]);
    return { x, y: y ?? 0 };
  });
}

function renderAllCharts(data) {
  chartDefinitions.forEach((definition) => buildChart(definition, data));
}

function setupChartAnimations() {
  const chartObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const container = entry.target;
        animateChart(container);
        chartObserver.unobserve(container);
      });
    },
    { threshold: 0.35 }
  );

  document.querySelectorAll(".chart").forEach((chart) => chartObserver.observe(chart));
}

function animateChart(container) {
  if (container.dataset.animated === "true") return;
  container.dataset.animated = "true";
  container.classList.add("is-animated");

  const linePaths = container.querySelectorAll("path.trend, path.violin-avg-trend");
  linePaths.forEach((path) => {
    const isDashed = path.classList.contains("violin-avg-trend");
    animatePath(path, { duration: 4000, delay: 150, useDashPattern: isDashed });
  });

  const avgLines = container.querySelectorAll("line.violin-avg");
  avgLines.forEach((line, index) => {
    animateLine(line, { duration: 900, delay: 240 + index * 340 });
  });
}

function animatePath(path, { duration, delay, useDashPattern }) {
  const length = path.getTotalLength();
  const dashPattern = useDashPattern ? "6 6" : null;
  path.style.strokeDasharray = `${length} ${length}`;
  path.style.strokeDashoffset = length;
  path.getBoundingClientRect();
  path.style.transition = `stroke-dashoffset ${duration}ms ease ${delay}ms`;
  path.style.strokeDashoffset = "0";
  if (dashPattern) {
    const handle = () => {
      path.style.strokeDasharray = dashPattern;
      path.removeEventListener("transitionend", handle);
    };
    path.addEventListener("transitionend", handle);
  }
}

function animateLine(line, { duration, delay }) {
  const length = line.getTotalLength();
  line.style.strokeDasharray = `${length} ${length}`;
  line.style.strokeDashoffset = length;
  line.getBoundingClientRect();
  line.style.transition = `stroke-dashoffset ${duration}ms ease ${delay}ms`;
  line.style.strokeDashoffset = "0";
}

function setupResize(data) {
  let resizeTimer = null;
  window.addEventListener("resize", () => {
    if (resizeTimer) {
      window.clearTimeout(resizeTimer);
    }
    resizeTimer = window.setTimeout(() => renderAllCharts(data), 120);
  });
}

function sanitizeData(data) {
  return data.filter(
    (d) =>
      Number.isFinite(d.sleep_hours) &&
      Number.isFinite(d.work_hours) &&
      Number.isFinite(d.breaks_taken) &&
      Number.isFinite(d.task_completion_rate) &&
      Number.isFinite(d.burnout_score)
  );
}

d3.csv("work_from_home_burnout_dataset.csv", parseRow).then((rows) => {
  const data = sanitizeData(rows);
  renderAllCharts(data);
  setupChartAnimations();
  setupResize(data);
});
