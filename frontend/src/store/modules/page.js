import axios from 'axios';
import api from "@/utils/api.js";
const state = {
    pages: [],
    page: null,
};

const actions = {
    getPagesForCategory({ commit, rootState }, payload) {
        commit("updateProgress", true);
        let url = rootState.baseUrl.concat("pages/" + payload.alias);
        axios.get(url).then((response) => {
            commit("updatePages", response.data.result);
            commit("updateProgress", false);
        });
    },

    getPage({ commit, rootState }, payload) {
        commit("updateProgress", true);
        let url = rootState.baseUrl.concat("pages/" + payload.category + "/" + payload.page);
        axios.get(url).then((response) => {
            commit("updatePage", response.data);
            commit("updateProgress", false);
        })
    },
    createPage({ rootState }, payload) {
        return new Promise((resolve, reject) => {
            rootState.baseUrl.concat("member/create-page");

            let data = {
                Title: payload.title,
                Content: payload.content,
                Alias: payload.alias,
                catID: payload.cat_id,
            }
            
            api.post("member/create-page", data).then((response) => {
                resolve(response);
            }).then(err => {
                reject(err)
            });
        });

    },
};

const mutations = {
    updatePages(state, payload) {
        state.pages = payload;
    },

    updatePage(state, payload) {
        state.page = payload;
    },
    updateProgress(rootState, payload) {
        rootState.isLoading = payload;
    },
};

export default {
    state,
    actions,
    mutations
};