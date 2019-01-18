<template>
    <div class="citem" @click="buy(num)">
        <div><img :src="img"/></div>
        <div><img src="../../assets/img/hot2.jpg"/></div>
        <div>
            <p>仲景 浓缩当归丸 200丸{{ko}}</p>
            <p>{{num}}丸</p>
            <p>$15.80</p>
        </div>
        <jia_jian @jiax="jiax" @jianx="jianx"/>
    </div>
</template>
<script>
import jia_jian from './jia_jian.vue';
export default {
    data(){
        return {num:200,yimg:require('../../assets/img/citem1.png'),no_img:require('../../assets/img/citem2.png'),imgx:false}
        },
    components:{
            jia_jian
        },
    computed:{
        img(){
            if(this.imgx)
                return this.no_img;
            else
                return this.yimg;
        },
        ko:{
            get(){
               return 998; 
            },
            set(e){
                console.log(e)    
            }
            
        }
    },
    methods:{
        jiax(tou){
            console.log(tou);      
        },
        jianx(tou){
            console.log(tou);
        },
        buy(e){
            console.log(e);
            this.imgx=!this.imgx; 

        }
    },
    watch:{
        imgx(newNum,old){
            if(newNum)
                this.num=300
            else
                this.num=250

        }
    },
    created(){
        this.$store.state.home.showNav = true;
    }
}
</script>

<style lang="scss">
@import './citem.scss';
</style>