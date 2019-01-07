import axios from 'axios'

export default {
    state:{
      cateTab:[{
        name:'人群找药',

      },
      {
        name:'保健营养',
        
      }]
  },
  getters:{

  },

  // 通过mutations修改state中的数据
  mutations:{

  },

  // 负责操作mutations
  actions:{
    getcateList(context){
      axios.get("/channel/guest",{withCredentials:true}).then(data=>{
        var res=data.data.myList;
        context("GETCHANNELS",res)
      })
    }
  }
}