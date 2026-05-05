<template>
  <SiteHeader />
  <router-view />
  <SiteFooter />
</template>

<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue';
import SiteFooter from './components/SiteFooter.vue';
</script>
