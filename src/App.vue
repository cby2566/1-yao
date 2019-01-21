<template>
    <div>
        <router-view/>
        <mt-tabbar :selected="selected" :fixed="true" v-if="$store.state.home.showNav">
        <span class="cart_fx">{{Object.keys(this.$store.state.itemTo.cart).length}}</span>
            <mt-tab-item :id="tab.text" v-for="(tab,idx) in tabs" :key="idx" @click.native="goto(tab.path,idx)">
                 <img slot="icon" :src="selected===tab.name?bian(tab.icon,false):bian(tab.icon,true)">
                <!-- <img slot="icon" :src=bian(123,true)> -->
                {{tab.text}}
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
import Vue from "vue";
import MintUI from "mint-ui";
Vue.use(MintUI);
import "./sass/common.scss";
import "mint-ui/lib/style.css";


// import { create } from 'domain';
// import { constants } from 'http2';
import axios from 'axios';
Vue.prototype.$axios = axios;
export default {
    data(){
        return {
            tabs:[
                {
                    text: '首页',
                    icon: 'home',
                    path: '/home',
                    name: 'home'
                },
                {
                    text: '分类',
                    icon: 'category',
                    path: '/category',
                    name: 'category'
                },
                {
                    text: '问药',
                    icon: 'message',
                    path: '/message',
                    name: 'message'
                },
                {
                    text: '清单',
                    icon: 'cart',
                    path: '/cart',
                    name: 'cart'
                },
                {
                    text: '我的',
                    icon: 'mine',
                    path: '/mine',
                    name: 'mine'
                }
            ],
            selected:'home'
            ,img:require('./assets/img/home.png')
            
        }
    },
    methods:{
        goto(path,idx){
            this.selected=this.tabs[idx].name
            // console.log(this.selected)
            this.$router.push({path});
            let name=this.$router.history.current.path
            // console.log(name.indexOf('category'))
            // console.log(this.$router.history.current.path)
        },
        bian(idx,flag){
            if(flag){
                return require(`./assets/img/${idx}.png`);
            }else{
                return require(`./assets/img/${idx}now.png`);
            }
        }
    },
    computed:{
        isselected:{
            // if(now===this.$router.history.current.name){
            //     this.icon=this.icon+'now';
            // }
            // return `../assets/img/${this.icon}.png`
            get(){
                return `../assets/img/${this.icon}.png`;
            },
            set(now){
            if(now===this.$router.history.current.name){
                this.icon=this.icon+'now';
                }
            return `../assets/img/${this.icon}.png`
            }
        }
    },
    watch:{
        //监听路由变化 根据路由改变数据中selected
        $route(newvalue,oldvalue){
            let name=newvalue.path.substring(1,newvalue.path.length)
            //console.log(123,name.substring(0,name.indexOf('/')))
            if(name.indexOf('/')!=-1){
                this.selected=name.substring(0,name.indexOf('/'))
            }else{
                this.selected=name
                console.log(name)
            }
        }
    },
    created(){
        this.$store.state.home.showNav = true;
    },
    mounted(){
        // console.log(this.$route.path)
        // this.selected=this.$route.name
        let name=this.$route.path.substring(1,this.$route.path.length)
            //console.log(123,name.substring(0,name.indexOf('/')))
        if(name.indexOf('/')!=-1){
            this.selected=name.substring(0,name.indexOf('/'))
        }else{
            this.selected=name
            console.log(name)
        }
    }
}
</script>
<style lang="scss">

    @import './sass/mixin.scss';
    .mint-tab-item{
        img{
            width: 38px;
            height: 26px;
            margin-left: -7px;
        }
        .mint-tab-item-label{
            color: #4d4e58;
        }
    }
    .cart_fx{
        position:fixed;
        bottom:sss($n : 40);
        right:sss($n : 70);
        font-size:sss($n :12);
        display:block;
        width:sss($n :25);
        height:sss($n :18);
        background:#ff4100;
        border-radius:sss($n :7);
        color: #fff;
    }
</style>