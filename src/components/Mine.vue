<template>
    <div>
        <header class="member_header">
            <div class="member_box">
                <span class="member_header_img"></span>
                <span class="member_header_name">齐德龙</span>
                <span class="member_header_icon">
                    <img src="../assets/img/menbericon.png" alt="">
                </span>
            </div>
        </header>
        <div class="member_bg">
            <ul>
                <li class="member_bg1">
                    <img src="../assets/img/membercard1.png">
                    会员卡
                </li>
                <li class="member_bg2"><div class="li_img_box"></div></li>
                <li class="member_bg3">
                    <div class="li_img_box">
                        <img src="../assets/img/membercard2.png" >
                    </div>
                    <span class="li_name_box">卡券</span>
                </li>
                <li class="member_bg4">
                    <div class="li_img_box">
                        <img src="../assets/img/membercard3.png" alt="">
                    </div>
                    <span class="li_name_box">积分</span>
                </li>
                <li class="member_bg5">
                    <div class="li_img_box">
                        <img src="../assets/img/membercard4.png" alt="">
                    </div>
                    <span class="li_name_box">关注</span>
                </li>
            </ul>
        </div>
        <article class="member_art">
            <div class="member_oder">
                <span class="member_oder_title">我的订单</span>
                <span class="member_oder_more">全部
                    <img src="../assets/img/memberodermore.png" alt="">
                </span>
                <ul class="member_oder_ul">
                    <li v-for="item in orderForm" :key="item.text">
                        <a href="javascript:;">
                            <div class="order-img-box"><img :src="'http://img.zdfei.com/static/image/htmls/single/2018-12-10/'+item.img" alt=""></div>
                            {{item.text}}
                        </a>
                    </li>

                </ul>
            </div>
            <div class="member_line_box"></div>
            <div class="member_swiper">
                <span class="member_swiper_tit">健康档案</span>
                <span class="member_oder_more">全部
                    <img src="../assets/img/memberodermore.png" alt="">
                </span>
                <div class="swiper_box">
                    <div class="swiper_wrapper">
                        <div class="swiper_slide">
                            <a href="javascript:;">
                                <span class="slide_img"><img src="../assets/img/memberswiper1.png" alt=""></span>
                                <span class="slide_span">步数</span>
                                <span class="slide_span">-/-/-</span>
                                <span class="slide_span">-/-</span>
                            </a>
                        </div>
                        <div class="swiper_slide">
                            <a href="javascript:;">
                                <span class="slide_img"><img src="../assets/img/memberswiper2.png" alt=""></span>
                                <span class="slide_span">血压</span>
                                <span class="slide_span">-/-/-</span>
                                <span class="slide_span">-/-</span>
                            </a>
                        </div>
                        <div class="swiper_slide">
                            <a href="javascript:;">
                                <span class="slide_img"><img src="../assets/img/memberswiper3.png" alt=""></span>
                                <span class="slide_span">血糖</span>
                                <span class="slide_span">-/-/-</span>
                                <span class="slide_span">-/-</span>
                            </a>
                        </div>
                        <div class="swiper_slide">
                            <a href="javascript:;">
                                <span class="slide_img"><img src="../assets/img/memberswiper4.png" alt=""></span>
                                <span class="slide_span">体重</span>
                                <span class="slide_span">-/-/-</span>
                                <span class="slide_span">-/-</span>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            <div class="member_line_box" style="margin-top: 25px"></div>
            <div class="member_list">
                <ul>
                    <li>
                        <a href="javascript:;">
                            收货地址
                            <span>
                                <img src="../assets/img/memberodermore.png" alt="">
                            </span>
                        </a>
                    </li>
                    <li class="list_line"></li>
                    <li>
                        <a href="javascript:;">
                            积分商城
                            <span>
                                <img src="../assets/img/memberodermore.png" alt="">
                            </span>
                        </a>
                    </li>
                    <li class="list_line"></li>
                    <li>
                        <a href="javascript:;">
                            在线客服
                            <span>
                                <img src="../assets/img/memberodermore.png" alt="">
                            </span>
                        </a>
                    </li>
                    <li class="list_line"></li>
                    <li>
                        <a href="javascript:;">
                            健康管家
                            <span>
                                4006063111
                                <img src="../assets/img/memberodermore.png" alt="">
                            </span>
                        </a>
                    </li>
                    <li class="list_line"></li>
                </ul>
            </div>
            <div class="login_out">
                <a href="javascript:;" @click="loginout">退出登录</a>
            </div>
        </article>
        <a href="javascript:;" class="back_to_top"></a>
    </div>
</template>
<script>
export default {
    data(){
        return {
            orderForm:[
                {
                    text:'待付款',
                    img:'5c0de0b628ef4xx2.png'
                },{
                    text:'待发货',
                    img:'5c0de2c54cb1axx2.png'
                },{
                    text:'待收货',
                    img:'5c0de2e089b18xx2.png'
                },{
                    text:'待评论',
                    img:'5c0de30b0f4d8xx2.png'
                },{
                    text:'售后/退款',
                    img:'5c0de336489bfxx2.png'
                },{
                    text:'找药需求',
                    img:'5c0de35630cedxx2.png'
                },{
                    text:'门店订单',
                    img:'5c0de35630cedxx2.png'
                },{
                    text:'兑换记录',
                    img:'5c0de0b628ef4xx2.png'
                }
            ]

        }
    },
    methods:{
        // imgsrc(url){
        //     return require('http://img.zdfei.com/static/image/htmls/single/2018-12-10/5c0de0b628ef4xx2'+url)
        // }
        loginout(){
            window.sessionStorage.clear();
            this.$router.push({path:'/home'});
        }
    },
    created(){
        this.$store.state.home.showNav = true;
    }
}
</script>
<style lang="scss">
@import '../sass/mixin.scss';
.member_header{
    background: -webkit-linear-gradient(left,#5fe8ce 2%,#4da5ed);
    height: sss($n :220);
    .member_box{
        width: 92%;
        margin: 0 auto;
        position: relative;
        top: sss($n :60);
        .member_header_img{
            display: -webkit-inline-box;
            float: left;
            width: sss($n :60);
            height: sss($n :60);
            overflow: hidden;
            border-radius: 50%;
            background: url('../assets/img/menberimg.png') no-repeat;
            background-size: 115% auto;
            background-position: center center;
            background-color: #fff;
        }
        .member_header_name{
            height: sss($n :60);
            display: table;
            float: left;
            /* width: calc(100% - 80px); */
            font-family: SimHei,Helvetica,Arial,sans-serif;
            color: #fff;
            font-size: sss($n :18);
            line-height: sss($n :60);
            letter-spacing: sss($n :1);
            font-weight: bold;
            overflow: hidden;
            max-width: calc(100% - sss($n :100));
            display: block;
            margin-left: sss($n :10);
            -webkit-line-clamp: 1;
            /* color: #4d4e58; */
            word-break: keep-all;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        .member_header_icon{
            width: sss($n :15);
            height: sss($n :60);
            line-height: sss($n :60);
            float: left;
            margin-left: sss($n :5);
            /* display: none; */
            img{
                width: sss($n :15);
                vertical-align: middle;
                position: relative;
                top: - sss($n :2);
            }
        }
    }
}
.member_bg{
    background: #000;
    width: 92%;
    height: sss($n :66);
    margin: 0 auto;
    margin-top: - sss($n :66);
    background-image: linear-gradient(154deg, #5E5C6A 0%, #373545 94%);
    border-radius: sss($n :9) sss($n :9) 0px 0px;
    ul{
        margin: 0px;
        padding: 0px;
        width: 100%;
        height: 100%;
        li{
            float: left;
            width: 18%;
            height: 100%;
            text-align: center;
            vertical-align: middle;
            display: table-cell;
            vertical-align: middle;
            &.member_bg1{
                font-size: sss($n :12);
                color: #ECCA67;
                line-height: sss($n :66);
                text-align: center;
                width: 28%;
                img{
                    width: sss($n :14);
                }
            }
            .li_img_box{
                img{
                    width: sss($n :24);
                    margin: 0 auto;
                    vertical-align: middle;
                }

            }
            .li_name_box{
                line-height: sss($n :20);
                font-size: sss($n :12);
                color: #ECCA67;
                margin-top: sss($n :2);
                display: table;
                text-align: center;
                width: 100%;
            }
        }
    }
}
.member_art{
    width: 92%;
    margin: 0 auto;
    font-family: SimHei,Helvetica,Arial,sans-serif;
    padding-bottom: sss($n :120);
    .member_oder{
        background: #fff;
        width: 100%;
        .member_oder_title{
            font-size: sss($n :16);
            color: #4D4E58;
            margin-top: sss($n :25);
            margin-bottom: sss($n :25);
            float: left;
        }
        .member_oder_more{
            float: right;
            margin-top: sss($n :27);
            margin-bottom: sss($n :25);
            font-size: sss($n :12);
            img{
                height: sss($n :10);
                position: relative;
                top: sss($n :1);
            }
        }
        .member_oder_ul{
            width: 100%;
            margin: 0px;
            padding: 0px;
            display: table;
            li{
                width: 25%;
                float: left;
                text-align: center;
                font-size: sss($n :12);
                color: #4D4E58;
                margin-bottom: sss($n :20);
                a{
                    display: table;
                    width: 100%;
                    font-size: sss($n :12);
                    color: #4D4E58;
                    .order-img-box{
                        display: block;
                        width: 100%;
                        img{
                            width: sss($n :36);
                            margin-bottom: sss($n :5);
                        }
                    }
                }
            }
        }
    }
    .member_line_box{
        margin: 0 auto;
        margin-top: sss($n :5);
        border-top: sss($n :1) solid #DEE2F6;
    }
    .member_swiper{
        width: 100%;
        margin: 0 auto;
        font-family: SimHei,Helvetica,Arial,sans-serif;
        .member_swiper_tit{
            font-size: 16px;
            color: #4D4E58;
            margin-top: 25px;
            margin-bottom: 25px;
            float: left;
        }
        .member_oder_more{
            float: right;
            margin-top: sss($n :27);
            margin-bottom: sss($n :25);
            font-size: sss($n :12);
            img{
                height: sss($n :10);
                position: relative;
                top: sss($n :1);
            }
        }
        .swiper_box{
            width: 100%;
            height: 100%;
            overflow: hidden;
            transition: 0.3s all;
            .swiper_wrapper{
                overflow: auto;
                transform: translate3d(0px, 0px, 0px); 
            // padding: sss($n :10) 0;
                transition-duration: 0ms;
                display: flex;
                &::-webkit-scrollbar{
                    display: none;
                }
                .swiper_slide{
                    padding: sss($n :6);
                    padding-right: 0;
                    background-image: linear-gradient(90deg, #F0F6F6 1%, #E7F0EE 96%);
                    border-radius: sss($n :4);
                    height: 100%;
                    position: relative;
                    width: 25%;
                    flex-shrink: 0;
                    margin-right:5%; 
                    transform: translate3d(0px, 0px, 0px);
                    transition-duration: 0ms;
                    a{
                        color: #0d0d0d;
                        display: table;
                        width: 100%;
                        .slide_img{
                            img{
                                width: sss($n :27);
                                height: sss($n :27);
                            }
                            // padding: sss($n :10);
                            padding-bottom: 0px;
                        }
                        .slide_span{
                            font-size: sss($n :10);
                            color: #4D4E58;
                            line-height: sss($n :18);
                            display: table;
                            width: 100%;
                            margin-top: sss($n :5);
                        }
                    }
                }
            }
        }
    }
    .member_list{
        width: 100%;
        margin: 0 auto;
        ul{
            width: 100%;
            display: table;
            li{
                width: 100%;
                font-family: SimHei,Helvetica,Arial,sans-serif;
                display: table;
                line-height: sss($n :60);
                font-size: sss($n :16);
                color: #4D4E58;
                a{
                    display: table;
                    width: 100%;
                    text-decoration: none;
                    font-size: sss($n :16);
                    color: #4D4E58;
                    span{
                        float: right;
                        img{
                            height: sss($n :10);
                        }
                    }
                }
                
            }
            .list_line{
                border-top: 1px solid #DEE2F6;
                content: '';
            }
        }
    }
    .login_out{
        margin: sss($n :20) 0px 0px 0px;
        a{
            display: block;
            height: sss($n :44);
            line-height: sss($n :44);
            text-align: center;
            border-radius: sss($n :5);
            background: #0fa9a3;
            font-size: sss($n :15);
            color: #FFF;
            // background: linear-gradient(left,#5fe8ce 2%,#4da5ed);
            background: -webkit-linear-gradient(left,#5fe8ce 2%,#4da5ed);
        }
    }
}

</style>
