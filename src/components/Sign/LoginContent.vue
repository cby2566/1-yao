<template>
    <div class="phoneContent">
            <article class="login_head">
                <img src="../../assets/img/loginLogo.png" alt="">
            </article>
            <!-- <article class="login_id">
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
            </article> -->
            <slot name="phone" ></slot><slot name="user"></slot>
            <article class="login_btn" @click="gologin">
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
        </div>
</template>
<script>
export default {
    data(){
        return{
            liChildren:[]
        }
    },
    methods:{
        gologin(){
            // console.log(this.$slots.phone[0].children[0].children[0].children[2].elm)
            this.liChildren=[]
            if(this.$slots.phone){
                for(let i=0 ;i<this.$slots.phone[0].children[0].children.length;i++){
                    if(this.$slots.phone[0].children[0].children[i].elm.nodeType!=3){
                        this.liChildren.push(this.$slots.phone[0].children[0].children[i])
                    }
                }
                let phone = this.liChildren[0].children[2].elm.value;
                let code = this.liChildren[1].children[2].elm.value;
                let msgcode = this.liChildren[2].children[2].elm.value;
                window.sessionStorage.setItem('token', phone);
                console.log(msgcode)
            }else{
                for(let i=0 ;i<this.$slots.user[0].children[0].children.length;i++){
                    if(this.$slots.user[0].children[0].children[i].elm.nodeType!=3){
                        this.liChildren.push(this.$slots.user[0].children[0].children[i])
                    }
                }
                let user = this.liChildren[0].children[2].elm.value;
                let psw = this.liChildren[1].children[2].elm.value;
                window.sessionStorage.setItem('token', user);
            }
            this.$router.push({path:'/home'})
            // console.log(this.$slots.phone[0].children[0].children)
            // console.log(this.$slots.phone[0])
            // console.log(this.liChildren)
            
        }
    }
}
</script>
<style lang="scss" >
@import '@/sass/mixin.scss';
.phoneContent{
    .login_head{
        text-align: center;
        padding-top: sss($n : 44);
        img{
            width: sss($n : 156); 
            margin-top:  sss($n : 28); 
            margin-bottom:  sss($n : 20);
        }
        
    }
    .login_id{
        font-size: sss($n : 16);
        border-top: sss($n : 1) solid #d9d9d9;
        border-bottom: sss($n : 1) solid #d9d9d9;
        background-color: #fff;
        ul{
            margin-left: sss($n : 14);
            li{
                height: sss($n : 48);
                line-height: sss($n : 48);
                width: 100%;
                display: -webkit-box;
                border-bottom: sss($n : 1) solid #d9d9d9;
                span{
                    display: block;
                    margin-right: sss($n : 19);
                    text-align: left;
                }
                input{
                    height: sss($n : 18);
                    line-height: sss($n : 18);
                    display: block;
                    -webkit-box-flex: 1;
                    width: 100%;
                    margin: sss($n : 15) sss($n : 12) sss($n : 15) 0;
                    font-size: sss($n : 16);
                    resize: none;
                    outline: 0;  
                    background: none;
                    border:none
                           
                }
                .getcode{
                    width: sss($n : 125);
                    display: block;
                    border-left: sss($n : 1) solid #d9d9d9;
                    color: #999;
                    text-align: center;
                    input{    
                        color: #ff4a4a;
                    }
                }
                &:last-child{
                    border-bottom: 0;
                }
            }
        }
    }
    .login_btn{
        padding: sss($n : 10) sss($n : 12) sss($n : 4) sss($n : 12);
        a{
            display: block;
            width: 100%;
            height: sss($n : 40);
            line-height: sss($n : 40);
            text-align: center;
            color: #fff;
            background-color: #00b4b8;
            border: none;
            outline: none;
            font-size: sss($n : 18);
            border-radius: sss($n : 6);
            -webkit-border-radius: sss($n : 6);
        }
    }
    .login_msg{
        font-size: sss($n : 12);
        padding: sss($n : 15) sss($n : 12);
        color: #222;
        a{
            color:#4A90E2;
        }
    }
    .otherway{
        height: sss($n : 20);
        line-height: sss($n : 20);  
        width: 100%;
        text-align: center;
        a{
            display: block;
            text-decoration: none;
            height: sss($n : 20);
            line-height: sss($n : 20);  
            color: #a8a8a8;
            font-size: sss($n : 13);
            text-align: center;
        }
    }
    .otherway_img{
        text-align: center;
        font-size: sss($n : 14);
        img{
            border-radius: 50%;
            width: sss($n : 30);
            vertical-align: middle;
            margin-right: sss($n : 10);
        }
    }
}
</style>
