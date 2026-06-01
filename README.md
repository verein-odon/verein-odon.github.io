# Odon Website Repository

Welcome ...

## Rendering the website

If you use a Mac, please follow [these](https://docs.google.com/document/d/18xafWBF8V93tSIrqO0FBKCRQsd6CzkcVaT0Dr6O7SfQ/edit?tab=t.0#heading=h.tkebpg14cdt0) instructions. Below are those for Ubuntu.

### Prerequisites

It is built with a tool called [Jekyll](https://jekyllrb.com/). Installation instructions for several operating systems can be found [here](https://jekyllrb.com/docs/installation/). 

### Building 

Open a terminal in your local repo:

```bash
    # go to the correct directory
    cd docs

    # choose one of these commands, depending on the usecase
    bundle exec jekyll serve        # local dev server at http://localhost:4000
    bundle exec jekyll build        # one-off build to _site/
    bundle exec jekyll serve --incremental  # faster rebuilds during active editing
```

The website can then be viewed in your [browser](http://127.0.0.1:4000/). 

## Working on the website

We use `git`, a version control tool, to edit the content on the website. When you work on sth., branch from `main` to your branch (e.g. `feat/new-data-stories`). When done, open a pull request back to main and assign it to either [Verein Odoon](https://github.com/verein-odon) or [Ben](https://github.com/benediktschoeffmann).

> *Happy blogging!*