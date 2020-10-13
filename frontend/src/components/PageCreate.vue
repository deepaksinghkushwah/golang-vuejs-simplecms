<template>
  <div>
    <div v-if="alertMsg" class="alert alert-info">{{ alertMsg }}</div>
    <table class="table table-striped">
      <tbody>
      <tr>
        <td>Category</td>
        <td>
          <select class="form-control" v-model="page.cat_id">
            <template v-for="cat in categories">
            <option :key="cat.ID" :value="cat.ID">{{ cat.Title }}</option>
            </template>
          </select>
        </td>
      </tr>
      <tr>
        <td>Page Title</td>
        <td>
          <input class="form-control" type="text" v-model="page.title" />
        </td>
      </tr>
      
      <tr>
        <td>Content</td>
        <td>
          <ckeditor class="form-control" :editor="editor" v-model="page.content" :config="editorConfig"></ckeditor>
        </td>
      </tr>
      
      <tr>
        <td></td>
        <td>
          <button @click.prevent="savePage" class="btn btn-primary">Submit</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  name: "PageCreate",
  data() {
    return {
      alertMsg: null,
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        // The configuration of the editor.
      },
      page: {
        title: "",        
        content: "",
        cat_id: 1,
      },
    };
  },
  computed: {
    pageAlias(){      
        let regex = /\s/g
        return this.page.title.replace(regex,"-");        
    },
    categories(){
      return this.$store.state.category.categories;
    }
  },
  components: {
    ckeditor: CKEditor.component,
  },
  methods: {
    savePage() {
      this.page.alias = this.pageAlias;
      this.$store.dispatch("createPage", this.page).then(resp => {        
        if(resp.data.status == 1){
          this.alertMsg = resp.data.msg;
          var vm = this;
          setTimeout(function() {
            vm.alertMsg = "";
          }, 5000);
        }
        this.page.title = "";
        this.page.content = "";
        this.page.alias = "";
      });
    },
  },
};
</script>