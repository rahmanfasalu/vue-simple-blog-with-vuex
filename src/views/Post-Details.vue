<template>
  <v-container class="app-container ">
    <v-layout wrap>
      <v-flex xs12>
        <div v-if="isValidPost(post)">
          <Card :post="post" :trimmed="false" />
        </div>
        <div v-else>
          <PageNotFound />
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Card from "../components/Card";
import PageNotFound from "../components/404";
export default {
  name: "post",
  components: {
    Card,
    PageNotFound,
  },
  data() {
    return {};
  },

  async created() {
    this.post = { ...this.getBlogById(this.$route.params.id) };
    if (!("id" in this.post)) {
      await this.loadBlogFeeds();
    }
  },
  methods: {
    ...mapActions(["loadBlogFeedsAction"]),
    async loadBlogFeeds() {
      this.message = "Loading post detaild...";
      await this.loadBlogFeedsAction();
      this.message = "";
      this.post = { ...this.getBlogById(this.$route.params.id) };
      this.$forceUpdate();
    },
    isValidPost: (post) => {
      if (!("id" in post)) {
        return false;
      }
      return true;
    },
  },
  computed: {
    ...mapGetters(["getBlogById"]),
  },
  watch: {},
};
</script>
