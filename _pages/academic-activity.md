---
layout: page
permalink: /academic-activity/
title: academic activity
description: A list of my conference presentations, journal publications, and other scholar contributions.
nav: true
nav_order: 2

---

{% include bib_search.liquid %}

📚 **Publications**
<div class="publications">
{% bibliography --file papers %}
</div>

---

🎤 **Conference Presentations**
<div class="publications">
{% bibliography --file conferences %}
</div>

---

👩🏻‍💼 **Others**
<div class="publications">
{% bibliography --file others %}
</div>
