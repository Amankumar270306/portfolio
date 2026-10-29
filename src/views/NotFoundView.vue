<template>
  <main class="not-found-page container">
    <div class="not-found-content card animate-fade-up" v-fade-up>
      <div class="status-code text-gold">404</div>
      <h1 class="not-found-title">Page Not Found</h1>
      <p class="not-found-desc">
        The link you followed may be broken or the page may have been moved.
      </p>
      <div class="not-found-actions">
        <router-link to="/" class="btn btn-gold">
          <span>Return to Home</span>
          <span class="btn-arrow">&#8594;</span>
        </router-link>
        <router-link to="/projects" class="btn btn-outline">
          <span>View Projects</span>
        </router-link>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
// 404 Not Found Page
</script>

<style scoped>
.not-found-page {
  min-height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem;
}

.not-found-content {
  text-align: center;
  max-width: 600px;
  width: 100%;
  padding: 4rem 2.5rem;
  background: var(--card-bg-dark);
  border: 1px solid var(--border-dark);
  border-radius: 8px;
}

.status-code {
  font-family: var(--font-serif);
  font-size: clamp(4rem, 10vw, 6.5rem);
  font-weight: 700;
  line-height: 1;
  margin-bottom: 1rem;
}

.not-found-title {
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  margin-bottom: 1rem;
  color: var(--text-light);
}

.not-found-desc {
  color: var(--text-muted);
  font-size: 1.05rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 440px;
  margin-left: auto;
  margin-right: auto;
}

.not-found-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
</style>

