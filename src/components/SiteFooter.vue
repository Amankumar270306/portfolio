<template>
  <footer class="site-footer">
    <div class="container footer-content">
      <div class="logo">AMAN</div>
      <p class="text-small-caps copyright">&copy; 2026 Aman. All Rights Reserved.</p>
      <div class="footer-links text-small-caps">
        <a href="https://www.linkedin.com/in/aman-kumar-aka-umang/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/Amankumar270306" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://leetcode.com/u/amankumar_pro2006/" target="_blank" rel="noopener noreferrer">LeetCode</a>
        <a href="https://codeforces.com/profile/amankumar.pro" target="_blank" rel="noopener noreferrer">Codeforces</a>
        <a href="https://www.codechef.com/users/amankumarpro" target="_blank" rel="noopener noreferrer">CodeChef</a>
        <a href="https://atcoder.jp/users/amankumarpro2006" target="_blank" rel="noopener noreferrer">AtCoder</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.site-footer {
  background: var(--bg-dark);
  color: var(--text-muted);
  padding: 3rem 0;
  border-top: 1px solid var(--border-dark);
  margin-top: 6rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.copyright {
  margin: 0;
}

.footer-links {
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
  align-items: center;
}

.footer-links a {
  color: inherit;
  text-decoration: none;
  transition: color var(--transition-normal);
}

.footer-links a:hover {
  color: var(--accent-gold);
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: 1.25rem;
  }
}
</style>
