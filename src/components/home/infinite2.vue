<template>
    <div class="heng1">
      <div class="slide-box">

        <hot_item :key="i" v-for="(v,i) in itemData" :imgurl="simg(i)" :itemName="v['short_name']" :price="v['price']" />
        
      </div>
    </div>
</template>
<script>
import { InfiniteScroll} from 'mint-ui';
import Vue from 'vue';
import hot_item from './hot_item.vue';

import hot from './hot.json'

//console.log(hot);
     
     
Vue.use(InfiniteScroll);
export default {
    data(){
        return {itemData:hot['hotgoodslist'],good_id:hot['hotgoodslist'][0].goods_id}
    },
    methods:{
        loadMore() {
          
        },
        simg(idm){
            return require('../../assets/img/hot'+idm+'.jpg');
        }
    },
    components:{
        hot_item
    }
}
</script>
<style lang="scss">
@import '../../sass/mixin.scss';
.slide-box{
    display: -webkit-box;
    overflow-x: scroll;
    -webkit-overflow-scrolling:touch;
}
.slide-box::-webkit-scrollbar {
        display: none;
    }
.slide-item{
    width: sss($n :97);
    border:1px solid #ccc;
    margin-right: sss($n :5);
    border-radius: sss($n :5);
}
</style>