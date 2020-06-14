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
        <citem v-for="(v,i) in itemObject" :xyz="xyz"  :key="i" :itmObj="v" :sca="shanchu" @Doobj="Dobj" @up_img="up_img"/>

        <div class="cart_mai">
            <div>
                <img :src="img" @click = "quanx"/>
                <span>全选</span>
            </div>
            <div>
                <span>总计：<a>￥{{total_price}}</a></span>
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
        return {
            citems: 5,
            xyz: false,
            yimg: require('../assets/img/citem1.png'),
            no_img: require('../assets/img/citem2.png'),
            imgx: false,
            shanchu: 'shanchu',
            isDelete: true,
            //itemObject:this.$store.state.itemTo.cart,
            obj: {xx: 123, ss: 999},
            itemObject: 
            {
                '456': 
                {
                    checked: false,
                    goodsImages: "http://img.zdfei.com/static/image/goods//201909/758b997ea190aa1dcabebd18e0ba2d58.jpg",
                    goods_name: "史克肠虫清 阿苯达唑片 10片",
                    main_title: "用于治疗钩虫、蛔虫、鞭虫、蛲虫、施毛虫等线虫病外，还可用于治疗囊虫和包虫病",
                    manu_name: "中美天津史克制药有限公司",
                    price: "14.50",
                    sid: "654",
                    spec: "0.2g*10片",
                    sum: 2,
                },
                '5957':{
                    checked: false,
                    goodsImages: "http://img.zdfei.com/static/image/goods//201711/3c095405e3ec9c85408d5a3ce171984e.jpg",
                    goods_name: "白云山 小儿奇应丸 0.5g*1瓶/盒",
                    main_title: "解热定惊 ，化痰止咳 ，消食杀虫。用于小儿惊风发热，咳嗽多痰，食积，虫积。",
                    manu_name: "广州敬修堂医药股份公司",
                    price: "4.50",
                    sid: "5957",
                    spec: "0.5g",
                    sum: 1,
                }
            }
            
            }
    },
    created(){
        //this.$store.commit('buga','ds');
        //this.$store.dispatch('minusPriceAsync','dsd');
    },
    computed:{
        // itemObject(){
        //     return this.$store.state.itemTo.cart;
        // },
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
        },
        checked_all(){
            let all = []
            for(let i in this.itemObject){
                all.push(this.itemObject[i].checked) 
            }
            return all.every(item => item)
        },
        total_price(){
            let sum = 0
            for(let i in this.itemObject){
                let x = this.itemObject[i].checked ? Number.parseFloat(this.itemObject[i].price) : 0;
                sum += x*this.itemObject[i].sum
            }
            return sum.toFixed(2)
        }
    },
    components:{
        citem,
    },
    watch:{
        itemObject(){
            console.log("delete");   
        },
        checked_all(flag){
            this.imgx = flag;
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
            // for(let i in this.$store.state.itemTo.cart){
            //     //vue.set(this.$store.state.itemTo.cart[i],'checked',this.imgx);
            //     this.$store.commit('updataObj',[i,this.imgx]);
            // }
            // console.log(this.$store.state.itemTo.cart);
            for(let i in this.itemObject){
                this.itemObject[i].checked = this.imgx;
            }
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
        },
        up_img(eb){
            console.log('父组件，当前',eb);
            
            //vue.set(this.itemObject[eb[0]],'checked',!eb[1]);
            eb[1]=!eb[1];
            this.$store.commit('updataObj',eb);
        }
    },
    beforeUpdate () {
        console.log('mounted:',this.itemObject)
             
    }
}
</script>
<style lang="scss">
@import './driving_car/cart.scss';
.bot_tai{
    height:sss($n :64);
}
</style>
