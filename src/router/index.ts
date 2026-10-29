import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { updateSeo, routeSeoMap } from '../utils/seo';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { seo: routeSeoMap.home }
    },
    {
      path: '/about',
      redirect: '/'
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
      meta: { seo: routeSeoMap.projects }
    },
    {
      path: '/education',
      name: 'education',
      component: () => import('../views/EducationView.vue'),
      meta: { seo: routeSeoMap.education }
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('../views/ExperienceView.vue'),
      meta: { seo: routeSeoMap.experience }
    },
    {
      path: '/experience-achievements',
      redirect: '/experience'
    },
    {
      path: '/achievements',
      redirect: '/experience'
    },
    {
      path: '/profiles',
      name: 'profiles',
      component: () => import('../views/ProfilesView.vue'),
      meta: { seo: routeSeoMap.profiles }
    },
    {
      path: '/qualifications',
      redirect: '/education'
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: { seo: routeSeoMap.contact }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
      meta: { seo: routeSeoMap.notFound }
    }
  ],
  scrollBehavior() {
    return { top: 0 };
  }
});

router.beforeEach((_to, _from, next) => {
  document.body.classList.add('theme-dark');
  document.body.classList.remove('theme-light');
  next();
});

router.afterEach((to) => {
  const seoConfig = (to.meta && to.meta.seo) 
    ? (to.meta.seo as typeof routeSeoMap.home)
    : routeSeoMap.home;
  updateSeo(seoConfig);
});

export default router;
