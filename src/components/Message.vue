<template>
  <div class="consult">
    <div class="xhead">
      <img src="https://fs-km.7moor.com/N00000015681/km/2017-12-13/1513143654749/2fdc00d0-dfc8-11e7-b456-8f07aaa2b37d" alt="" />
      <p>111医药馆</p>
      <span @click="go_back">X</span>
    </div>
    <div class="conter">
    
    </div>
    <div class="xMessage">
      <div class="toor_bar">

      </div>
      <div>
        <textarea placeholder="说点什么吧..."></textarea>
      </div>
      <div class="xbottom">
        <span>发送</span>
      </div>
    </div>
  </div>
</template>
 
<script>
import { mapState } from "vuex";
 
import BScroll from "better-scroll";
 
export default {
  data() {
    return {
      currentIndex: 0
    };
  },
  //接收父组件传过来的值
  props: {},
  components: {},
  created() {
    this.$store.state.home.showNav = false;
  },
  mounted() {

  },
  methods: {
     go_back(){
        this.$router.go(-1);
    }
  },
  computed: {

  },
  mounted(){
    console.log('message')
  }
};
</script>
 
 
<style lang="scss">
@import './message/message.scss';

</style>
