<template>
 
    <div class="card">      
      <div class="card-body">   
        <div class="jumbotron">     
        <h1 class="card-title">Pages</h1> Category: <strong>{{alias | capital}}</strong><p>&nbsp;</p>
        <div v-if="pageList.length <= 0">No record found</div>
        <ul>
          <li v-for="page in pageList" :key="page.id">
            <router-link :to="{name: 'Page', params: {category: alias ,page: page.Alias}}" >{{ page.Title | short(100) }}</router-link>
          </li>
        </ul>
      </div>
      </div>
    </div>
  
</template>
<script>
export default {
  props: ["alias"],
  computed: {
    pageList() {        
      return this.$store.state.page.pages;
    },
  },
};
</script>