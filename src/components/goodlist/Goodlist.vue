<template>
    <div>
        <Head/>
        <List/>
    </div>
</template>
<script>
import Head from './Head.vue';
import List from './List.vue';
export default {
    data(){
        return{
            goodlist:[]
        }
    },
    components:{
        Head,
        List
    },
    created(){
        this.$store.state.home.showNav = false;
        console.log(this.$route.query)
        let cId=this.$route.query.cid;
        this.$store.dispatch('getgoodlist',{cId,pageNo:1})
        // this.$axios.get('/111api/sltRouter',{
        //     params:{
        //         cId,
        //         method:'getCategoryGoodsByOtoFirst',
        //         platformType:'wap',
        //         ptype:2,
        //         pageNo:1,
        //         pageSize:6
        //     }
        // }).then((res)=>{
        //     let data = res.data
        //     // console.log(data)
        //     this.$store.state.goodlist.lists=data.list;
        //     console.log(this.goodlist)
        // }).catch((error)=>{
        //     console.log('请求error：'+error)
        // })
    },
    mounted(){
        // console.log(this.$route.query)
    }
}
</script>