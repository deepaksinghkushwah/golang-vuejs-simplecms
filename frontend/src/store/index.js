import Vue from 'vue'
import Vuex from 'vuex'

import auth from "./modules/auth";
import page from "./modules/page";
import category from "./modules/category";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseUrl: "http://127.0.0.1:8081/v1/",
    isLoading: false,
  },
  getters: {

  },
  setters: {

  },
  mutations: {    
    updateProgress(state, payload) {
      state.isLoading = payload;
    }
  },
  
  modules: {    
    auth,
    page,
    category,
  },
})
