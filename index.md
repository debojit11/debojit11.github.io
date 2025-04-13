---
layout: home
---

<section class="hero">
  <h1 class="gradient-text">Debojit Choudhury</h1>
  <p class="subtitle">NLP Engineer | Backend Developer</p>
  <div class="contact-bar">
    <div><i class="fas fa-envelope"></i> <a href="mailto:{{ site.email }}">{{ site.email }}</a></div>
    <div><i class="fas fa-phone"></i> <a href="tel:{{ site.phone }}">{{ site.phone }}</a></div>
  </div>
</section>

<section class="about-me">
  <h2>About Me</h2>
  <p>Hello! I’m Debojit Choudhury, an NLP Engineer and Backend Developer. With a strong background in deep learning and full-stack development, I specialize in creating scalable and efficient systems that make an impact. Here’s a snapshot of my skills and experiences.</p>
</section>

<section class="skills-section">
  <h2>Skills</h2>
  <div class="skills-grid">
    <span>Python</span>
    <span>Machine Learning</span>
    <span>Deep Learning</span>
    <span>Natural Language Processing</span>
    <span>PyTorch</span>
    <span>spaCy</span>
    <span>Django</span>
    <span>Linux</span>
    <span>Git</span>
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
