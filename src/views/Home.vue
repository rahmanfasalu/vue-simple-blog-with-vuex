<template>
  <div class="app-container">
    <BlogFeed :data="this.blogs"></BlogFeed>
  </div>
</template>

<script>
import BlogFeed from "@/components/BlogFeed.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "home",
  components: {
    BlogFeed
  },
  data() {
    return {};
  },
  async created() {
    await this.loadBlogFeeds();
  },
  methods: {
    ...mapActions(["loadBlogFeedsAction"]),
    async loadBlogFeeds() {
      this.loading = true;
      await this.loadBlogFeedsAction();
      this.loading = false;
      this.$forceUpdate();
    }
  },
  computed: {
    ...mapState(["blogs"])
  }
};
</script>


