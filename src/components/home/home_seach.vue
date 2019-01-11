<template>
    <div>
        <mt-header title="" fixed class="seachss">
          <router-link to="/" slot="left">
            <mt-button ><a>{{text}}</a></mt-button>
            </br>
            <mt-button ><div class="serser"><div @click="seach"></div></div></mt-button>
          </router-link>
        </mt-header>
       
    </div>
</template>
<script>
import Vue from 'vue';
import { Header,Search } from 'mint-ui';


Vue.component(Header.name, Header);
Vue.component(Search.name, Search);
export default {
    data(){
        return {text:'abc',popupVisible:false}
    },
    methods:{
        seach(){
            this.popupVisible=true;
            console.log(123456,this.popupVisible)
            this.$emit('view_ser',this.popupVisible);
        },
        closes(){
            console.log(123)
                 
            //this.popupVisible=false;
        }
    }
}

</script>
<style lang="scss">

@import '../../sass/mixin.scss';

.seachss{
    height:sss($n : 80);
}
.serser{
   div{
    height:sss($n : 33);
    width:sss($n : 304);
    background:url(../../assets/img/ser.png) no-repeat;
    background-size: 100%;
   }
}

</style>