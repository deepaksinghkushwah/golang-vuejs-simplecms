import {
  AUTH_REQUEST,
  AUTH_ERROR,
  AUTH_SUCCESS,
  AUTH_LOGOUT
} from "../actions/auth";

//import apiCall from "@/utils/api";
import Axios from 'axios';
const state = {
  token: localStorage.getItem("user-token") || "",
  status: "",
  hasLoadedOnce: false
};

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status
};

const actions = {
  [AUTH_REQUEST]: ({ commit, rootState }, user) => {
    var preToken = localStorage.getItem("user-token");
    if (preToken) {
      commit(AUTH_SUCCESS, preToken);
    } else {
      if (user.email != "") {
        Axios.post(rootState.baseUrl.concat("login"), { 'email': user.email, 'password': user.password })
          .then(resp => {
            localStorage.setItem("user-token", resp.data.token);
            commit(AUTH_SUCCESS, resp.data.token);
          })
      }
    }
  },
  [AUTH_LOGOUT]: ({ commit }) => {
    return new Promise(resolve => {
      commit(AUTH_LOGOUT);
      localStorage.removeItem("user-token");
      resolve();
    });
  }
};

const mutations = {
  [AUTH_REQUEST]: state => {
    state.status = "loading";
  },
  [AUTH_SUCCESS]: (state, token) => {
    state.status = "success";
    state.token = token;
    state.hasLoadedOnce = true;
  },
  [AUTH_ERROR]: state => {
    state.status = "error";
    state.hasLoadedOnce = true;
  },
  [AUTH_LOGOUT]: state => {
    state.token = "";
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};