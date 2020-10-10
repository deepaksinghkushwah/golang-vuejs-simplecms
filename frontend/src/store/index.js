import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseUrl: "http://localhost:8081/v1/",
    categories: [],
    pages: [],
    page: null,
    isLoading: false,
  },
  mutations: {
    updateCategories(state, payload) {
      state.categories = payload;
    },
    updatePages(state, payload) {
      state.pages = payload;
    },

    updatePage(state, payload) {
      state.page = payload;
    },
    updateProgress(state, payload) {
      state.isLoading = payload;
    }
  },
  actions: {
    getCategories({ commit, state }) {
      let url = state.baseUrl.concat("categories")
      commit("updateProgress", true);
      Axios.get(url).then((response) => {
        commit("updateCategories", response.data.result);
        commit("updateProgress", false);
      });      
    },

    getPagesForCategory({ commit, state }, payload) {
      commit("updateProgress", true);
      let url = state.baseUrl.concat("pages/" + payload.alias);
      Axios.get(url).then((response) => {
        commit("updatePages", response.data.result);
        commit("updateProgress", false);
      });      
    },

    getPage({ commit, state }, payload) {
      commit("updateProgress", true);
      let url = state.baseUrl.concat("pages/" + payload.category + "/" + payload.page);
      Axios.get(url).then((response) => {
        commit("updatePage", response.data);
        commit("updateProgress", false);
      });

      /*fetch(url).then(response => {
        return response.json();
      }).then(data => {        
        console.log(data);
        commit("updatePage",data);
      });*/
    },
  },
  modules: {
  },
})
