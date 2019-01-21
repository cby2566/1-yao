<template>
    <div class="Cart">
        <div class="cart_herd">
            <div @click="go_back"></div>
            <div>药品清单</div>
            <div @click="bian">编辑</div>
        </div>
        <div class="cart_link">
            <div></div>
            <div>111医药馆商城 1日后到家</div>
            <div @click="xyzwv">满99元免运费</div>
        </div>
        <citem v-for="(v,i) in itemObject" :xyz="xyz"  :key="i" :itmObj="v" :sca="shanchu" @Doobj="Dobj"/>

        <div class="cart_mai">
            <div>
                <img :src="img" @click = "quanx"/>
                <span>全选</span>
            </div>
            <div>
                <span>总计：<a>￥0.00</a></span>
                <span>不含运费，已优惠-￥0</span>
            </div>
            <div>结算（{{sum}}）</div>
        </div>
        <div class="bot_tai"></div>
    </div>
</template>
<script>
import citem from './driving_car/cart_item.vue';
import vue from 'Vue'
export default {
    data(){
        return {citems:5,xyz:false,yimg:require('../assets/img/citem1.png'),no_img:require('../assets/img/citem2.png'),imgx:false,shanchu:'shanchu',isDelete:true,itemObject:this.$store.state.itemTo.cart,obj:{xx:123,ss:999}}
    },
    created(){
        //this.$store.commit('buga','ds');
        //this.$store.dispatch('minusPriceAsync','dsd');
    },
    computed:{
        /*itemObject(){
            return this.$store.state.itemTo.cart;
        },*/
        sum(){    
            for(let i in this.$store.state.itemTo.cart){
                console.log(this.$store.state.itemTo.cart[i].checked)
            }
            return Object.keys(this.$store.state.itemTo.cart).length;
        },
        img(){
            if(this.imgx){
                return this.no_img;
            }
            else{
                return this.yimg;
            }
        }
    },
    components:{
        citem,
    },
    watch:{
        itemObject(){
            console.log("delete");   
        }
    },
    methods:{
        xyzwv(){
            this.xyz=true;
        },
        go_back(){
            this.$router.go(-1);
        },
        quanx(){
            this.imgx=!this.imgx;
            for(let i in this.$store.state.itemTo.cart){
                //vue.set(this.$store.state.itemTo.cart[i],'checked',this.imgx);
                this.$store.commit('updataObj',[i,this.imgx]);
            }
            console.log(this.$store.state.itemTo.cart);
                 
        },
        bian(){
            //vue.delete(this.obj, 'xx')
    
            if(this.isDelete){
                this.shanchu="shanchu1";
                this.isDelete=!this.isDelete;
            }else{
                this.shanchu="shanchu";
                this.isDelete=!this.isDelete;
            }
        },
        Dobj(e){

            console.log(this.itemObject);
            //this.itemObject.shift();
            //delete this.itemObject[e];
            vue.delete(this.itemObject, e);
            //this.$store.commit('deleteObj',e);
            console.log(this.itemObject)
        }
    }
}
</script>
<style lang="scss">
@import './driving_car/cart.scss';
.bot_tai{
    height:sss($n :64);
}
</style>
