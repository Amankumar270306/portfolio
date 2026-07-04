<template>
  <main class="experience-page">
    <!-- HERO SECTION -->
    <section class="container section hero-section">
      <h1 class="animate-fade-up" v-fade-up style="max-width: 800px;">Technical<br/>Journey</h1>
      <p class="animate-fade-up delay-100 subtitle" v-fade-up>
        My journey as a Data Science undergraduate has been shaped through academic projects, technical communities, leadership experiences, and continuous learning. Every experience has strengthened my problem-solving, software engineering, and analytical skills.
      </p>
    </section>

    <!-- SECTION: TIMELINE -->
    <section class="container section">
      <div class="timeline animate-fade-up delay-200" v-fade-up>
        
        <div class="timeline-item timeline-layout">
          <div class="timeline-dot"></div>
          <div class="timeline-date">
            <p class="text-small-caps text-gold mb-2">2024 &mdash; Present</p>
            <h3 class="mb-2 text-white">Bachelor of Science</h3>
            <p class="text-gold">Data Science and Applications</p>
          </div>
          <div class="card timeline-content">
            <h4 class="mb-4 text-white">Indian Institute of Technology Madras</h4>
            <ul class="highlights-list">
              <li>Foundation Level Completed</li>
              <li>Diploma Level In Progress</li>
              <li>Strong focus on Programming, Databases, Statistics and Machine Learning</li>
            </ul>
          </div>
        </div>

        <div class="timeline-item timeline-layout">
          <div class="timeline-dot"></div>
          <div class="timeline-date">
            <p class="text-small-caps text-gold mb-2">2025 &mdash; Present</p>
            <h3 class="mb-2 text-white">Personal Projects</h3>
            <p class="text-gold">Independent Developer</p>
          </div>
          <div class="card timeline-content">
            <p class="mb-4 text-white line-height-relaxed">
              Designing and building real-world software projects to strengthen practical skills in software engineering and artificial intelligence.
            </p>
            <ul class="highlights-list">
              <li>Portfolio Website</li>
              <li>Trek Booking Management System</li>
              <li>REST API Development</li>
              <li>Database Design</li>
              <li>React + Flask Applications</li>
            </ul>
          </div>
        </div>

      
        <div class="timeline-item timeline-layout">
          <div class="timeline-dot"></div>
          <div class="timeline-date">
            <p class="text-small-caps text-gold mb-2">Future Goal</p>
            <h3 class="mb-2 text-white">Internship</h3>
            <p class="text-gold">Software Engineering / AI</p>
          </div>
          <div class="card timeline-content">
            <p class="text-white line-height-relaxed" style="margin-bottom: 0;">
              Currently preparing for internship opportunities in software engineering, machine learning, and data science.
            </p>
          </div>
        </div>

      </div>
    </section>


  </main>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* UTILITIES */
.mb-2 { margin-bottom: 0.5rem; }
.mb-4 { margin-bottom: 1rem; }
.text-white { color: white; }
.text-gold { color: var(--accent-gold); }
.line-height-relaxed { line-height: 1.8; }

/* HERO SECTION */
.hero-section {
  padding-top: 6rem;
  padding-bottom: 4rem;
  min-height: 70vh;
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

/* TYPOGRAPHY */
.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 4rem;
  color: var(--text-light);
  border-bottom: 1px solid var(--border-dark);
  padding-bottom: 1.5rem;
}

/* TIMELINE LAYOUT */
.timeline-layout {
  display: flex;
  gap: 4rem;
}
.timeline-date {
  flex: 0 0 250px;
  text-align: right;
}
.timeline-content {
  flex: 1;
}

.highlights-list {
  list-style: none;
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.8;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.highlights-list li {
  position: relative;
  padding-left: 1.5rem;
}
.highlights-list li::before {
  content: "•";
  color: var(--accent-gold);
  position: absolute;
  left: 0;
  font-size: 1.2rem;
  line-height: 1;
  top: -0.1rem;
}

/* RESPONSIVE RESPONSIVE */
@media (max-width: 768px) {
  .timeline-layout {
    flex-direction: column;
    gap: 1.5rem;
  }
  .timeline-date {
    text-align: left;
    flex: auto;
  }
  .timeline-dot {
    display: none;
  }
  .timeline {
    padding-left: 0;
    border-left: none;
  }

}
</style>
