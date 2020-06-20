import Vue from "vue";
import Vuex from "vuex";
import { dataService } from "../shared";
import { GET_BLOG_FEEDS } from "../shared";

Vue.use(Vuex);

const state = {
  blogs: [],
};
const mutations = {
  [GET_BLOG_FEEDS](state, blogList) {
    state.blogs = blogList;
  },
};
const actions = {
  async loadBlogFeedsAction({ commit }) {
    const blogList = await dataService.loadBlogFeeds();
    commit(GET_BLOG_FEEDS, blogList);
  },
};

const getters = {
  getBlogById: (state) => (id) => {
    return state.blogs.find((item) => item.id == id);
  },
};
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
