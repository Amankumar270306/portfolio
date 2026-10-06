<template>
  <main>
    <section class="container" style="padding-top: 4rem; padding-bottom: 4rem; display: flex; gap: 4rem; align-items: center; min-height: 80vh;">
      <div style="flex: 1; max-width: 600px;">
        <p class="text-small-caps text-gold animate-fade-up" v-fade-up style="margin-bottom: 2rem;">THE DATA SCIENCE ENTHUSIAST</p>
        <h1 class="animate-fade-up delay-100" v-fade-up style="color: #cccccc; margin-bottom: 2.5rem; font-size: clamp(2.5rem, 4.5vw, 4rem);">
          Building intelligent<br/> systems and<br/>solving<br/>complex problems<br/>with data<br/>and code.
        </h1>
        <p class="animate-fade-up delay-200" v-fade-up style="max-width: 450px; margin-bottom: 3rem;">
          Data Science undergraduate at IIT Madras focused on machine learning, algorithms, and systems, with a strong interest in AI, problem solving, and scalable system design.
        </p>
        <div class="animate-fade-up delay-300" v-fade-up style="display: flex; gap: 1rem;">
          <router-link to="/projects" class="btn btn-gold">View Portfolio</router-link>
          <a href="#" class="btn btn-outline" style="background: #a0a0a0; color: white; border-color: transparent;">Read Manifesto</a>
        </div>
      </div>

      <div style="flex: 1;" class="animate-fade-up delay-200" v-fade-up>
        <div style="padding: 2rem; background: #e0e0e0; display: inline-block; transform: translateY(-4rem);">
          <img src="/photo.png" alt="Aman Portrait" style="width: 100%; max-width: 450px; height: auto; display: block; filter: grayscale(100%) contrast(1.2);" />
        </div>
      </div>
    </section>

    <section class="container section">
      <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 3rem; gap: 2rem;">
        <h2 class="animate-fade-up" v-fade-up style="color: #cccccc; margin: 0; flex: 1;">Engineering intelligent systems<br/>with precision, research, and purpose.</h2>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
        <div class="card animate-fade-up delay-100" v-fade-up style="background: #a0a0a0; border: none;">
          <div class="text-gold" style="margin-bottom: 4rem;">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="5" r="2"></circle>
              <circle cx="5" cy="19" r="2"></circle>
              <circle cx="19" cy="19" r="2"></circle>
              <path d="M6.5 17.5 10.5 6.5"></path>
              <path d="M17.5 17.5 13.5 6.5"></path>
              <path d="M7 19h10"></path>
            </svg>
          </div>
          <h3 style="color: white; margin-bottom: 1rem;">Artificial Intelligence</h3>
          <p style="color: #e0e0e0;">Building intelligent applications using machine learning, deep learning, LLMs, and modern AI technologies to solve impactful real-world problems.</p>
        </div>
        
        <div class="card animate-fade-up delay-200" v-fade-up style="background: #a0a0a0; border: none;">
          <div class="text-gold" style="margin-bottom: 4rem;">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 3v18h18"></path>
              <path d="M18 17V9"></path>
              <path d="M13 17V5"></path>
              <path d="M8 17v-3"></path>
            </svg>
          </div>
          <h3 style="color: white; margin-bottom: 1rem;">Data Science</h3>
          <p style="color: #e0e0e0;">Extracting valuable insights through statistical analysis, predictive modeling, data visualization, and data-driven decision making.</p>
        </div>

        <div class="card animate-fade-up delay-300" v-fade-up style="background: #a0a0a0; border: none;">
          <div class="text-gold" style="margin-bottom: 4rem;">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
          <h3 style="color: white; margin-bottom: 1rem;">Software Engineering</h3>
          <p style="color: #e0e0e0;">Developing scalable applications with clean architecture, APIs, databases, cloud technologies, and modern development practices.</p>
        </div>
      </div>
    </section>

    <section class="container" style="padding-top: 2rem;">
      <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 3rem;">
        <h2 class="animate-fade-up" v-fade-up style="max-width: 500px; color: #cccccc;">Research Interests</h2>
      </div>
      <div class="interests-grid animate-fade-up delay-100" v-fade-up>
        <div class="interest-badge">Artificial Intelligence</div>
        <div class="interest-badge">Machine Learning</div>
        <div class="interest-badge">Data Science</div>
        <div class="interest-badge">Cybersecurity</div>
        <div class="interest-badge">Algorithms</div>
        <div class="interest-badge">Large Language Models</div>
      </div>
    </section>

    <section class="container" style="padding-top: 6rem; padding-bottom: 6rem;">
      <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 3rem;">
        <h2 class="animate-fade-up" v-fade-up style="max-width: 500px; color: #cccccc;">Currently Exploring</h2>
      </div>
      <div class="interests-grid animate-fade-up delay-100" v-fade-up>
        <div class="interest-badge">PyTorch</div>
        <div class="interest-badge">LangChain</div>
        <div class="interest-badge">LangGraph</div>
        <div class="interest-badge">Docker</div>
        <div class="interest-badge">Kubernetes</div>
        <div class="interest-badge">AWS</div>
        <div class="interest-badge">LLMs</div>
        <div class="interest-badge">MLOps</div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
</script>

<style scoped>
.interests-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}
.interest-badge {
  padding: 1.5rem 2.5rem;
  background: #a0a0a0;
  border: none;
  color: white;
  font-family: var(--font-serif);
  font-size: 1.25rem;
  border-radius: 4px;
  transition: all var(--transition-fast);
  cursor: default;
}
.interest-badge:hover {
  background: #777777;
  color: var(--accent-gold);
}


</style>
