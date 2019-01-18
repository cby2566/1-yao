<template>
    <div class="itemx">
        <div class="item_top">
            <div></div>
            <div></div>
        </div>
        <div class="item_bottm">
            <div>
                <img src="../../assets/img/zdzx.png" />
                <a>咨询</a>
            </div>
            <div>
                <img src="../../assets/img/zdzx2.png" />
                <a>咨询</a>
            </div>
            <div>
                <img src="../../assets/img/zdzx3.png" />
                <a>咨询</a>
            </div>
            <div>加入清单</div>
            <div>立即购买</div>
        </div>

        <div class="item_cont">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(item,idx) in goodsImages" :key="idx"><img class="itemx_img" :src="'http://img.zdfei.com'+item.images" /></mt-swipe-item>
        </mt-swipe>

                

            <div class="item_tit">
                <a>{{goods_name}}</a>
                <span class="_otc">OTC</span>
            </div>
            <div class="item_more">
                <div>功效</div>
                <div>{{main_title}}</div>
                <div><img src="../../assets/img/item_dian.png" />
                </div>
            </div>
            <div class="item_more">
                <div>规格</div>
                <div>{{spec}}</div>
                <div><img src="../../assets/img/item_dian.png" />
                </div>
            </div>
            
        
        </div>
        <div class="_sel_spc clearfix">
            <strong class="_left_line"></strong>
            <span class="_sel_text">猜你在找</span>
            <strong class="_right_line"></strong>
        </div>
        <inf2 />
        <tabs></tabs>

        <h1 class="item_qing" @click="qing">{{itemto}}</h1>
        <h1 class="item_qing" @click="qing">{{y}}</h1>
        

    </div>
</template>
<script>

import aja from './ajax.js';
//import './item.scss';
import inf2 from '../home/infinite2.vue';
import tabs from './item_tabs.vue';

import { TabContainer, TabContainerItem , Indicator} from 'mint-ui';
import Vue from 'vue';


Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
//cnpm i ee-first -D
let idxx=function(arg) {
   return arg
}
export default {
    data(){
        return {itemto:123,active:'777',
            goods_name:'',
            main_title:'',
            manu_name:'',
            spec:'',
            price:'',
            img:'http://img.zdfei.com'+'/',
            goodsImages:[{images:'/static/image/goods//201806/2959db314456b18a9e5f7dd199b95f67.jpg'}],
            sid:0
        }
    },
    methods:{
        qing(qid){ 
            Indicator.open();
            aja['p'](qid).then((res)=>{
                let data=JSON.parse(res);
                let {goods_name,main_title,manu_name,spec,id}=data.goods;

                let {price}=data.goodsPrice;

                this.goods_name=goods_name;
                this.main_title=main_title;
                this.manu_name=manu_name;
                this.spec=spec;
                this.price=price;
                this.goodsImages=data.goodsImages;
                this.sid=id;
                Indicator.close();
            });
        },
        tabs1(ok){
            console.log(ok);  
        }
    },
    computed:{
        ...idxx({
        y:function(){
            return {x:1,y1:2,d:3}
        },
        arr:function(){
            return [7,8,9,0]
        }
    })
    },
    components:{
        inf2,
        tabs
    },
    created() {
        
        this.$store.commit('deNav',false);
        //console.log('ff',this.$store.state.home);
    },
    mounted(){
        this.qing(75);
    }
}
</script>
<style lang="scss">
@import '../../sass/mixin.scss';
@import './item.scss';
.itemx{
    color:red;
    font-size:sss($n : 12);
}
.item_top{
    position: fixed;
    width:sss($n : 320);
    height: sss($n : 40);
    background:white;
    top:0;
    z-index: 7;
    :nth-child(2){
        float:left;
        background:url(../../assets/img/item_top1.png) no-repeat center center;
        background-size: 50%;
        width:sss($n : 40);
        height: sss($n : 40);
    }
    :nth-child(1){
        float:right;
        background:url(../../assets/img/item_top2.png) no-repeat center center;
        background-size: 50%;
        width:sss($n : 40);
        height: sss($n : 40);
    }
}
.item_bottm{
    position: fixed;
    width:sss($n : 320);
    height: sss($n : 49);
    bottom:0;
    background:white;
    display:flex;
    justify-content:space-between;
    :nth-child(1),:nth-child(2),:nth-child(3){
        position:relative;
        top:sss($n :4);
        width:sss($n : 42);
        height: sss($n : 49);
        font-size: sss($n : 10);
        text-align: center;
        z-index: 999;
        a{
            display:block;
            color: #222;
        }
        img{
            width:sss($n :21);
            height: sss($n : 19);
        }
    }
    :nth-child(4),:nth-child(5){
        position:relative;
        margin-top:sss($n : -5);
        width:sss($n : 80);
        height: sss($n : 49);
        line-height:sss($n : 49);
        background: #FFE4DD;
        color: #FE4310;
        font-size:sss($n :14);
        text-align: center;
        top:sss($n :4);
    }
    :nth-child(5){
        background: #FE4310;
        color:#FFE4DD;
    }
    :nth-child(4){
        left:sss($n :5);

    }
}


.item_cont{
    width:sss($n : 320);
    box-sizing:border-box;
    margin-top:sss($n : 40);
    padding-left:sss($n : 14) ;
    padding-right:sss($n : 14) ;
    .itemx_img{
        height: sss($n : 280);
        width:100%; 
        display:block;
    }
    .mint-swipe{
        height: sss($n : 280);
    }
    .item_tit{
        margin-bottom: sss($n :20);
        a{
        display: inline-block;
        color: #0d0d0d;
        text-decoration: none;
        -webkit-tap-highlight-color: transparent;
        line-height: sss($n : 26);
        font-size: sss($n : 20);
        width:sss($n : 230);
        float: left;
        }
        span{
            display: inline-block;
            float: right;
            width:sss($n : 30);
            margin-top:sss($n : 8) ;
            background-color: #00AAA0;
            color: #fff;
            text-align: center;
            line-height: sss($n : 16);
            font-size: sss($n : 10);
            border-radius: sss($n : 8);
            -webkit-border-radius: sss($n : 8);
            -moz-border-radius: sss($n : 8);
            -o-border-radius: sss($n : 8);
            font-family: 'san-serif';
        }
    }
    .item_tit::after {
        content: '';
        clear: both;
        height:0;
        display:block;
    }

    .item_more{
        display:flex;
        height:sss($n : 44);
        align-items:center;
        border-top: 1px solid #efefef;

        :nth-child(1){
            width:sss($n : 28);
            background:white;
            color: #999;
            font-size: sss($n :14);
            text-align: center;
            
        }
        :nth-child(2){
            flex:1;
            padding-left: sss($n :24);
            font-size: sss($n :14);
            color: #101010;
        }
        :nth-child(3){
            width:sss($n : 40);
            font-size: sss($n :14);
            text-align: center;
        }
    }
}
</style>
