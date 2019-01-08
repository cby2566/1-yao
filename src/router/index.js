import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from '@com/Home.vue';
import Category from '@com/Category.vue';
    import Crowd from '@com/Crowd.vue';
    import Family from '@com/Family.vue';
    import Instrument from '@com/Instrument.vue';
    import Health from '@com/Health.vue';
    import Herb from '@com/Herb.vue';
import Message from '@com/Message.vue';
import Cart from '@com/Cart.vue';
import Mine from '@com/Mine.vue';
const routes=[
    {name:'Home',path:'/home',component: Home},
    {path:'/',redirect:{name:'Home'}},
    {name:'Category',
    path:'/category',
    component: Category,
    // children:[
    //     {
    //       path:'',//默认子路由
    //       redirect:{name:'Crowd'}
    //     },
    //     {
    //       path:'857',//当url为/list/in_theaters匹配这个子路由
    //       name:'Crowd',
    //       component:Crowd,
    //       meta:{
    //           requireAuth:true
    //       }
    //     },
    //     {
    //       path:'1039',
    //       name:'Family',
    //       component:Family
    //     },
    //     {
    //       path:'1076',
    //       name:'Instrument',
    //       component:Instrument
    //     },
    //     {
    //       path:'1137',
    //       name:'Health',
    //       component:Health
    //     },
    //     {
    //       path:'1163',
    //       name:'Herb',
    //       component:Herb
    //     }
    //   ]
    },
    {name:'Message',path:'/message',component: Message},
    {name:'Cart',path:'/cart',component: Cart}, 
    {name:'Mine',path:'/mine',component: Mine}
]

let router = new VueRouter({
    routes
});

export default router