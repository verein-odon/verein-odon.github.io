---
layout: page
title: Verein
lang: de
ref: association
permalink: /de/verein/
---

# Über den Verein

<!-- People Section (DE) -->
<section class="section bg-gray">
    <div class="container">
        <div class="content-section">
            <div class="icon-header">
                <div>
                <h2>Menschen im Verein</h2>
                </div>
            </div>
            <p>Die Menschen hinter ODON — Entwickler:innen, Forscher:innen und Datenenthusiast:innen, die sich für zugängliche und nützliche Open Data einsetzen.</p>
        </div>
        <div class="people-grid">
            {% for person in site.data.people %}
            <div class="person-card">
                <div class="person-image-wrapper">
                    <img src="/assets/images/people/{{ person.image }}" alt="{{ person.name }}" class="person-image" loading="lazy" width="200" height="200">
                </div>
                <h3 class="person-name">{{ person.name }}</h3>
                {% if person.role != "" %}<p class="person-role">{{ person.role }}</p>{% endif %}
                {% if person.link %}<a href="{{ person.link }}" class="person-link" target="_blank" rel="noopener">Profil</a>{% endif %}
            </div>
            {% endfor %}
        </div>
    </div>
</section>

ODON ist in Österreich als Verein registriert (ZVR: **1593372349**) und hat seinen **Sitz in Wien**.

Unser Verein widmet sich der technischen Verarbeitung und Nutzung von offenen Daten (Open Data). Unser Ziel ist es, Daten für die Öffentlichkeit zugänglich und nutzbar zu machen, um Innovation, Transparenz und Wissensverbreitung in unserer Gemeinschaft zu fördern. Wir glauben daran, dass offene Daten eine wertvolle Ressource sind. Diese Ressource kann - wenn sie sinnvoll genutzt wird - neue Ideen anregen, das Vertrauen in öffentliche Prozesse stärken und das Wissen innerhalb der Gesellschaft erweitern.

## Unsere Mission


Unsere Mission ist es, eine Plattform zu schaffen, die es allen ermöglicht, auf offene Daten zuzugreifen und diese für eigene Projekte, Forschungen oder geschäftliche Zwecke zu nutzen. Durch die **Bereitstellung technischer Infrastruktur** und **benutzerfreundlicher Schnittstellen** möchten wir die Hemmschwellen bei der Nutzung offener Daten senken und die Zusammenarbeit zwischen User*innen, Entwickler*innen und Organisationen fördern.

Unser Team vereint technisches Know-how mit einem tiefen Verständnis für die gesellschaftliche Bedeutung offener Daten. Gemeinsam arbeiten wir daran, dass offene Daten zur Grundlage für neue Ideen und Projekte werden können. Für Fragen oder die Zusammenarbeit mit unserem Verein könnt ihr uns jederzeit kontaktieren.



