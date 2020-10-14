import {
  AUTH_REQUEST,
  AUTH_ERROR,
  AUTH_SUCCESS,
  AUTH_LOGOUT,
  PRELOAD,
  AUTH_SIGNUP,
  
} from "../actions/auth";

//import apiCall from "@/utils/api";
import Axios from 'axios';
const state = {
  token: localStorage.getItem("user-token") || "",
  status: "",
  roleID: 0,
  email: '',
  hasLoadedOnce: false
};

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status
};

const actions = {
  [PRELOAD]: ({commit}) => {
    var token = localStorage.getItem("user-token");
    if (token) {
      commit(AUTH_SUCCESS, token);
    }
  },

  [AUTH_SIGNUP]: ({rootState},user) => {
    return new Promise((resolve, reject) => {
      Axios.post(rootState.baseUrl.concat("signup"), user).then((response) => {
        resolve(response);
      }).then(err => {
        reject(err)
      });
    });
  },
  
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
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    var td = JSON.parse(jsonPayload);
    state.roleID = td.role_id;
    state.email = td.name;
    state.hasLoadedOnce = true;
  },
  [AUTH_ERROR]: state => {
    state.status = "error";
    state.hasLoadedOnce = true;
  },
  [AUTH_LOGOUT]: state => {
    state.token = "";
    state.roleID = 0;
    state.email = "";
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};