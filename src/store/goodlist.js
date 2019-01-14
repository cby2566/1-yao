import axios from 'axios'

export default {
  state:{
    lists:[]
  },
  getters:{

  },

  // 通过mutations修改state中的数据
  mutations:{
    changelists(state,playload){
      state.lists.push(playload)
      // console.log(state.lists)
    }
  },

  // 负责操作mutations
  actions:{
    // getcateList(context){
    //   axios.get("/channel/guest",{withCredentials:true}).then(data=>{
    //     var res=data.data.myList;
    //     context("GETCHANNELS",res)
    //   })
    // }
    getgoodlist(context,playload){
      axios.get('http://router.111yao.com/sltRouter',{
        params:{
            cId:playload.cId,
            method:'getCategoryGoodsByOtoFirst',
            platformType:'wap',
            ptype:1,
            pageNo:playload.pageNo,
            pageSize:6
        }
    }).then((res)=>{
        let data = res.data
        console.log(data)
        context.commit('changelists',data.list)
    }).catch((error)=>{
        console.log('请求error：'+error)
    })
    }
  }
}