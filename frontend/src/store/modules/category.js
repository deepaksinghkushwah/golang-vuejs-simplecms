import Axios from 'axios';
const state = {
    categories: [],
};

const actions = {
    getCategories({ commit, rootState }) {
        let url = rootState.baseUrl.concat("categories")
        commit("updateProgress", true);
        Axios.get(url).then((response) => {
            commit("updateCategories", response.data.result);
            commit("updateProgress", false);
        });
    },

};

const mutations = {
    updateCategories(state, payload) {
        state.categories = payload;
    },

};

export default {
    state,
    actions,
    mutations
}