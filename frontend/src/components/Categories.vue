<template>
    <Fragment>
  <li class="nav-item" v-for="cat in categories" :key="cat.ID">
    <router-link
      class="nav-link"
      :to="{name: 'Category', params: {alias: cat.Alias}}"
    >{{ cat.Title }}</router-link>
  </li>
  </Fragment>
</template>
<script>
import { Fragment } from 'vue-fragment'
export default {
  components:{
    Fragment
  },
  computed: {
    categories() {
      return this.$store.state.category.categories;
    },
  },
};
</script>
<style scoped>
</style>