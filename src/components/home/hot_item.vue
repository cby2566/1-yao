<template>
    <div class="htitem">
      <img :src='imgurl'/>
      <p>{{itemName}}</p>
      <span>￥{{price}}</span>
    </div>
</template>
<script>

  
export default {
  props:['imgurl','itemName','price']
}
</script>

<style lang="scss">
@import '../../sass/mixin.scss';
.htitem{

    border: sss($n : 1) solid #eff1f7;
    border-radius: sss($n : 5);
    padding: sss($n : 10);

    width: sss($n : 85);
    margin-right: sss($n : 10);

    text-align: center;
    img{
      width: sss($n : 63);
      height: sss($n : 63);
    }
    p{
      font-size:sss($n : 12);
      overflow: hidden;
      -webkit-line-clamp: 1;
      color: #4d4e58;
      word-break: keep-all;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    span{
      color: #ff6b5f;
      display: block;
      margin-top: sss($n : 5);
      margin-left: sss($n : -5);
      font-family: SimHei,Helvetica,Arial,sans-serif;
      font-weight: 600;
      font-size: sss($n : 12);
      height: sss($n : 15);
    }
}


</style>