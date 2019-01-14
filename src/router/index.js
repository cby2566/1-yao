import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from '@com/Home.vue';
import Category from '@com/Category.vue';
import Message from '@com/Message.vue';
import Cart from '@com/Cart.vue';
import Mine from '@com/Mine.vue';
import Goodlist from '@com/goodlist/Goodlist.vue'
import Login from '@com/login/Login.vue'
const routes=[
    {name:'Home',path:'/home',component: Home},
    {path:'/',redirect:{name:'Home'}},
    {name:'Category',
    path:'/category',
    component: Category,
    // children:[
    //     {
    //       path:':id',//当url为/list/in_theaters匹配这个子路由
    //       name:'Goodlist',
    //       component:Goodlist,
    //       meta:{
    //           requireAuth:true
    //       }
    //     },
    //   ]
    },
    {name:'Message',path:'/message',component: Message},
    {name:'Cart',path:'/cart',component: Cart}, 
    {name:'Goodlist',path:'/goodlist',component: Goodlist}, 
    {name:'Mine',path:'/mine',component: Mine,meta:{
        requireAuth:true
    }},
    {name:'Login',path:'/login',component: Login}
]

let router = new VueRouter({
    routes
});
// 全局路由守卫
// 在进入某个路由前执行的代码
router.beforeEach((to,from,next)=>{
    if(to.meta.requireAuth){
      // 判断是否登录
      if(sessionStorage.getItem('token')){
        // if(router.app.$store.state.token){
            next();
        }else{
            next({
                path:'/login'
            })
        }
    }else{
      // 要进入to路由，必须调用next()方法
        next();
    }
  });
export default router