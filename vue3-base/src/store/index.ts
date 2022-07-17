import { createPinia } from "pinia";
import useAppStore from "./modules/app";
import useLoginStore from "./modules/login";

const pinia = createPinia();

export { useLoginStore, useAppStore };
export default pinia;
