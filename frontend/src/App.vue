<template>
  <div id="nav">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/">CMS</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <Categories />
            
          </ul>
          <ul class="navbar-nav">
            <li v-if="$store.getters.isAuthenticated == false" class="nav-item">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>
            <li v-if="$store.getters.isAuthenticated == false" class="nav-item">
              <router-link class="nav-link" to="/signup">Signup</router-link>
            </li>

            <li v-if="$store.state.auth.roleID==1" class="nav-item">
               <router-link class="nav-link" to="/page-create">Create Page</router-link>
            </li>
            <li v-if="$store.getters.isAuthenticated==true" class="nav-item">
              <a class="nav-link" href="javascript:void(0)" @click.prevent="logout">Logout</a>
            </li>
            
          </ul>
        </div>
      </nav>

      <div class="loadingContainer" v-if="loading">
        <div class="loadingItem">Loading....</div>
      </div>

      <router-view />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Categories from "@/components/Categories.vue";
import {AUTH_LOGOUT,PRELOAD} from "@/store/actions/auth.js";

export default {
  name: "Home",
  components: {
    Categories,
  },
  methods: {
    logout(){
      this.$store.dispatch(AUTH_LOGOUT).then(() => {
        this.$router.push("/login");
      });
    }
  },
  computed: {
    loading() {
      return this.$store.state.isLoading;
    },
    token(){
      return this.$store.state.auth.token;
    }
  },
  mounted() {   
    this.$store.dispatch(PRELOAD);
    this.$store.dispatch("getCategories");
    
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  min-height: 500px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.loadingContainer {
  height: 500px;
  padding: 0;
  margin: 0;

  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.loadingItem {
  background-color: tomato;
  padding: 5px;
  width: 200px;
  height: 25px;
  margin: 10px;
  top: 50%;
  line-height: 20px;
  color: white;
  font-weight: bold;
  font-size: 2em;
  text-align: center;
  vertical-align: middle;
}

.nav-item{
  display: inline;
  padding-left: 10px;
}
</style>
