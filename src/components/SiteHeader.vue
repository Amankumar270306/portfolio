<template>
  <header class="site-header">
    <router-link to="/" class="logo">AMAN</router-link>
    <nav class="nav-links" :class="{ 'nav-open': isMenuOpen }">
      <router-link to="/" class="nav-link" @click="closeMenu">ABOUT</router-link>
      <router-link to="/education" class="nav-link" @click="closeMenu">EDUCATION</router-link>
      <router-link to="/experience" class="nav-link" @click="closeMenu">EXPERIENCE &amp; ACHIEVEMENTS</router-link>
      <router-link to="/profiles" class="nav-link" @click="closeMenu">PROFILES</router-link>
      <router-link to="/projects" class="nav-link" @click="closeMenu">PROJECTS</router-link>
      <router-link to="/contact" class="nav-link" @click="closeMenu">CONTACT</router-link>
      <a href="/Resume.pdf" target="_blank" class="btn btn-gold mobile-resume-btn" @click="closeMenu">RESUME</a>
    </nav>
    <a href="/Resume.pdf" target="_blank" class="btn btn-gold desktop-resume-btn">RESUME</a>

    <button 
      class="mobile-menu-toggle" 
      :class="{ 'is-active': isMenuOpen }" 
      @click="toggleMenu"
      aria-label="Toggle navigation menu"
    >
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const isMenuOpen = ref(false);
const route = useRoute();

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

watch(() => route.path, () => {
  isMenuOpen.value = false;
});
</script>

<style scoped>
.nav-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav-link {
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  white-space: nowrap;
}

.mobile-resume-btn {
  display: none;
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 28px;
  height: 22px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 110;
}

.mobile-menu-toggle .bar {
  width: 100%;
  height: 2px;
  background-color: var(--accent-gold);
  transition: all var(--transition-fast);
  border-radius: 2px;
}

.mobile-menu-toggle.is-active .bar:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.mobile-menu-toggle.is-active .bar:nth-child(2) {
  opacity: 0;
}
.mobile-menu-toggle.is-active .bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 960px) {
  .site-header {
    padding: 1.25rem 1.5rem !important;
  }

  .desktop-resume-btn {
    display: none;
  }

  .mobile-menu-toggle {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 320px;
    height: 100vh;
    background-color: rgba(18, 18, 18, 0.98);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-left: 1px solid var(--border-dark);
    flex-direction: column;
    padding: 6rem 2rem 3rem 2rem;
    gap: 1.75rem;
    transition: right 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 105;
  }

  .nav-links.nav-open {
    right: 0;
    box-shadow: -15px 0 35px rgba(0, 0, 0, 0.7);
  }

  .nav-link {
    font-size: 0.9rem;
    letter-spacing: 0.2em;
    padding: 0.5rem 0;
  }

  .mobile-resume-btn {
    display: inline-flex;
    margin-top: 1.5rem;
    width: 100%;
    text-align: center;
  }
}
</style>
