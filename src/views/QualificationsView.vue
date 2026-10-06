<template>
  <main class="portfolio-page">
    <section class="container section hero-section">
      <h1 class="animate-fade-up" v-fade-up style="max-width: 800px;">Academic Foundation<br/>& Technical Expertise</h1>
      <p class="animate-fade-up delay-100 subtitle" v-fade-up>
        Building a strong foundation in Data Science, Artificial Intelligence, and Software Engineering through rigorous academics, hands-on projects, and continuous learning.
      </p>
    </section>

    <section class="container section">
      <h2 class="section-title animate-fade-up" v-fade-up>Education</h2>
      
      <div class="timeline animate-fade-up delay-100" v-fade-up>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <p class="text-small-caps text-gold mb-2">2024 &mdash; Present</p>
          <h3 class="mb-2">Bachelor of Science (B.S.)</h3>
          <p class="degree-title mb-4">Data Science and Applications</p>
          <h4 class="institution mb-4">Indian Institute of Technology Madras</h4>
          
          <div class="badges-row mb-6">
            <span class="badge badge-outline">Foundation Level Completed</span>
            <span class="badge badge-outline">Diploma Level (In Progress)</span>
          </div>
          
          <div class="coursework-section mt-6">
            <h5 class="text-small-caps text-muted mb-4">Relevant Coursework</h5>
            <div class="chips-container">
              <span class="chip">Machine Learning</span>
              <span class="chip">Database Management Systems</span>
              <span class="chip">Data Structures & Algorithms</span>
              <span class="chip">Statistics</span>
              <span class="chip">Mathematics</span>
              <span class="chip">Modern Application Development</span>
              <span class="chip">Programming</span>
              <span class="chip">System Commands</span>
            </div>
          </div>
          
          <div class="mt-8">
            <a href="https://study.iitm.ac.in/ds/academics.html#AC11" target="_blank" class="btn btn-outline">View Curriculum</a>
          </div>
        </div>
      </div>
    </section>

    <section class="container section">
      <h2 class="section-title animate-fade-up" v-fade-up>Certifications</h2>
      
      <div class="cards-grid animate-fade-up delay-100" v-fade-up>
        <div class="card cert-card">
          <h3 class="mb-2">Foundation in Data Science & Programming</h3>
          <p class="text-small-caps text-gold mb-6">Indian Institute of Technology Madras</p>
          
          <h5 class="text-small-caps text-muted mb-4">Skills Learned:</h5>
          <ul class="cert-skills-list mb-8">
            <li>&#10003; Python</li>
            <li>&#10003; Mathematics & Statistics</li>
            <li>&#10003; Computational Thinking</li>
            <li>&#10003; Basic Linux & Shell Scripting</li>
          </ul>
          
          <div class="mt-auto">
            <a href="#" class="btn btn-outline btn-sm">View Credential</a>
          </div>
        </div>

        <div class="card cert-card">
          <h3 class="mb-2">AWS Academy Cloud Foundations</h3>
          <p class="text-small-caps text-gold mb-6">Amazon Web Services (AWS)</p>
          
          <h5 class="text-small-caps text-muted mb-4">Skills Learned:</h5>
          <ul class="cert-skills-list mb-8">
            <li>&#10003; Cloud Concepts & Architecture</li>
            <li>&#10003; Core AWS Services (EC2, S3, RDS)</li>
            <li>&#10003; Security, Identity & Access Management</li>
            <li>&#10003; Cloud Economics and Billing</li>
          </ul>
          
          <div class="mt-auto">
            <a href="#" class="btn btn-outline btn-sm">View Credential</a>
          </div>
        </div>
      </div>
    </section>

    <section class="container section">
      <h2 class="section-title animate-fade-up" v-fade-up>Technical Expertise</h2>
      
      <div class="expertise-grid animate-fade-up delay-100" v-fade-up>
        <div class="card expertise-card">
          <h3 class="text-small-caps text-gold mb-4">Programming</h3>
          <div class="chips-container">
            <span class="chip">Python</span>
            <span class="chip">C</span>
            <span class="chip">C++</span>
            <span class="chip">Java</span>
            <span class="chip">JavaScript</span>
            <span class="chip">SQL</span>
            <span class="chip">Bash</span>
            <span class="chip">R</span>
          </div>
        </div>

        <div class="card expertise-card">
          <h3 class="text-small-caps text-gold mb-4">Artificial Intelligence</h3>
          <div class="chips-container">
            <span class="chip">Machine Learning</span>
            <span class="chip">Deep Learning</span>
            <span class="chip">Data Analysis</span>
            <span class="chip">Statistics</span>
            <span class="chip">Data Visualization</span>
          </div>
        </div>

        <div class="card expertise-card">
          <h3 class="text-small-caps text-gold mb-4">Backend Development</h3>
          <div class="chips-container">
            <span class="chip">Flask</span>
            <span class="chip">REST APIs</span>
            <span class="chip">PostgreSQL</span>
            <span class="chip">MySQL</span>
            <span class="chip">SQLite</span>
          </div>
        </div>

        <div class="card expertise-card">
          <h3 class="text-small-caps text-gold mb-4">Frontend Development</h3>
          <div class="chips-container">
            <span class="chip">Vue.js</span>
            <span class="chip">HTML5</span>
            <span class="chip">CSS3</span>
            <span class="chip">Bootstrap</span>
          </div>
        </div>

        <div class="card expertise-card">
          <h3 class="text-small-caps text-gold mb-4">Developer Tools</h3>
          <div class="chips-container">
            <span class="chip">Git</span>
            <span class="chip">GitHub</span>
            <span class="chip">Linux</span>
            <span class="chip">Docker</span>
            <span class="chip">VS Code</span>
            <span class="chip">Jupyter Notebook</span>
            <span class="chip">Postman</span>
          </div>
        </div>

        <div class="card expertise-card">
          <h3 class="text-small-caps text-gold mb-4">Currently Learning</h3>
          <div class="chips-container">
            <span class="chip">AWS</span>
            <span class="chip">Kubernetes</span>
            <span class="chip">LangChain</span>
            <span class="chip">LangGraph</span>
            <span class="chip">PyTorch</span>
          </div>
        </div>
      </div>
    </section>

    <section class="container compact-section">
      <h2 class="section-title animate-fade-up" v-fade-up>Academic & Professional Highlights</h2>
      
      <div class="stats-grid animate-fade-up delay-100" v-fade-up>
        <div class="stat-card card">
          <div class="stat-number text-gold">8+</div>
          <div class="stat-label">Foundation Courses<br/>Completed</div>
        </div>
        
        <div class="stat-card card">
          <div class="stat-number text-gold">5</div>
          <div class="stat-label">Projects<br/>Completed</div>
        </div>

        <div class="stat-card card">
          <div class="stat-number text-gold">5</div>
          <div class="stat-label">Programming<br/>Languages</div>
        </div>

        <div class="stat-card card">
          <div class="stat-text text-gold">AI & ML</div>
          <div class="stat-label">Core Research<br/>Areas</div>
        </div>
      </div>
    </section>

    <section class="container compact-section cta-section text-center animate-fade-up" v-fade-up>
      <h2 class="mb-4">Interested in collaborating?</h2>
      <p class="cta-subtitle mx-auto mb-8">
        I'm always open to discussing research opportunities, innovative projects, internships, and software engineering collaborations.
      </p>
      <div class="cta-buttons">
        <a href="/Resume.pdf" target="_blank" class="btn btn-gold">Download Resume</a>
        <router-link to="/contact" class="btn btn-outline">Contact Me</router-link>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
</script>

<style scoped>
.mb-2 { margin-bottom: 0.5rem; }
.mb-4 { margin-bottom: 1rem; }
.mb-6 { margin-bottom: 1.5rem; }
.mb-8 { margin-bottom: 2rem; }
.mt-4 { margin-top: 1rem; }
.mt-6 { margin-top: 1.5rem; }
.mt-8 { margin-top: 2rem; }
.mt-auto { margin-top: auto; }
.mx-auto { margin-left: auto; margin-right: auto; }
.text-center { text-align: center; }

.section {
  min-height: auto;
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.hero-section {
  padding-top: 6rem;
  padding-bottom: 4rem;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.subtitle {
  font-size: 1.25rem;
  max-width: 700px;
  line-height: 1.8;
  color: var(--text-muted);
}

.compact-section {
  min-height: auto;
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 4rem;
  color: var(--text-light);
  border-bottom: 1px solid var(--border-dark);
  padding-bottom: 1.5rem;
}

.badges-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 500;
  border-radius: 2rem;
}
.badge-outline {
  border: 1px solid var(--accent-gold);
  color: var(--accent-gold);
}

.chips-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
.chip {
  background: var(--card-bg-dark);
  border: 1px solid var(--border-dark);
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  color: var(--text-light);
  border-radius: 4px;
  transition: all var(--transition-fast);
}
.chip:hover {
  border-color: var(--accent-gold);
  color: var(--accent-gold);
  transform: translateY(-2px);
}

.degree-title {
  color: var(--accent-gold);
  font-size: 1.15rem;
  letter-spacing: 0.5px;
}
.institution {
  color: var(--text-muted);
  font-weight: 400;
  font-family: var(--font-sans);
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}
.cert-card {
  display: flex;
  flex-direction: column;
  transition: transform var(--transition-normal);
}
.cert-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent-gold);
}
.cert-skills-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  color: var(--text-light);
  font-size: 0.95rem;
}
.cert-skills-list li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.expertise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
.expertise-card {
  background: transparent;
  transition: border-color var(--transition-fast);
}
.expertise-card:hover {
  border-color: var(--accent-gold);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
}
.stat-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem 2rem;
  transition: transform var(--transition-normal);
}
.stat-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent-gold);
}
.stat-number {
  font-family: var(--font-serif);
  font-size: 4rem;
  line-height: 1;
  margin-bottom: 1rem;
}
.stat-text {
  font-family: var(--font-serif);
  font-size: 2.5rem;
  line-height: 1.2;
  margin-bottom: 1rem;
}
.stat-label {
  color: var(--text-muted);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.cta-section {
  padding-top: 4rem;
  padding-bottom: 8rem;
}
.cta-subtitle {
  font-size: 1.1rem;
  max-width: 600px;
}
.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  .stat-number {
    font-size: 3rem;
  }
  .stat-text {
    font-size: 2rem;
  }
  .interest-badge {
    width: 100%;
    text-align: center;
  }
}
</style>
