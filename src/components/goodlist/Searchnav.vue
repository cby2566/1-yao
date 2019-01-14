<template>
    <div>
        <ul class="navbar">
            <li v-for="item in nav" :key="item.type">
                <a :class="{isselected:selected==item.tid}" @click="changerank(item.tid)">
                    {{item.type}}
                </a>
            </li>
            <span class="listbtn" :class="{big:bigtype}" @click="changetype(!bigtype)"></span>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            nav:[{
                type:'默认',
                tid:'default'
            },{
                type:'价格',
                tid:'price'
            },{
                type:'仅药士达',
                tid:'yaoshi'
            }],
            selected:'default',
            bigtype:false
        }
    },
    methods:{
        changerank(type){
            this.selected=type;
        },
        changetype(type){
            this.bigtype=type;
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../sass/mixin.scss';
.navbar{
    width: 100%;
    height: sss($n : 35);
    border-bottom: sss($n : 1) solid #d7d7d7;
    background: #fff;
    position: fixed;
    z-index: 99;
    top: sss($n : 45);
    left: 0;
    li{
        float: left;
        width: 30%!important;
        a{
            width: 100%;
            height: sss($n : 35);
            line-height: sss($n : 35);
            display: block;
            text-align: center;
            color: #00b4b8;
            position: relative;
            font-size: sss($n : 12);
            &.isselected{
                color: #0d0d0d;
                border-bottom: #FE4310 sss($n : 1) solid;
            }
        }
        
    }
    .listbtn{
            display: block;
            width: sss($n : 40);
            height: sss($n : 35);
            background: url('../../assets/img/biglisttype.png') no-repeat center center;
            background-size: sss($n : 13);
            position: absolute;
            right: 0;
            top: 0;
            &.big{
                background: url('../../assets/img/smlisttype.png') no-repeat center center;
                background-size: sss($n : 13);
            }
        }
}
</style>
