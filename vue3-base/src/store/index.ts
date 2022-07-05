import { defineStore } from "pinia";

export default defineStore("myGlobalState", {
  // other options
  state: () => ({
    index: 1,
    routes: [],
  }),
});
