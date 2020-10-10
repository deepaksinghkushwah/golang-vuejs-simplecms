<template>
  <div class="category">
    <Pages :alias="alias" />
  </div>
</template>
<script>
// import pages component and pass alias to it, pages compoenent will display pages list for a category
import Pages from "@/components/Pages.vue";

export default {
  name: "Category",
  data() {
    return {
      alias: "",
    };
  },
  components: {
    Pages,
  },
  mounted() {
    this.alias = this.$route.params.alias;
  },
  created() {
    this.$store.dispatch("getPagesForCategory", {
      alias: this.$route.params.alias,
    });
  },

  watch: {
    "$route.params.alias": function (alias) {
      this.$store.dispatch("getPagesForCategory", { alias: alias });
    },
  },
};
</script>