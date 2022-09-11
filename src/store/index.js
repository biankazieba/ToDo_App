import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default createStore({
  state: {
    theme: "light",
    token: "",
  },
  mutations: {
    changeTheme(state, theme) {
      state.theme = theme;
    },
    changeToken(state, token) {
      state.token = token;
    },
  },
  actions: {},
  modules: {},
  getters: {},
  plugins: [vuexLocal.plugin],
});
