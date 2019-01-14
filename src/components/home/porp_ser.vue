<template>
<mt-popup
v-model="popupVisible"
position="top"
modal="true"
>
<div class="tanpop">
<div class="tanpop_lf"></div>
<div><input @click="fen" /></div>
<div class="tanpop_rf">搜索</div>
</div>
</mt-popup>
</template>


<script>
export default {
    props:['datavw'],
    data(){
        return {data:[0,1,2,3],popupVisible:this.datavw}
    },
    methods:{
      fen(){
        this.$emit('getd',123);
      }
    },
    components:{

    }
}


</script>



<style lang="scss">
@import '../../sass/mixin.scss';
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