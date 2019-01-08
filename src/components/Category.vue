<template>
    <div>
        <mt-search placeholder="药品、品牌或症状"  ></mt-search>
        <div class="box">

        <mt-navbar v-model="selected">
            <mt-tab-item :id="tab.pid" v-for="tab in catelist" :key="tab.name" >{{tab.name}}</mt-tab-item>
        </mt-navbar>
        </div>
        <div class="wrapper" ref="wrapper">
            <ul class="content">
                <li ref="li2" v-for="tab in catelist" :key="tab.name">{{tab}}</li>
            </ul>
        </div>
        <div class="div2"></div>
        <!-- <router-view/> -->
    </div>
</template>
<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
import catelist from '../assets/json/category.json';


document.documentElement.style.fontSize=document.documentElement.clientWidth/10+"px"
        console.log( document.documentElement.fontSize)



export default {
    data(){
        return {
            catelist,
            selected:'857'
        }
    },
    // computed:{
    //     ...mapState({
    //         // 映射this.tabList为this.$store.state.category.cateTab
    //         tabList:(state)=>{
    //             return state.category.cateTab
    //         }
    //     })
    // },
    computed:mapState([
    'category' //把this.cart映射为this.$store.state.cart
    ]),
    methods:{
    //     goto(name){
    //     this.$router.push({path:'/category/'+name})
    //   }
    },
    mounted(){
        // let name=this.$route.path.substring(1,this.$route.path.length)
        
        // console.log(name.substring(name.indexOf('/')+1,name.length))
        // this.selected=name.substring(name.indexOf('/')+1,name.length)
    }
}
</script>
<style lang="scss">

@import '../sass/mixin.scss';

.content{
    width:sss($n : 320);
    list-style:none;
    padding:0;
    margin:0;
}
.wrapper{
   width:sss($n : 320);
   overflow:hidden; 
}
.content>li{
    width:sss($n : 320);
    font-size: sss($n : 16);
}
.box{
    overflow: auto;
    height: 52px;
    &::-webkit-scrollbar {
        display: none;
    }
}
.mint-search{
    height: 100%!important;
    .mint-searchbar{
        background: #fff;
        padding: 8px 44px;
        // height: 44px;
        .mint-searchbar-inner{
            background:#efefef;
            border-radius: 20px;
            height: 22px;
            input{
                background:#efefef;
            }
        }
    }
}
.mint-navbar{
    width: 370px;
    .mint-tab-item{
        // padding: 0 2px;
        margin: 0 2px;
        width: 72px;
        .mint-tab-item-label{
            font-size: 14px;
        }
        &.is-selected{
        color: #808080;
        border-bottom: 2px solid #808080;
        font-weight: bold;
        }
    }
    
}
</style>
