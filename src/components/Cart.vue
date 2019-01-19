<template>
    <div class="Cart">
        <div class="cart_herd">
            <div></div>
            <div>药品清单</div>
            <div>编辑</div>
        </div>
        <div class="cart_link">
            <div></div>
            <div>111医药馆商城 1日后到家</div>
            <div @click="xyzwv">满99元免运费</div>
        </div>
        <citem v-for="i in citems" :xyz="xyz"/>

        <div class="cart_mai">
            <div>
                <img src="../assets/img/citem1.png"/>
                <span>全选</span>
            </div>
            <div>
                <span>总计：<a>￥0.00</a></span>
                <span>不含运费，已优惠-￥0</span>
            </div>
            <div>结算（0）</div>
        </div>
        <div class="bot_tai"></div>
    </div>
</template>
<script>
import citem from './driving_car/cart_item.vue';
export default {
    data(){
        return {citems:5,xyz:false}
    },
    created(){

    },
    components:{
        citem
    },
    methods:{
        xyzwv(){
            this.xyz=true;
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
