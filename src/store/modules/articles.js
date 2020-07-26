import { api } from "../api";

export default {
  namespaced: true,
  state: {
    feed: [],
    count: 0,
    created: null
  },
  mutations: {
    setArticles(state, { articles, articlesCount }) {
      console.log("Called Mutation");
      state.feed = articles;
      state.count = articlesCount;
    },
    setNewlyCreated(state, {newArticle}){
        console.log("Called Mutation setNewlyCreated");
        state.created = newArticle;
    }
  },
  actions: {
    async getGlobalFeed({ commit }, payload = { page: 1 }) {
      let route = "/articles";

      if (payload) {
        const {
          tag = null,
          author = null,
          favourited = null,
          page = 1
        } = payload;

        route += tag ? `?tag=${tag}&` : ``;
        route += author ? `?author=${author}&` : ``;
        route += favourited ? `?favourited=${favourited}&` : ``;
        route += page ? `?offset=${(page - 1) * 10}&limit=10` : ``;
      }
      const response = await api.get(route);
      commit("setArticles", response.data);
    },
    async getUserFeed({ commit }, payload = { page: 1 }) {
      let route = "/articles/feed";
      if (payload) {
        const { page = 1 } = payload;
        route += page ? `?offest=${(page - 1) * 10}&limit=10` : "";
      }
      const response = await api.get(route);
      commit("setArticles", response.data);
    },
    async createArticle( { commit }, payload )
    {
        console.log("Create Artivle Store");
        console.log(payload);
        let route = "/articles";
        const articleBody = {
            article : {
                title: payload.title,
                description: payload.description,
                body: payload.body,
                tagList: payload.tags? payload.tags.split(' '): []
            }
        }
        const response = await api.post(route, articleBody);
        commit("setNewlyCreated", response.data);
    }
  }
};
