import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default createStore({
  state: {
    theme: "light",
  },
  mutations: {
    change(state, theme) {
      state.theme = theme;
    },
  },
  actions: {},
  modules: {},
  getters: {},
  plugins: [vuexLocal.plugin],
});
