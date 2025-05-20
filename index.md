---
layout: portfolio
---

<section class="hero">
  <div id="particles-js"></div>
  <div class="hero-content">
    <h1 class="gradient-text">Debojit Choudhury</h1>
    <p class="subtitle">NLP Engineer | Backend Developer</p>
    <div class="typewriter">
      <span id="typewriter-text"></span>
    </div>
    <div class="contact-bar">
      <div><i class="fas fa-envelope"></i> <a href="mailto:{{ site.email }}">{{ site.email }}</a></div>
      <div><i class="fas fa-phone"></i> <a href="tel:{{ site.phone }}">{{ site.phone }}</a></div>
      <div><i class="fab fa-github"></i> <a href="https://github.com/debojit11" target="_blank">GitHub</a></div>
      <div><i class="fab fa-linkedin"></i> <a href="{{ site.linkedin }}" target="_blank">LinkedIn</a></div>
    </div>
  </div>
</section>

<section class="about-me">
  <div class="container">
    <h2><i class="fas fa-user-circle"></i> About Me</h2>
    <div class="about-content">
      <div class="avatar">
        {% if site.profile_image %}
          <img src="{{ site.profile_image | relative_url }}" alt="Debojit Choudhury" class="avatar-image" onerror="this.style.display='none'; document.getElementById('avatar-placeholder').style.display='flex';">
        {% else %}
          <div id="avatar-placeholder" class="avatar-placeholder">
            <i class="fas fa-user"></i>
          </div>
        {% endif %}
      </div>
      <div class="summary">
        <p>NLP Engineer skilled in transformers and classical ML for text classification. Built fraud detection, log analysis, and review verification systems deployed via FastAPI/Streamlit/Gradio. Enhanced NLP pipelines with dynamic thresholding. Combines AI expertise with Django backend development.</p>
        <a href="https://drive.google.com/file/d/1u5Ao4e01O1FFeO8h3fFxJ-XNrz9M9gXq/view?usp=drive_link" class="btn btn-primary" download>Download Resume</a>
      </div>
    </div>
  </div>
</section>

<section class="skills-section">
  <div class="container">
    <h2><i class="fas fa-code"></i> Technical Skills</h2>
    <div class="skills-grid">
      {% assign skills = "Python,Natural Language Processing,Deep Learning,Machine Learning,PyTorch,Scikit-Learn,spaCy,Django,SQL,Linux,Git" | split: "," %}
      {% for skill in skills %}
        <div class="skill-pill">
          <span>{{ skill }}</span>
        </div>
      {% endfor %}
    </div>
  </div>
</section>

<section class="projects-section">
  <div class="container">
    <h2><i class="fas fa-project-diagram"></i> Featured Projects</h2>
    <div class="filter-buttons">
      <button class="filter-btn active" data-filter="all">All</button>
      <button class="filter-btn" data-filter="nlp">NLP Engineering</button>
      <button class="filter-btn" data-filter="backend-development">Backend Development</button>
    </div>
    <div class="projects-grid">
      {% for project in site.data.projects %}
      <article class="project-card" data-category="{{ project.type | downcase | replace: ' ', '-' }}">
        <div class="card-header">
          <span class="project-year">{{ project.year }}</span>
          <span class="project-type">{{ project.type }}</span>
        </div>
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <div class="metrics-container">
          {% for metric in project.metrics %}
          <div class="metric">
            <div class="metric-value">{{ metric[1] }}</div>
            <div class="metric-label">{{ metric[0] | replace: '_', ' ' | capitalize }}</div>
          </div>
          {% endfor %}
        </div>
        <div class="highlights">
          {% for highlight in project.highlights %}
          <div class="highlight-item">
            <i class="fas fa-check-circle"></i>
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
  </div>
</section>

<section class="experience-section">
  <div class="container">
    <h2><i class="fas fa-briefcase"></i> Experience</h2>
    <div class="timeline">
      <!-- Newest Experience at the Top -->
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <h3>Junior Natural Language Processing Specialist</h3>
          <div class="timeline-date">April 2025 – May 2025</div>
          <div class="timeline-company">Yuva Intern</div>
          <ul>
            <li>Built and deployed a DistilBERT-based sentiment classifier for course reviews using Hugging Face Spaces and Gradio</li>
            <li>Integrated real-time feedback logging, correction capture, and evaluation metrics for iterative improvements</li>
            <li>Designed an interactive web demo with secure deployment and lightweight architecture for low-latency predictions</li>
            <li>Tools & Tech: Transformers, Gradio, Hugging Face Hub, PyTorch, CSV logging</li>
          </ul>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <h3>Open Source Contributor</h3>
          <div class="timeline-date">October 2024</div>
          <div class="timeline-company">Hacktoberfest (GitHub)</div>
          <ul>
            <li>Developed a Python Keylogger Script for educational purposes, driving more engagement across 1,200+ contributors</li>
            <li>Built an Interactive Text Adventure Game with inventory mechanics, boosting user interaction by 60% through immersive gameplay</li>
            <li>Engineered a File Search Automation Tool that reduced manual search time by 80%, streamlining workflows for faster data access</li>
          </ul>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <h3>B.Tech in Electronics and Communication Engineering</h3>
          <div class="timeline-date">October 2020 - June 2024</div>
          <div class="timeline-company">Tezpur University (6.99)</div>
        </div>
      </div>
    </div>
  </div>
</section>


<section class="contact-section">
  <div class="container">
    <h2><i class="fas fa-paper-plane"></i> Get In Touch</h2>
    <p>Interested in collaborating or have questions about my work? Feel free to reach out!</p>
    <div class="contact-methods">
      <div class="contact-method">
        <i class="fas fa-envelope"></i>
        <h3>Email</h3>
        <a href="mailto:{{ site.email }}">{{ site.email }}</a>
      </div>
      <div class="contact-method">
        <i class="fas fa-phone"></i>
        <h3>Phone</h3>
        <a href="tel:{{ site.phone }}">{{ site.phone }}</a>
      </div>
      <div class="contact-method">
        <i class="fab fa-github"></i>
        <h3>GitHub</h3>
        <a href="https://github.com/debojit11" target="_blank">github.com/debojit11</a>
      </div>
      <div class="contact-method">
        <i class="fab fa-linkedin"></i>
        <h3>LinkedIn</h3>
        <a href="{{ site.linkedin }}" target="_blank">Connect on LinkedIn</a>
      </div>
    </div>
  </div>
</section>

<footer>
  <div class="container">
    <p>&copy; {{ 'now' | date: "%Y" }} Debojit Choudhury. All rights reserved.</p>
    <div class="theme-toggle">
      <button id="theme-toggle-btn">
        <i class="fas fa-sun"></i>
        <i class="fas fa-moon"></i>
      </button>
    </div>
  </div>
</footer>
