module.exports = {
  publicPath: "/vue-simple-blog-with-vuex/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/style.scss";`,
      },
    },
  },
};
