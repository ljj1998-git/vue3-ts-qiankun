import { PropType } from "vue";

enum ButtonTypes {
  LINK = "link",
  DANGER = "danger",
  PRIMARY = "primary",
  DEFAULT = "default",
}

enum SizeTypes {
  LARGE = "large",
  SMALL = "small",
}

const btnProps = () => {
  return {
    label: String,
    btnType: {
      type: String as PropType<ButtonTypes>,
      default: ButtonTypes.LINK,
    },
    href: String,
    disabled: Boolean,
    backgroundColor: String,
    size: {
      type: String as PropType<SizeTypes>,
      default: SizeTypes.SMALL,
    },
  };
};

export { btnProps, ButtonTypes, SizeTypes };
