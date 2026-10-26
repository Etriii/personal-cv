import { createRouter, createWebHistory } from 'vue-router'

export const navigation = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/experience', label: 'Experience' },
  { path: '/achievements', label: 'Achievements' },
  { path: '/contact', label: 'Contact' },
] as const

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: () => import('../pages/profile/Home.vue'), meta: { title: 'Home' } },
    { path: '/about', component: () => import('../pages/profile/About.vue'), meta: { title: 'About' } },
    { path: '/skills', component: () => import('../pages/skills/Skills.vue'), meta: { title: 'Skills' } },
    { path: '/projects', component: () => import('../pages/projects/Projects.vue'), meta: { title: 'Projects' } },
    { path: '/experience', component: () => import('../pages/experience/Experience.vue'), meta: { title: 'Experience' } },
    { path: '/achievements', component: () => import('../pages/achievements/Achievements.vue'), meta: { title: 'Achievements' } },
    { path: '/contact', component: () => import('../pages/profile/Contact.vue'), meta: { title: 'Contact' } },
    { path: '/cv', component: () => import('../pages/profile/PrintableCv.vue'), meta: { title: 'Printable CV' } },
    { path: '/:pathMatch(.*)*', component: () => import('../pages/NotFound.vue'), meta: { title: 'Page not found' } },
  ],
  scrollBehavior: (_to, _from, savedPosition) => savedPosition ?? { top: 0 },
})
