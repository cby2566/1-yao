import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from '@com/Home.vue';
import Category from '@com/Category.vue';
import Message from '@com/Message.vue';
import Cart from '@com/Cart.vue';
import Mine from '@com/Mine.vue';
const routes=[
    {name:'Home',path:'/home',component: Home},
    {path:'/',redirect:{name:'Home'}},
    {name:'Category',path:'/category',component: Category},
    {name:'Message',path:'/message',component: Message},
    {name:'Cart',path:'/cart',component: Cart}, 
    {name:'Mine',path:'/mine',component: Mine}
]

let router = new VueRouter({
    routes
});

export default router