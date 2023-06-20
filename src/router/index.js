// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../store/AuthLogon';


const routes = [
  { path: '/', component: () => import('@/views/LoginView.vue') },
  { path: '/register', name:'register', component: () => import('@/views/RegisterView.vue') },
  { path: '/dashboard', component: () => import('@/views/DashboardView.vue') },
  { path: '/home', component: () => import('@/views/Home.vue') },
  { path: '/cadastro', component: () => import('@/views/Cadastro.vue') },
  { path: '/Test', component: () => import('@/views/Test.vue') },
  { path: '/Formdata', component: () => import('@/views/Formdata.vue') },
]


export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes,
})

router.beforeEach(async (to) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/'];
  const authRequired = !publicPages.includes(to.path);
  const store = useAuthStore();
  if (authRequired && !store.user) {
      store.returnUrl = to.fullPath;
      store.msg = null
      return '/';
  } else {
    store.msg = true
  }
});

export default router


