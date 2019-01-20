<template>
    <div class="jia_jian">
    <div @click.stop="jianx"></div>
    <div><input :value='num'/></div>
    <div @click.stop="jiax"></div>
    </div>
</template>
<script>

export default {
    data(){
        return {num:1}
    },
    props:['snum'],
    watch:{
    num(newNum,old){
        //console.log(newNum,old)       
    }
    },
    methods:{
        jiax(){
            this.num+=1;
            this.$emit('jiax',this.num);
        },
        jianx(){
            if(this.num != 1){
               this.num-=1; 
            }
            this.$emit('jianx',this.num);
        }
    },
    created(){
        if(this.snum){
            this.num=this.snum;
        }
    }
}
</script>

<style lang="scss">
@import '../../sass/mixin.scss';
.jia_jian{
    position:absolute;
    display:flex;
    justify-content:space-between;
    bottom:sss($n : 37);
    right:sss($n : 50);
    height: sss($n : 21);
    width:sss($n : 77);
    
    div:nth-child(1){
       height: sss($n : 21);
        width:sss($n : 21); 
        background:url(../../assets/img/jian.png) no-repeat center center;
        background-size: 100%;
        border-radius: 50%;
    }
    div:nth-child(2){
        input{
            width:sss($n :40);
            border:0;
            text-align: center;
            line-height: sss($n : 21);
        }

    }
    div:nth-child(3){
        height: sss($n : 21);
        width:sss($n : 21); 
        background:url(../../assets/img/jia.png) no-repeat center center;
        background-size: 100%;
        border-radius: 50%;
    }
}
</style>