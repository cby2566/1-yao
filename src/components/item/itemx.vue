<template>
    <div class="itemx">
        <div class="item_top">
            <div></div>
            <div></div>
        </div>

        <div class="item_cont">
            <div class="itemx_img"></div>
            <div class="item_tit">
                <a>康美尚 四季感冒片（薄膜衣片） 0.5g*48片</a>
                <span class="_otc">OTC</span>
            </div>
            <div class="item_more">
                <div>功效</div>
                <div>清热解表。用于四季风...</div>
                <div><img src="../../assets/img/item_dian.png" />
                </div>
            </div>
            <div class="item_more">
                <div>规格</div>
                <div>0.5g * 48片</div>
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
        <h1 class="item_qing" @click="qing">123</h1>
        

    </div>
</template>
<script>

import aja from './ajax.js';
//import './item.scss';
import inf2 from '../home/infinite2.vue';
import tabs from './item_tabs.vue';

import { TabContainer, TabContainerItem } from 'mint-ui';
import Vue from 'vue';
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

export default {
    data(){
        return {itemto:123,active:'777'}
    },
    methods:{
        qing(){
            aja['p'].then(function(res){
                console.log(res);
            });
        },
        tabs1(ok){
            console.log(ok);  
        }
    },
    components:{
        inf2,
        tabs
    },
    created() {
        console.log(111)
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
.item_cont{
    width:sss($n : 320);
    box-sizing:border-box;
    margin-top:sss($n : 40);
    padding-left:sss($n : 14) ;
    padding-right:sss($n : 14) ;
    .itemx_img{
        height: sss($n : 280);
        background:red;
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
