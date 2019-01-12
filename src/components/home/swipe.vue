<template>
    <div>
       <mt-swipe :auto="4000" class="lun" @change="handleChange">
          <mt-swipe-item v-for="(item, index) in tu" :key="item">
            <div :class="['tut',tutu(item)]">{{item}}</div>
          </mt-swipe-item>
        </mt-swipe>
        
    </div>
</template>
<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

export default {
    data(){
        return {test:'abc',color:0 ,tu:{a:10,b:20,c:30}}
    },
    methods: {
      handleChange(index) {

      },
      tutu(i){
        if(i==10){
            return "tutu"
        }else if(i==20){
            return "tutu2"
        }else if(i==30){
            return "tutu3"
        }
      }
    }
}

</script>

<style lang="scss">
@import '../../sass/mixin.scss';
.lun{
    margin-top:sss($n:80);
    height:sss($n :97);
}
.tutu{
    background:url(../../assets/img/lun1.jpg) no-repeat;
}
.tutu2{
    background:url(../../assets/img/lun2.jpg) no-repeat;
}
.tutu3{
    background:url(../../assets/img/lun3.jpg) no-repeat;
}
.tut{
    width:97%;
    height:97%;
    background-size: 100%;
    margin: 0 auto;
    margin-top:sss($n:5);
    border-radius: sss($n:10);
}
</style>