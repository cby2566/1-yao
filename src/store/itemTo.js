export default {
    state:{
      cart:{
      }
  },
  getters:{

  },

  // 通过mutations修改state中的数据
  mutations:{
    addItem(state,itm){
        
        for(let i in itm){
          //console.log(state.cart[i]);
            if(state.cart[i]){
              state.cart[i].sum+=itm[i].sum;
                   
            }else{
                state.cart[i]=itm[i];
                console.log(state) 
            }
        } 
    },
    deleteObj(state,itm){
      delete state.cart[itm];
      //console.log(state.cart);
    },
    updataObj(state,itm){
        console.log(itm[0],itm[1]);
        // state.cart[itm[0]].checked=itm[1];
        // 扩展对象使深层对象也变成响应式
        state.cart = {
          ...state.cart,
          [itm[0]]:{
            ...state.cart[itm[0]],
            checked:itm[1]
          }}
    }

  },

  // 负责操作mutations
  actions:{

  }
}