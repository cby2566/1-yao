import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from '@com/Home.vue';
import Category from '@com/Category.vue';
import Message from '@com/Message.vue';
import Cart from '@com/Cart.vue';
import Mine from '@com/Mine.vue';
import itemx from '@com/item/itemx.vue'
import Goodlist from '@com/goodlist/Goodlist.vue'
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
    {name:'Mine',path:'/mine',component: Mine},
    {name:'itemx',path:'/itemx',component: itemx},
    {name:'Goodlist',path:'/goodlist',component: Goodlist}, 
]

let router = new VueRouter({
    routes
});

export default router