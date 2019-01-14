export default {
    state:{
      showNav:true
  },
  getters:{

  },

  // 通过mutations修改state中的数据
  mutations:{
    deNav(ok,ff){
          ok.showNav=ff;
        }
  },

  // 负责操作mutations
  actions:{

  }
}