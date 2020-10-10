import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.filter('nl2br', function(str){
  return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
});

Vue.filter('capital', function(str){
  return str.toUpperCase();
});

Vue.filter('short', function(str, strLen){
  if (str.length > strLen){
    return str.substr(0,strLen) + "...";
  } else {
    return str.substr(0,strLen);
  }
  
});


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
