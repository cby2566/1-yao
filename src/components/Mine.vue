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
</style>
