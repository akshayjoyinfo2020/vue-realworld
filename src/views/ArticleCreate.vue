<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  v-model="title"
                  placeholder="Article Title"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  v-model="description"
                  placeholder="What's this article about?"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control"
                  rows="8"
                  v-model="body"
                  placeholder="Write your article (in markdown)"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input type="text" v-model="tags" class="form-control" placeholder="Enter tags" />
                <div class="tag-list"></div>
              </fieldset>
              <button @click="publish" class="btn btn-lg pull-xs-right btn-primary" type="button">Publish Article</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data: function() {
    return {
      title: "",
      description: "",
      body: "",
      tags: "",
      errors: []
    };
  },
  methods: {
    publish() {
      console.log("publishing");
      this.$store
        .dispatch("articles/createArticle", {
          title: this.title,
          description: this.description,
          body: this.body,
          tags: this.tags
        })
        .catch(err => {
          this.errors = [];
          this.errors.push(err);
          console.log(this.errors);
        });
    }
  }
};
</script>