import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// import cart from './cart';
import category from './category.js';
import home from './home.js'
import goodlist from './goodlist.js'

// vuex的使用
// 1.创建一个store
export default new Vuex.Store({
  // 2. 创建state数据交由store来管理
  modules:{
    // cart,
    category,
    home,
    goodlist
  }
});