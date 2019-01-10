<template>
    <div>
        <porpe @getd="getdd" :datavw="popupVisible"/>
        <seach @view_ser="view_ser"/>
        <swipe/>
        <h2 class="rexiao">热销商品</h2>
        <div class="fenfen"></div>

        <inf2 />
        <div class="link_shop">
        </div>
        <div class="link_tou">
          <div class="tou_lf"><img src="../../assets/img/jktt.png"></div>
          <div class="tou_rf"><span>小心了！做这些事情，你会招惹到“大姨妈”！</span></div>
        </div>
        <h2 class="rexiao">健康照顾方案</h2>
        
        <ul
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="15"
            class="rexiao_item_list"
          >
          <li v-for="i in list">
              <div class="rexiao_item" :style="'background:url(../../assets/img/home_item'+i+'.jpg) no-repeat;background-size: 100%;'"></div>
          </li>
        </ul>
    </div>
</template>
<script>
import { InfiniteScroll,Indicator,Popup } from 'mint-ui';
import Vue from 'vue';

import item from './item.json'
Vue.use(InfiniteScroll);

Vue.component(Popup.name, Popup);


import seach from './home_seach.vue';
import swipe from './swipe.vue';
import inf2 from './infinite2.vue';

import porpe from './porp_ser.vue'
    
export default {
    data(){
        return {list:[0,1,2,3],popupVisible:false}
    },
    methods:{
        loadMore() {
          this.loading = true;
          Indicator.open();
          setTimeout(() => {
          if(this.list.length<18){
            let last=this.list[this.list.length-1];
            console.log(last);
            this.list.push(last+1,last+2,last+3);
          }
            this.loading = false;
            Indicator.close();
          }, 500);
        },
        getdd(pV1){
          //console.log('getdd'+id);
          this.popupVisible=pV1;
        },
        view_ser(pV){
          console.log(this.popupVisible,pV)
               
          this.popupVisible=pV;
          //Vue.$forceUpdate;
        }
        },
    components:{
        seach,
        swipe,
        inf2,
        porpe
    }
}
</script>
<style lang="scss">
@import '../../sass/mixin.scss';
    .link_shop{
        width:sss($n : 304);
        height: sss($n : 77);
        background:url(../../assets/img/songhuo.png) no-repeat;
        background-size: 100%;
        

        margin:0 auto;
        margin-top: sss($n : 5);
    }
    .link_tou{
      width:100%;
      display:flex;
      justify-content:center;
      margin-top: sss($n : 15);
      border-top: sss($n : 1) solid #eee;
      border-bottom: sss($n : 1) solid #eee;
      .tou_lf{
          width:sss($n:76);
          height:sss($n:58);

          display:flex;
          flex-direction:column;
          justify-content:center;
          img{
            width:sss($n:76);
            height:sss($n:23);
          }
      }
      .tou_rf{
          width:sss($n:211);
          height:sss($n:58);

          span{
              width:sss($n:211);
              height:sss($n:58);
              line-height: sss($n:58);
              overflow: hidden;
              -webkit-line-clamp: 1;
              word-break: keep-all;
              white-space: nowrap;
              text-overflow: ellipsis;
              color: #4d4e58;
              font-size: sss($n:13);
              padding-left:sss($n:3);
              display: block;
          }
      }
    }
    .rexiao{
      font-family: SimHei,Helvetica,Arial,sans-serif;
      font-size: sss($n: 18);
      color: #4d4e58;
    }
    .rexiao_item{
      width:sss($n : 304);
      height: sss($n : 107);
      
      
      margin-top: sss($n : 15);
    }
    .rexiao_item_list{
      list-style:none;
      padding:0;
      margin:0;
    }



.fenfen{
  width:sss($n : 304);
  height: sss($n : 156);
  background:url(../../assets/img/fenfen.jpg) no-repeat;
  background-size: 100%;
  margin-left: sss($n : 10);
}
.v-modal{
opacity:1;

}
.tanpop{
  width:sss($n : 320);
  height: sss($n :45);
  display:flex;
  flex-direction:row;

  .tanpop_lf{
    height: sss($n :45);
    width: sss($n :45);
    background: pink;
  }
  div:nth-child(2){
    width: sss($n :225);
    text-align: center;
  }
  .tanpop_rf{
    height: sss($n :45);
    width: sss($n :45);
    background: pink;
  } 
}
</style>