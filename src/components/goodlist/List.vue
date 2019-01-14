<template>
    <div>
        <Searchnav/>
        <RankContent/>
    </div>
</template>
<script>
import Searchnav from './Searchnav.vue';
import RankContent from './RankContent.vue';
export default {
    components:{
        Searchnav,
        RankContent
    }
}
</script>
<style scoped>
div{
    position: relative;
}
</style>
