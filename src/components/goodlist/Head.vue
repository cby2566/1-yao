<template>
    <div>
        <header>
            <span class="back" @click="back()"></span>
            <div class="topsearch">
                <span class="serachicon"></span>
                <input type="search" placeholder="可以搜药品、品牌或症状">
            </div>
                <span class="serachbtn">搜索</span>
        </header>
    </div>
</template>
<script>
// import '../../assets/iconfont/iconfont.css';
export default {
    methods:{
        back(){
            this.$router.go(-1);
        }
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
    .topsearch{
        height: sss($n : 30);
        position: absolute;
        left: sss($n : 44);
        right: sss($n : 44);
        top: sss($n : 6);
        background: #efefef;
        border-radius: sss($n : 20);
        -webkit-border-radius: sss($n : 20);
        padding: 0 sss($n : 14) 0 sss($n : 34);
        border: #dadada sss($n : 1) solid;
        input{
            font-size: sss($n : 14);
            height: sss($n : 18);
            line-height: sss($n : 18);
            font-size: sss($n : 15);
            width: 100%;
            float: left;
            margin: sss($n : 6) 0;
            color: #222;
            overflow: hidden;
            word-break: keep-all;
            white-space: nowrap;
            text-overflow: ellipsis;
            background: #efefef;
            background:none;  
            outline:none;  
            border:0;
            &:focus { outline: none; }
        }
        .serachicon{
            width: sss($n : 34);
            height: sss($n : 30);
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            background: url('../../assets/img/search.png') no-repeat 14px center;
            background-size: sss($n : 14);
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
        }
}
</style>
