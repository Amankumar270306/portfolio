<template>
  <main>
    <section class="container" style="padding-top: 4rem; text-align: center;">
      <h1 class="animate-fade-up" v-fade-up>Curated Works</h1>
      <p class="animate-fade-up delay-100" v-fade-up style="max-width: 600px; margin: 0 auto 6rem auto;">
        A selection of high-end digital experiences, architectural visualizations, and brand identities crafted with precision and intentionality.
      </p>
      
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; text-align: left;">
        
        <a href="#" class="project-card animate-fade-up delay-100" v-fade-up>
          <img src="/project_glass_1777910852845.png" alt="The Glass Pavilion" />
          <h2 class="project-card-title">The Glass Pavilion</h2>
        </a>

      </div>

      <div style="margin-top: 6rem;" class="animate-fade-up delay-200" v-fade-up>
        <a href="#" class="btn btn-outline" style="color: white; border-color: var(--border-dark);">Load More Works</a>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
</script>
