import { defineComponent } from "vue";
import { btnProps, ButtonTypes } from "./types";
const Props = btnProps();

export default defineComponent({
  name: "KButton",
  props: Props,
  setup(props, { emit }) {
    return () => {
      const { btnType, href, label } = props;
      console.log(btnType, href, label);

      if (btnType === ButtonTypes.LINK && href) {
        return <a href={href}>{label}</a>;
      } else {
        return <button>{label}</button>;
      }
    };
  },
});
