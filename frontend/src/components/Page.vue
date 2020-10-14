<template>
  <div class="card">
    <div class="card-body">
      <div v-if="page">        
        <div class="jumbotron">
          <span class="d-flex justify-content-end align-items-end"><button @click="$router.go(-1)" class="btn btn-sm btn-warning">Back</button></span>
          <h3 class="display-4">{{ page.page.Title | capital }} </h3>
          
          <p class="lead text-justify" v-html="page.page.Content"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Page",
  created() {
    this.$store.dispatch("getPage", {
      category: this.$route.params.category,
      page: this.$route.params.page,
    });
  },
  computed: {
    page() {
      return this.$store.state.page.page;
    },
  },
};
</script>
<style scoped>
h3 {
  font-size: 20px;
  font-weight: bold;
}
.lead {
  font-size: 14px;
}
</style>