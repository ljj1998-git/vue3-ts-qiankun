import { initGlobalState } from "qiankun";
// import { storeToRefs } from "pinia";
// import { useStore } from "../store/index";

// const store = useStore();
// const { routes } = storeToRefs(store);
const initialState = {
  // 这里写初始化数据
  token: "",
  res: {},
};

// 初始化 state
const actions = initGlobalState(initialState);
export default actions;
