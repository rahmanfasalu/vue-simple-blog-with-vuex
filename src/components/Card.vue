<template>
  <div class="post-wrapper">
    <div v-if="post.image" class="post-featured-image">
      <v-lazy-image :src="post.image" />
    </div>
    <div :class="getPostcontent(post)" :style="getBackgroundColor(post)">
      <h3>{{ post.title }}</h3>
      <p>{{ trimmed ? post.short : post.long }}</p>
      <div v-if="trimmed">
        <router-link
          :to="{ name: 'post', params: { id: post.id } }"
          class="more-link"
          >See more</router-link
        >
      </div>
      <div v-if="!trimmed">
        <router-link :to="{ name: 'home' }" class="more-link">Back</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image";
export default {
  name: "cards",
  props: {
    post: {
      type: Object,
      default: () => {},
    },
    trimmed: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    getBackgroundColor: (post) => {
      return {
        backgroundColor: post.background_color ? post.background_color : "#FFF",
      };
    },
    getPostcontent: (post) => {
      if (post.dark) {
        return "post-content dark";
      }
      return "post-content";
    },
  },
  components: {
    VLazyImage,
  },
};
</script>

<style lang="scss" scoped></style>
