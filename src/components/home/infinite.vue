<template>
    <div>
        <seach/>
        <swipe/>
        <inf2 />
        <div class="link_shop">
          
        </div>
        <ul
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="15">
          <li v-for="item in list">{{ item }}</li>
        </ul>
    </div>
</template>
<script>
import { InfiniteScroll,Indicator } from 'mint-ui';
import Vue from 'vue';
Vue.use(InfiniteScroll);


import seach from './home_seach.vue';
import swipe from './swipe.vue'
import inf2 from './infinite2.vue'

import jso from './hot.json'

console.log(jso)
     
export default {
    data(){
        return {list:[1,2,3,4,5,6,7,8,9,101,2,3,4,5,6,7,8,9,101,2,3,4,5,6,7,8,9,10]}
    },
    methods:{
        loadMore() {
          this.loading = true;
          Indicator.open();
          setTimeout(() => {
          let last = this.list[this.list.length - 1];
            for (let i = 1; i <= 10; i++) {
              this.list.push(last + i);
            }
            this.loading = false;
            Indicator.close();
          }, 500);
        }},
    components:{
        seach,
        swipe,
        inf2
    }
}
</script>
<style >
    .link_shop{
        width:98%;
        height:100px;
        background:url(../../assets/img/songhuo.png) no-repeat;
        background-size: 100%;
        margin-top: 5px;
        margin:0 auto;
    }

</style>