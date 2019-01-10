<template>
    <div class="bigbox">
        <div class="search">

            <mt-search placeholder="药品、品牌或症状" ></mt-search>
        
            <div class="box" ref="navwrap">
                <mt-navbar v-model="selected">
                    <mt-tab-item 
                    :id="tab.pid" 
                    v-for="(tab,index) in catelist" 
                    :key="tab.name" 
                    ref="li1"  
                    @click.native="select(index,$event)"
                    >{{tab.name}}
                    </mt-tab-item>
                </mt-navbar>
            </div>
        </div>
        <div class="wrapper" ref="wrapper">
            <div class="list">

            <ul class="content">
                <li ref="li2" v-for="tab in catelist" :key="tab.name" :id="tab.pid">
                    <div :id="['goods'+list.pid]" v-for="list in tab.plist" :key="list.pid">
                        <!-- {{list.pid}} -->
                        <div class="goodsbanner">
                            <img :src="['http://img.zdfei.com'+list.imgs]" alt="">
                        </div>
                        <ul class="goodslist">
                            <li v-for="good in list.plist" :key="good.pid">
                                <a :href="good.pid">{{good.name}}</a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
            </div>
        </div>
        <div class="div2"></div>
        <!-- <router-view/> -->
    </div>
</template>
<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
import catelist from '../assets/json/category.json';

import BScroll from "better-scroll";

document.documentElement.style.fontSize=document.documentElement.clientWidth/10+"px"
// console.log( document.documentElement.fontSize)

export default {
    data(){
        return {
            catelist,
            selected:'857',
            listHeight: [],
            scrollY: 0,
            menuIndexChange: true
        }
    },
    computed:mapState([
    'category' //把this.cart映射为this.$store.state.cart
    ]),
    methods:{
    //     goto(name){
    //     this.$router.push({path:'/category/'+name})
    //   }
        _initScroll(){
            this.navwrapScroll = new BScroll(this.$refs.navwrap, {
                click: true,
                scrollX: true
            });
            this.wrapperScroll = new BScroll(this.$refs.wrapper, {
                click: true, //better-scroll 默认会阻止浏览器的原生 click 事件。当设置为 true，better-scroll 会派发一个 click 事件，我们会给派发的 event 参数加一个私有属性 _constructed，值为 true。
                probeType: 3 //这个属性设置之后可以监听得到了
            });
            //监听滚动事件
            this.wrapperScroll.on("scroll", pos => {
                // 当允许滚动并滚动的y轴小于0
                if (this.menuIndexChange && pos.y <= 0) { 
                this.scrollY = Math.abs(Math.round(pos.y));  //滚动距离
                console.log(this.scrollY);
        
                // 循环每一个模块距离顶部的高度
                for (let i = 0; i < this.listHeight.length; i++) {
                    let height1 = this.listHeight[i];
                    let height2 = this.listHeight[i + 1];
                    if (
                    !height2 ||
                    (this.scrollY >= height1 && this.scrollY < height2)
                    ) {
                    console.log(i);
                    let wrap3 = this.$refs.li2;
                    console.log(wrap3[i].id)
                    this.selected = wrap3[i].id;
                    this._followScroll(i); //左侧动画移动
                    this.currentIndex = i;
                    return;
                    }
                }
                }
            });
        },
        //获取右侧每个模块的高度
        height() {
        let wrap2 = this.$refs.li2;
        console.log(this.$refs.li2);
        let height = 0;
        this.listHeight.push(height);
        for (let i = 0; i < wrap2.length; i++) {
            let item = wrap2[i];
            height += item.clientHeight;
            this.listHeight.push(height);
        }
        // console.log(this.listHeight);
        },
         //  点击左侧滚动
        select(index, event) {
            // PC页面时,点击不会被 better-scroll阻止事件,初始化,给 better-scroll派发事件,使移动端拥有点击事件,因此切换到PC端时,点击事件会被执行两次,
            if (!event._constructed) {
                return;
            }
            // this.selected = wrap3[index].id;  //改变点击的当前样式
            this.menuIndexChange = false;  //禁用右侧滚动  防止左右两侧都改变index  解决运动时listenScroll依然监听的bug
        
            //左侧网上偏移100
            this._followScroll(index); //左侧动画移动
        
            //右侧滚到响应位置
            let wrap2 = this.$refs.li2;
            let el = wrap2[index];
            this.wrapperScroll.scrollToElement(el, 300);
        
            //右侧滚动结束后在允许动画
            this.wrapperScroll.on("scrollEnd", () => {
                this.menuIndexChange = true;
            });
        },
        //左侧网上偏移
        _followScroll(index) {
            let wrap1 = this.$refs.li1;
            let el = wrap1[index].$el;
            console.log(wrap1[index].$el)
            this.navwrapScroll.scrollToElement(el, 300, -100, 0); //往上偏移100
        },
    },
    created() {
        this.$nextTick(() => {
        // 3 在这个函数中调用以防内容还未加载完就执行，获取不到元素的高度导致无法滑动
            this._initScroll();
            this.height();
        });
    }
    
}
</script>
<style lang="scss">

@import '../sass/mixin.scss';
.bigbox{
    display: flex;
    height: 100%;
     flex-direction:column;
}
.content{
    width:sss($n : 320);
    list-style:none;
    padding:0;
    margin:0;
    .goodsbanner{
        padding: sss($n : 18) 0 sss($n : 15) 0;
        width: sss($n : 284);
        img{
            width: 100%;
        }
    }
    &>li{
        width:sss($n : 284);
        font-size: sss($n : 16);
    }
    .goodslist{
        overflow:hidden;
        li{
            width: 33.3%;
            float: left;
            overflow: hidden;
            white-space: nowrap;
            word-break: keep-all;
            text-overflow: ellipsis;
            a{
                display: block;
                font-size: sss($n : 14);
                color: #222;
                text-align: center;
                line-height: sss($n : 20);
                padding: sss($n : 15) 0;
            }
        }
    }
}
.wrapper{
   width:sss($n : 320);
   height: sss($n : 418);
   overflow:hidden;
   .list{
       padding: 0 sss($n : 18) sss($n : 1000) sss($n : 18);
   }
}
.search{
    width:sss($n : 320);
    height: sss($n : 44);
    clear:both;
    // position: fixed;
    z-index: 999;
    margin-bottom: sss($n : 50);
}
.box{
    margin-top:- sss($n : 1);
    overflow: auto;
    height: sss($n : 52);
    &::-webkit-scrollbar {
        display: none;
    }
}
.mint-search{
    height: 100%!important;
    .mint-searchbar{
        background: #fff;
        padding: 8px 44px;
        // height: 44px;
        .mint-searchbar-inner{
            background:#efefef;
            border-radius: 20px;
            height: 22px;
            input{
                background:#efefef;
            }
        }
    }
}
.mint-navbar{
    width: sss($n : 370);
    .mint-tab-item{
        // padding: 0 2px;
        margin: 0 2px;
        width: 72px;
        .mint-tab-item-label{
            font-size: 14px;
        }
        &.is-selected{
        color: #808080;
        border-bottom: 2px solid #808080;
        font-weight: bold;
        }
    }
    
}
</style>
