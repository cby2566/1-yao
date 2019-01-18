<template>
    <div class="home1">
        <inf />
    </div>
</template>
<script>
// import Vue from 'vue';

// export let Home = Vue.component('Home',{

// });
import inf from './home/infinite.vue';
export default {
    data(){
        return {name:123}
    },
    components:{
        inf
    },
    created(){
        this.$store.state.home.showNav = true;
    }
}
</script>
<style>

</style>