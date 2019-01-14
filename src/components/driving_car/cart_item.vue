<template>
    <div class="citem">
        <div><img src="../../assets/img/citem1.png"/></div>
        <div><img src="../../assets/img/hot2.jpg" /></div>
        <div>
            <p>仲景 浓缩当归丸 200丸</p>
            <p>200丸</p>
            <p>$15.80</p>
        </div>
        <jia_jian />
    </div>
</template>
<script>
import jia_jian from './jia_jian.vue';
export default {

components:{
        jia_jian
    },
    created(){
        this.$store.state.home.showNav = true;
    }
}
</script>

<style lang="scss">
@import './citem.scss';
</style>