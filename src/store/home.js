export default {
    state:{
      showNav:true,
      cart:{
        name:'ox',
        age:999
      }
  },
  getters:{

  },

  // 通过mutations修改state中的数据
  mutations:{
    deNav(ok,ff){
        ok.showNav=ff;
    },
    buga(state,fnc){
      console.log(state,fnc);   
    }
  },

  // 负责操作mutations
  actions:{
    //用来熟悉vuex的例子
    minusPriceAsync( context, payload ) { setTimeout( () => { 
      context.commit( 'buga', payload ); 
       }, 2000) }
  }
}