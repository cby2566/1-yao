<template>
    <div class="heng1">
      <div class="slide-box">
        <div class="slide-item"></div>
        <div class="slide-item"></div>
        <div class="slide-item"></div>
        <div class="slide-item"></div>
        <div class="slide-item"></div>
        <div class="slide-item"></div>
        <div class="slide-item"></div>
      </div>
    </div>
</template>
<script>
import { InfiniteScroll} from 'mint-ui';
import Vue from 'vue';
Vue.use(InfiniteScroll);


export default {
    data(){
        return {}
    },
    methods:{
        loadMore() {
          
        }},
    components:{

    }
}
</script>
<style>
.slide-box{
    display: -webkit-box;
    overflow-x: scroll;
    -webkit-overflow-scrolling:touch;
}
.slide-box::-webkit-scrollbar {
        display: none;
    }

.slide-item{
    width: 200px;
    height: 200px;
    border:1px solid #ccc;
    margin-right: 10px;
    border-radius: 5px;
}


</style>