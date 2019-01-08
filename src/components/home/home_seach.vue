<template>
    <div>
        <mt-header title="" fixed>
          <router-link to="/" slot="left">
            <mt-button ><a>{{text}}</a></mt-button>
          </router-link>
        </mt-header>
        <div @click="seach()">
            <mt-search v-model="text" class="dl dl2" ></mt-search>
        </div>
        <mt-popup
          v-model="popupVisible"
          class="ttttt"
          position="right"
          
          >
        <mt-search v-model="text" placeholder="搜索" cancel-text="取消" class="dl2"></mt-search>
        <button @click="closes()">取消</button>
        </mt-popup>
    </div>
</template>
<script>
import Vue from 'vue';
import { Header,Popup,Search } from 'mint-ui';


Vue.component(Header.name, Header);
Vue.component(Search.name, Search);
export default {
    data(){
        return {text:'abc',popupVisible:false}
    },
    methods:{
        seach(){
            this.popupVisible=true;
        },
        closes(){
            console.log(123)
                 
            this.popupVisible=false;
        }
    }
}

</script>
<style>
a{
    color:red;
}
.dl{
padding-top:39px;
}
.dl2{
    height:52px;
}
.mint-searchbar{
    background-color: #26a2ff;
}
.div1{
    height: 400px;
    width: 400px;
    background:red;
}
.ttttt{
    height: 100%;
    width:100%;
    background:#999;
}
.mint-search-list{
    position: relative;
}

</style>