---
layout: home
---

<section class="hero">
  <h1 class="gradient-text">Debojit Choudhury</h1>
  <p class="subtitle">NLP Engineer | ML Specialist | Backend Developer</p>
  <div class="contact-bar">
    <a href="mailto:{{ site.email }}"><i class="fas fa-envelope"></i> {{ site.email }}</a>
    <a href="tel:{{ site.phone }}"><i class="fas fa-phone"></i> {{ site.phone }}</a>
  </div>
</section>

<section class="projects-section">
  <h2>Featured Projects</h2>
  <div class="projects-grid">
    {% for project in site.data.projects %}
    <article class="project-card">
      <div class="card-header">
        <span class="project-year">{{ project.year }}</span>
        <span class="project-type">{{ project.type }}</span>
      </div>
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      
      <div class="highlights">
        {% for highlight in project.highlights %}
        <div class="highlight-item">
          <i class="fas fa-circle"></i>
          <span>{{ highlight }}</span>
        </div>
        {% endfor %}
      </div>
      
      <div class="project-footer">
        <div class="tech-pills">
          {% for technology in project.tech %}
          <span>{{ technology }}</span>
          {% endfor %}
        </div>
        <a href="{{ project.github }}" class="github-link" target="_blank">
          <i class="fab fa-github"></i> View Code
        </a>
      </div>
    </article>
    {% endfor %}
  </div>
</section>