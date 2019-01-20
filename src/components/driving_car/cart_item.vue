<template>
    <div class="citem" @click="buy(num)">
        <div><img :src="img"/></div>
        <div><img :src="itmObj.goodsImages"/></div>
        <div>
            <p>{{itmObj.goods_name}}</p>
            <p>{{itmObj.spec}}</p>
            <p>${{itmObj.price}}</p>
            <a @click="deleteObj" :class="sca">删除</a>
        </div>
        <jia_jian @jiax="jiax" @jianx="jianx" :snum="itmObj.sum" />
    </div>
</template>
<script>
import jia_jian from './jia_jian.vue';
import {Toast} from 'mint-ui';
import vue from 'Vue';
export default {
    data(){
        return {num:200,yimg:require('../../assets/img/citem1.png'),no_img:require('../../assets/img/citem2.png'),imgx:false}
        },
    props:['xyz','itmObj','sca'],
    components:{
            jia_jian
        },
    computed:{
        img(){
            if(this.imgx){
                return this.no_img;
            }
            else{
                return this.yimg;
            }
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
            this.itmObj.sum=tou;
        },
        jianx(tou){
            console.log(tou);
            this.itmObj.sum=tou;
        },
        buy(e){
            this.imgx=!this.imgx; 
            vue.set(this.itmObj,'checked',this.imgx);

            //console.log(this.itmObj.checked,this.itmObj);
            //console.log(this.$store.state.itemTo.cart);
                 
        },
        deleteObj(){
                 
            Toast({
              message: '删除成功',
              position: 'bottom',
              duration: 1000,
              className:'toast'
            });
            //this.$store.commit('deleteObj',this.itmObj.sid);

            this.$emit('Doobj',this.itmObj.sid);
        }
    },
    watch:{
        imgx(newNum,old){
            //this.itmObj.checked=newNum;
            if(newNum)
                this.num=300
            else
                this.num=250
        }
    },
    created(){   
        this.$store.state.home.showNav = true;
        //console.log(this.$store.state.home.cart)
        //console.log('ok',this.$store.state.goodlist.lists);
    },
    mounted(){
       // console.log(this.itmObj)
    }

}
</script>

<style lang="scss">
@import './citem.scss';
</style>