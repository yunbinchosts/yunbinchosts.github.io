---
layout: page
permalink: /academic-activity/
title: Academic Activity
description: A list of my conference presentations, journal publications, and other scholar contributions.
nav: true
nav_order: 2
---

{% include bib_search.liquid %}

<div class="publications">

## 📚 Publications

{% bibliography --file publications %}

---

## 🎤 Conference Presentations

{% bibliography --file conferences %}

</div>
