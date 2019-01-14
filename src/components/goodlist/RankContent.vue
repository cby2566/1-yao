<template>
    
        <div class="content">
            <div class="insideContent">
                <ul>
                    <li v-for="goods in goodlist[0]" :key="goods.pid">
                        <img class="goodsimg" :src="['http://img.zdfei.com'+goods.image]" alt="">
                        <div class="goodsText">
                            <p class="goodstit">
                                <img :src="['../../assets/img/type'+goods.type+'.png']" alt="">
                                <!-- <img :src="type(goods.type)" alt="" :ref="goods.type" > -->
                                {{goods.name}}
                            </p>
                            <p class="goodsdetail">{{goods.indication}}</p>
                            <p class="goodsspec">{{goods.spec}}</p>
                            <p class="goodsprice">
                                <span class="goodsrmb">￥</span>
                                {{goods.price}}</p>
                            <span class="goodscart"></span>
                            <div class="goodstag">
                                <div class="oneday">一日后到家</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    
</template>
<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
export default {
    // data(){
    //     return{
    //         type: false
    //     }
    // },
    computed:{
        ...mapState({
            // 映射this.goodslist为this.$store.state.cart.cartlist
            goodlist:(state)=>{
                return state.goodlist.lists
            }
        })
    },
    mounted(){
        console.log(this.$store.state.goodlist)
        console.log('this.goodlist:',this.goodlist)
    }
}
</script>
<style lang="scss" scoped>
@import '../../sass/mixin.scss';
.content{
    top: sss($n : 80);
    margin-bottom:  sss($n : 35);
    background: #efefef;
    .insideContent{
        padding: sss($n : 10);
        padding-bottom: 0;
        // margin-top: sss($n : 27);
        ul{
            li{
                margin-bottom: 0;
                height: sss($n : 155);
                border-bottom: sss($n : 1) solid #efefef;
                background-color: #fff;
                border-radius: sss($n : 3);
                position: relative;
                .goodsimg{
                    width: sss($n : 115);
                    height: sss($n : 115);
                    float: left;
                }
                .goodsText{
                    padding: sss($n : 15) 0px sss($n : 17) sss($n : 125);
                    // float: right;
                    .goodstit{
                        height: sss($n : 17);
                        line-height: sss($n : 17);
                        overflow: hidden;
                        white-space: nowrap;
                        word-break: keep-all;
                        text-overflow: ellipsis;
                        font-size: sss($n : 14);
                        color: #222;
                        margin: 0;
                        img{
                            width: sss($n : 26);
                            height: sss($n : 16);
                            background-size: sss($n : 24) sss($n : 14);
                            float: left;
                            margin: sss($n : 1.5) sss($n : 8) 0 0;
                        }
                    }
                    .goodsdetail{
                        height: sss($n : 34);
                        line-height: sss($n : 17);
                        margin-top: sss($n : 5);
                        color: #999;
                        overflow: hidden;
                        font-size: sss($n : 14);
                        margin-bottom: 0;
                    }
                    .goodsspec{
                        font-size: sss($n : 12);
                        margin-top: sss($n : 5);
                        color: #999;
                        height: sss($n : 18);
                        line-height: sss($n : 18);
                        margin-bottom: 0;
                    }
                    .goodsprice{
                        margin-top: sss($n : 8);
                        font-size: sss($n : 16);;
                        font-weight: bold;
                        line-height: sss($n : 20);;
                        height: sss($n : 20);
                        color: #fe4310;
                        margin-bottom: 0;
                        .goodsrmb{
                            font-size: sss($n : 10);
                            margin-right: sss($n : 2);
                        }
                    }
                    .goodscart{
                        width: sss($n : 21);
                        height: sss($n : 21);
                        background: url('../../assets/img/listcart.png') no-repeat center center;
                        background-size: sss($n : 21);
                        position: absolute;
                        right: sss($n : 10);
                        bottom: sss($n : 36);
                        z-index: 9;
                    }
                    .goodstag{
                        width: 100%;
                        height: sss($n : 17);
                        margin-top: sss($n : 5);
                        .oneday{
                            font-size: sss($n : 10);
                            width: sss($n : 70);
                            height: sss($n : 15);
                            line-height: sss($n : 15);
                            color: #FF4100;
                            text-align: center;
                            float: left;
                            border: #FF4100 sss($n : 1) solid;
                            border-radius: sss($n : 3);
                        }
                    }
                }
            }
        }
    }
}
</style>
