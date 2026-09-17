import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      redirect: '/'
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue')
    },

    {
      path: '/qualifications',
      name: 'qualifications',
      component: () => import('../views/QualificationsView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
});

router.beforeEach((to, _from, next) => {
  if (to.path === '/' || to.path === '/about') {
    document.body.classList.add('theme-light');
    document.body.classList.remove('theme-dark');
  } else {
    document.body.classList.add('theme-dark');
    document.body.classList.remove('theme-light');
  }
  next();
});

export default router;
