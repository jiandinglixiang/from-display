import { createStore } from "vuex";

export default createStore({
  state: {
    name: null,
    age: null,
    high: null,
    head: null,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    privacy: {
      state: {
        money: null,
      },
      getters: {},
      mutations: {},
      actions: {},
    },
  },
});
