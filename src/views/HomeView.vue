<template>
  <main>
    <section class="container" style="padding-top: 4rem; padding-bottom: 4rem; display: flex; gap: 4rem; align-items: center; min-height: 80vh;">
      <div style="flex: 1; max-width: 600px;">
        <p class="text-small-caps text-gold animate-fade-up" v-fade-up style="margin-bottom: 2rem;">THE DATA SCIENCE ENTHUSIAST</p>
        <h1 class="animate-fade-up delay-100" v-fade-up style="color: #cccccc; margin-bottom: 2.5rem;">
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
        <div style="padding: 2rem; background: #e0e0e0; display: inline-block;">
          <img src="/photo.png" alt="Aman Portrait" style="width: 100%; max-width: 450px; height: auto; display: block; filter: grayscale(100%) contrast(1.2);" />
        </div>
      </div>
    </section>

    <section class="container section">
      <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 3rem;">
        <h2 class="animate-fade-up" v-fade-up style="max-width: 500px; color: #cccccc;">Disciplines refined through rigorous execution.</h2>
        <router-link to="/qualifications" class="text-small-caps text-gold animate-fade-up" v-fade-up style="text-decoration: none;">All Services &rarr;</router-link>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
        <div class="card animate-fade-up delay-100" v-fade-up style="background: #a0a0a0; border: none;">
          <div class="text-gold" style="font-size: 1.5rem; margin-bottom: 4rem;">&#9651;</div>
          <h3 style="color: white; margin-bottom: 1rem;">Spatial Curation</h3>
          <p style="color: #e0e0e0;">Balancing volume and void to create environments of quiet significance.</p>
        </div>
        
        <div class="card animate-fade-up delay-200" v-fade-up style="background: #a0a0a0; border: none;">
          <div class="text-gold" style="font-size: 1.5rem; margin-bottom: 4rem;">&#9671;</div>
          <h3 style="color: white; margin-bottom: 1rem;">Material Selection</h3>
          <p style="color: #e0e0e0;">Sourcing tactile, premium materials that age with grace and distinction.</p>
        </div>

        <div class="card animate-fade-up delay-300" v-fade-up style="background: #a0a0a0; border: none;">
          <div class="text-gold" style="font-size: 1.5rem; margin-bottom: 4rem;">&#8801;</div>
          <h3 style="color: white; margin-bottom: 1rem;">Atmospheric Control</h3>
          <p style="color: #e0e0e0;">Orchestrating light, shadow, and acoustics for a comprehensive sensory experience.</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
</script>
