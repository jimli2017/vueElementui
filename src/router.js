import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import login from './views/login.vue'
import home from './views/home.vue'
import myself from './views/myself.vue'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'index',
      component: index,
      children: [{
          path: '',
          name: 'home',
          component: home
        },
        {
          path: '/home',
          name: 'home',
          component: home
        },
        {
          path: '/myself',
          name: 'myself',
          component: myself
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }

  ]
});

//路由守卫
router.beforeEach((to, from, next) => {
  console.log(localStorage.tocken);
  const isLogin = localStorage.tocken ? true : false;
  if (to.path == '/login') {
    next();
  } else {
    isLogin ? next() : next('/login');
  }

  next() // 必须使用 next ,执行效果依赖 next 方法的调用参数
})
export default router;