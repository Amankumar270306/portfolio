<template>
  <main>
    <section class="container" style="padding-top: 4rem; text-align: center;">
      <h1 class="animate-fade-up" v-fade-up>Things I've Built</h1>
      <p class="animate-fade-up delay-100" v-fade-up style="max-width: 540px; margin: 0 auto 4rem auto;">
        A collection of software, data, and intelligent systems — built to solve problems, explore ideas, and keep learning.
      </p>
      
      <div class="projects-grid">
        <!-- PROJECT 1: JEE Counselling -->
        <a 
          href="https://counsellingwebsite.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="project-card animate-fade-up delay-100" 
          v-fade-up
        >
          <div class="browser-header">
            <div class="browser-dots">
              <span class="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
            </div>
            <div class="browser-address">counsellingwebsite.vercel.app</div>
            <span class="external-icon">↗</span>
          </div>

          <div class="project-image-box">
            <img src="/jee_counselling.png" alt="JEE Counselling Platform" />
          </div>

          <div class="project-card-body">
            <div class="card-meta">
              <span class="badge-accent">FULL-STACK &amp; DATA</span>
              <span class="live-pill">● LIVE</span>
            </div>
            <h2 class="project-card-title">JEE Counselling Platform</h2>
            <p class="project-subtitle">Self Project</p>
            <p class="project-card-desc">
              Data-driven college predictor and cut-off analysis platform simplifying JoSAA &amp; CSAB counselling with admissions intelligence.
            </p>
            <div class="tags-container">
              <span class="tag">React</span>
              <span class="tag">TypeScript</span>
              <span class="tag">JoSAA Data</span>
              <span class="tag">Analytics</span>
            </div>
          </div>
        </a>

        <!-- PROJECT 2: Trekking Management Application -->
        <a 
          href="https://github.com/Amankumar270306" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="project-card animate-fade-up delay-150" 
          v-fade-up
        >
          <div class="browser-header">
            <div class="browser-dots">
              <span class="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
            </div>
            <div class="browser-address">github.com/Amankumar270306</div>
            <span class="external-icon">↗</span>
          </div>

          <div class="project-image-box">
            <img src="/trek_management.png" alt="Trekking Management Application" />
          </div>

          <div class="project-card-body">
            <div class="card-meta">
              <span class="badge-accent">BACKEND &amp; SYSTEMS</span>
              <span class="grade-pill">★ S GRADE</span>
            </div>
            <h2 class="project-card-title">Trekking Management System</h2>
            <p class="project-subtitle">Course Project</p>
            <p class="project-card-desc">
              Multi-role application (Admin, Staff, Trekker) with role-based access, automated booking validation, and CRUD REST APIs.
            </p>
            <div class="tags-container">
              <span class="tag">Python</span>
              <span class="tag">Flask</span>
              <span class="tag">SQLite</span>
              <span class="tag">SQLAlchemy</span>
            </div>
          </div>
        </a>
      </div>

      <div style="margin-top: 5rem;" class="animate-fade-up delay-200" v-fade-up>
        <a 
          href="https://github.com/Amankumar270306" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="btn btn-outline" 
          style="color: white; border-color: var(--border-dark);"
        >
          More Projects on GitHub ↗
        </a>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
  text-align: left;
}

.project-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  color: inherit;
  border-radius: 10px;
  border: 1px solid var(--border-dark);
  background: var(--surface-dark);
  overflow: hidden;
  transition: transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal);
}

.project-card:hover {
  transform: translateY(-5px);
  border-color: rgba(200, 169, 126, 0.5);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.4);
}

.browser-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.85rem;
  background: #141414;
  border-bottom: 1px solid var(--border-dark);
}

.browser-dots {
  display: flex;
  gap: 5px;
}

.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
}
.dot.red { background: #ff5f56; }
.dot.yellow { background: #ffbd2e; }
.dot.green { background: #27c93f; }

.browser-address {
  font-size: 0.68rem;
  color: var(--text-muted);
  font-family: monospace;
  background: #1c1c1c;
  padding: 0.15rem 0.6rem;
  border-radius: 4px;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.external-icon {
  font-size: 0.82rem;
  color: var(--text-muted);
  transition: color var(--transition-normal), transform var(--transition-normal);
}

.project-card:hover .external-icon {
  color: var(--accent-gold);
  transform: translate(2px, -2px);
}

.project-image-box {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #0d0d0d;
}

.project-image-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top left;
  transition: transform var(--transition-normal);
}

.project-card:hover .project-image-box img {
  transform: scale(1.02);
}

.project-card-body {
  padding: 1.25rem 1.35rem 1.4rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.badge-accent {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--accent-gold);
}

.live-pill {
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: #27c93f;
  background: rgba(39, 201, 63, 0.1);
  padding: 0.15rem 0.45rem;
  border-radius: 10px;
  border: 1px solid rgba(39, 201, 63, 0.25);
}

.grade-pill {
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: #e5c07b;
  background: rgba(229, 192, 123, 0.1);
  padding: 0.15rem 0.45rem;
  border-radius: 10px;
  border: 1px solid rgba(229, 192, 123, 0.25);
}

.project-card-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 0.5rem 0;
  transition: color var(--transition-normal);
}

.project-card:hover .project-card-title {
  color: var(--accent-gold);
}

.project-subtitle {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--accent-gold);
  letter-spacing: 0.04em;
  margin: -0.2rem 0 0.65rem 0;
}

.project-card-desc {
  font-size: 0.84rem;
  line-height: 1.55;
  color: var(--text-muted);
  margin: 0 0 1rem 0;
  flex: 1;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tag {
  font-size: 0.72rem;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  background: #191919;
  border: 1px solid var(--border-dark);
  color: #bbbbbb;
}

@media (max-width: 820px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
