<template>
    <div>
        <header>
            <span class="back" @click="back()"></span>
            <!-- <div class="topsearch">
                <span class="serachicon"></span>
                <input type="search" placeholder="可以搜药品、品牌或症状">
            </div> -->
            <h2 class="toptit">
                <ul class="login">
                    <li :class="item.name" v-for="item in data" :key="item.name"> <a :class="[item.name==cover? 'cover':'']" @click="changecover(item.name)">{{item.text}}</a></li>
                </ul>
            </h2>
            <a @click="gohome"><span class="serachbtn"></span></a>
        </header>
        <!-- <div class="phoneContent">
            <article class="login_head">
                <img src="../../assets/img/loginLogo.png" alt="">
            </article>
            <article class="login_id">
                <ul>
                    <li>
                        <span>
                            手机号
                        </span>
                        <input id="phonenum" type="tel" placeholder="请输入您的手机号">
                    </li>
                    <li>
                        <span>
                            验证码
                        </span>
                        <input id="telcode" type="tel" placeholder="图文验证码">
                        <a href="javascript:;" class="getcode">
                            <img src="../../assets/img/number.jpg" alt="">
                        </a>
                    </li>
                    <li>
                        <span>短信验证码</span>
                        <input type="tel" placeholder="短信验证码">
                        <a href="javascript:;" class="getcode">
                            <input type="button" value="获取验证码" class="btn">
                        </a>
                    </li>
                </ul>
            </article>
            <article class="login_btn">
                <a href="javascript:;">登录</a>
            </article>
            <div class="login_msg">
                温馨提示：未注册111医药馆的手机号，登录时将自动注册，且代表您已同意
                <a href="javascript:;">《111医药馆用户注册协议》</a>
            </div>
            <article class="otherway">
                <a href="javascript:;"><b>其他登录方式</b> </a>
            </article>
            <article class="otherway_img">
                <img src="../../assets/img/ortherway.png" alt="">
            </article>
        </div> -->
        <LoginContent v-show="cover=='phone'">
            <article class="login_id" slot="phone" >
                <ul>
                    <li>
                        <span>
                            手机号
                        </span>
                        <input id="phonenum" type="tel" placeholder="请输入您的手机号">
                    </li>
                    <li>
                        <span>
                            验证码
                        </span>
                        <input id="telcode" type="tel" placeholder="图文验证码">
                        <a href="javascript:;" class="getcode">
                            <img src="../../assets/img/number.jpg" alt="">
                        </a>
                    </li>
                    <li>
                        <span>短信验证码</span>
                        <input type="tel" placeholder="短信验证码">
                        <a href="javascript:;" class="getcode">
                            <input type="button" value="获取验证码" class="btn">
                        </a>
                    </li>
                </ul>
            </article>
        </LoginContent>
        <login-content v-show="cover=='user'">
            <article class="login_id" slot="user">
                <ul>
                    <li>
                        <span>
                            帐号
                        </span>
                        <input id="user" type="tel" placeholder="手机号/昵称/邮箱">
                    </li>
                    <li>
                        <span>
                            密码
                        </span>
                        <input id="psw" type="password" placeholder="登录密码">
                        
                    </li>
                </ul>
            </article>
        </login-content>
        <footer class="footer">
            <div class="footer-adv">
                <a href="javascript:;">立即下载</a>
                <!-- <img src="../../assets/img/wap-d.jpg" alt=""> -->
            </div>
        </footer>
    </div>
</template>
<script>
import LoginContent from './LoginContent.vue'
export default {
    data(){
        return{
            data:[{name:'phone',text:'手机快捷登录'},{name:'user',text:'用户名登录'}],
            cover:'phone'
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        changecover(name){
            this.cover=name;
        },
        gohome(){
            this.$router.push({path:'/home'})
        }
    },
    created(){
        this.$store.state.home.showNav = false;
    },
    components:{
        LoginContent
    }
}
</script>
<style lang="scss" scoped>
@import '@/sass/mixin.scss';
// @import url('../../assets/iconfont/iconfont.css');
header{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    width: 100%;
    height: sss($n : 44);
    background: #fff;
    z-index: 99;
    border-bottom: sss($n : 1) solid #efefef;
    .back{
        width: sss($n : 44);
        height: sss($n : 44);
        line-height: sss($n : 44);
        position: absolute;
        left: 0;
        top: 0;
        z-index: 9;
        color: #0d0d0d;
        text-align: center;
        background-image: url('../../assets/img/back.png');
        background-size: sss($n : 26);
        background-repeat: no-repeat;
        background-position: center;
    }
    // .topsearch{
    //     height: sss($n : 30);
    //     position: absolute;
    //     left: sss($n : 44);
    //     right: sss($n : 44);
    //     top: sss($n : 6);
    //     background: #efefef;
    //     border-radius: sss($n : 20);
    //     -webkit-border-radius: sss($n : 20);
    //     padding: 0 sss($n : 14) 0 sss($n : 34);
    //     border: #dadada sss($n : 1) solid;
    //     input{
    //         font-size: sss($n : 14);
    //         height: sss($n : 18);
    //         line-height: sss($n : 18);
    //         font-size: sss($n : 15);
    //         width: 100%;
    //         float: left;
    //         margin: sss($n : 6) 0;
    //         color: #222;
    //         overflow: hidden;
    //         word-break: keep-all;
    //         white-space: nowrap;
    //         text-overflow: ellipsis;
    //         background: #efefef;
    //         background:none;  
    //         outline:none;  
    //         border:0;
    //         &:focus { outline: none; }
    //     }
    //     .serachicon{
    //         width: sss($n : 34);
    //         height: sss($n : 30);
    //         display: block;
    //         position: absolute;
    //         left: 0;
    //         top: 0;
    //         background: url('../../assets/img/search.png') no-repeat 14px center;
    //         background-size: sss($n : 14);
    //     }
    // }
    .toptit{
        width: 100%;
        height:  sss($n : 44);
        line-height:  sss($n : 44);
        position: absolute;
        left: 0;
        top: 0;
        font-size:  sss($n : 19);
        text-align: center;
        color: #222;
        font-weight: bold;
        margin: 0;
        .login{
            height:  sss($n : 24);
            line-height:  sss($n : 24);
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: - sss($n : 92);
            margin-top: - sss($n : 12);
            li{
                width:  sss($n : 96);
                height:  sss($n : 24);
                float: left;
                a{
                    font-size:  sss($n : 15);
                    &.cover{
                        color: #00a7a1;
                        border-bottom: 2px solid #00a6a0;
                    }
                }
            }
        }
    }
    .serachbtn{
            width: sss($n : 44);
            height: sss($n : 44);
            line-height: sss($n : 44);
            display: block;
            position: absolute;
            right: 0;
            top: 0;
            overflow: hidden;
            text-align: center;
            font-size:  sss($n : 14);
            background: url('../../assets/img/home.png') no-repeat center center;
            background-size: sss($n : 44);
        }
}
// .phoneContent{
//     .login_head{
//         text-align: center;
//         padding-top: sss($n : 44);
//         img{
//             width: sss($n : 156); 
//             margin-top:  sss($n : 28); 
//             margin-bottom:  sss($n : 20);
//         }
        
//     }
//     .login_id{
//         font-size: sss($n : 16);
//         border-top: sss($n : 1) solid #d9d9d9;
//         border-bottom: sss($n : 1) solid #d9d9d9;
//         background-color: #fff;
//         ul{
//             margin-left: sss($n : 14);
//             li{
//                 height: sss($n : 48);
//                 line-height: sss($n : 48);
//                 width: 100%;
//                 display: -webkit-box;
//                 border-bottom: sss($n : 1) solid #d9d9d9;
//                 span{
//                     display: block;
//                     margin-right: sss($n : 19);
//                     text-align: left;
//                 }
//                 input{
//                     height: sss($n : 18);
//                     line-height: sss($n : 18);
//                     display: block;
//                     -webkit-box-flex: 1;
//                     width: 100%;
//                     margin: sss($n : 15) sss($n : 12) sss($n : 15) 0;
//                     font-size: sss($n : 16);
//                     resize: none;
//                     outline: 0;  
//                     background: none;
//                     border:none
                           
//                 }
//                 .getcode{
//                     width: sss($n : 125);
//                     display: block;
//                     border-left: sss($n : 1) solid #d9d9d9;
//                     color: #999;
//                     text-align: center;
//                     input{    
//                         color: #ff4a4a;
//                     }
//                 }
//                 &:last-child{
//                     border-bottom: 0;
//                 }
//             }
//         }
//     }
//     .login_btn{
//         padding: sss($n : 10) sss($n : 12) sss($n : 4) sss($n : 12);
//         a{
//             display: block;
//             width: 100%;
//             height: sss($n : 40);
//             line-height: sss($n : 40);
//             text-align: center;
//             color: #fff;
//             background-color: #00b4b8;
//             border: none;
//             outline: none;
//             font-size: sss($n : 18);
//             border-radius: sss($n : 6);
//             -webkit-border-radius: sss($n : 6);
//         }
//     }
//     .login_msg{
//         font-size: sss($n : 12);
//         padding: sss($n : 15) sss($n : 12);
//         color: #222;
//         a{
//             color:#4A90E2;
//         }
//     }
//     .otherway{
//         height: sss($n : 20);
//         line-height: sss($n : 20);  
//         width: 100%;
//         text-align: center;
//         a{
//             display: block;
//             text-decoration: none;
//             height: sss($n : 20);
//             line-height: sss($n : 20);  
//             color: #a8a8a8;
//             font-size: sss($n : 13);
//             text-align: center;
//         }
//     }
//     .otherway_img{
//         text-align: center;
//         font-size: sss($n : 14);
//         img{
//             border-radius: 50%;
//             width: sss($n : 30);
//             vertical-align: middle;
//             margin-right: sss($n : 10);
//         }
//     }
// }
.footer{
    text-align: center;
    color: #3e3e3e;
    padding: sss($n : 10) 0;
    margin-top: sss($n : 10);
    div{
        width: 100%;
        margin-bottom: sss($n : 10);
        background: #477ce8 url(../../assets/img/wap-d.jpg) no-repeat top center;
        height: sss($n : 55);
        background-size: sss($n : 320);
        a{
            height: sss($n : 27);
            line-height: sss($n : 27);
            color: #fff;
            padding: 0 sss($n : 15);
            background: #ec6c1f;
            display: inline-block;
            text-align: center;
            border-radius: sss($n : 4);
            -webkit-border-radius: sss($n : 4);
            float: right;
            margin: sss($n : 14) sss($n : 10);
            font-size: sss($n : 14);
        }
    }
}
</style>