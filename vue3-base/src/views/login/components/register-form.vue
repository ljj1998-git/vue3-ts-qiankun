<template>
  <div class="register-form-wrapper">
    <div class="register-form-title">注册 阿刘后台</div>
    <div class="register-form-sub-title">注册 阿刘后台</div>
    <div class="register-form-error-msg">{{ errorMessage }}</div>
    <a-form
      ref="loginForm"
      :model="userInfo"
      class="register-form"
      :rules="rules"
      layout="vertical"
      @submit="handleSubmit"
    >
      <a-form-item
        field="username"
        :validate-trigger="['change', 'blur']"
        hide-label
      >
        <a-input v-model="userInfo.username" placeholder="请输入用户名">
          <template #prefix>
            <icon-user />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item
        field="password"
        :validate-trigger="['change', 'blur']"
        hide-label
      >
        <a-input-password
          v-model="userInfo.password"
          placeholder="请输入密码"
          allow-clear
        >
          <template #prefix>
            <icon-lock />
          </template>
        </a-input-password>
      </a-form-item>
      <a-form-item
        field="passwordAgain"
        :validate-trigger="['change', 'blur']"
        hide-label
      >
        <a-input-password
          v-model="userInfo.passwordAgain"
          placeholder="请再次输入密码"
          allow-clear
        >
          <template #prefix>
            <icon-lock />
          </template>
        </a-input-password>
      </a-form-item>
      <a-space :size="16" direction="vertical">
        <a-button type="primary" html-type="submit" long> 注册 </a-button>
        <a-button
          type="text"
          long
          class="register-form-register-btn"
          @click="handleTologBtn"
        >
          已有账号 去登录
        </a-button>
      </a-space>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { login } from "@/api/login";
// import { useRouter } from "vue-router";
// import { Message } from "@arco-design/web-vue";
import { ValidatedError } from "@arco-design/web-vue/es/form/interface";
import { Md5 } from "ts-md5/dist/md5";
import { useLoginStore } from "@/store";
import { RegisterRules } from "../types";
// import { useI18n } from "vue-i18n";
// import { useStorage } from "@vueuse/core";
// import { useUserStore } from "@/store";
// import useLoading from "@/hooks/loading";

const USERNAME_REGULAR = /^[a-z|A-Z|0-9|_|-]{4,16}$/;
const PASSWORD_REGULAR =
  /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]/;
const userInfo = reactive({
  username: "",
  password: "",
  passwordAgain: "",
});
// 表单校验
const rules: Record<string, Array<RegisterRules>> = {
  username: [
    {
      validator: (value, cb) => {
        if (!value) cb("用户名不能为空");
        if (!USERNAME_REGULAR.test(value))
          cb("用户名应为字母、数字、_ 、-,至少4个字符");
      },
    },
  ],
  password: [
    {
      validator: (value, cb) => {
        if (!value) cb("密码不能为空");
        if (!PASSWORD_REGULAR.test(value))
          cb("密码至少要包含字母，数字，特殊符号@#$%^&*~()-+=中各一位");
      },
    },
  ],
  passwordAgain: [
    {
      validator: (value, cb) => {
        if (!value) cb("再次输入密码不能为空");
        if (value !== userInfo.password) cb("两次密码不一致");
      },
    },
  ],
};

// const router = useRouter();
// const { t } = useI18n();
const errorMessage = ref("");

const store = useLoginStore();
// const { loading, setLoading } = useLoading();
// const userStore = useUserStore();
const handleTologBtn = (): void => {
  store.updateSettings({ isLogin: true });
};

// const validatorPasswordAgain = (value, cb) => {
//   if (value !== "hahaha") {
//     return cb("必须填写hahaha");
//   }

//   return cb();
// };

// const loginConfig = useStorage("register-config", {
//   rememberPassword: true,
//   username: "admin", // 演示默认值
//   password: "admin", // demo default value
// });

const handleSubmit = async ({
  errors,
  values,
}: {
  errors: Record<string, ValidatedError> | undefined;
  values: Record<string, any>;
}) => {
  if (!errors) {
    const { username } = userInfo;
    const password = Md5.hashStr(userInfo.password);
    const res = await login({ username, password });
    console.log(res);
  }
};

// const handleSubmit = async ({
//   errors,
//   values,
// }: {
//   errors: Record<string, ValidatedError> | undefined;
//   values: Record<string, any>;
// }) => {
//   if (!errors) {
//     setLoading(true);
//     try {
//       await userStore.register(values as LoginData);
//       const { redirect, ...othersQuery } = router.currentRoute.value.query;
//       router.push({
//         name: (redirect as string) || "Workplace",
//         query: {
//           ...othersQuery,
//         },
//       });
//       Message.success(t("register.form.register.success"));
//       const { rememberPassword } = loginConfig.value;
//       const { username, password } = values;
//       // 实际生产环境需要进行加密存储。
//       // The actual production environment requires encrypted storage.
//       loginConfig.value.username = rememberPassword ? username : "";
//       loginConfig.value.password = rememberPassword ? password : "";
//     } catch (err) {
//       errorMessage.value = (err as Error).message;
//     } finally {
//       setLoading(false);
//     }
//   }
// };
// const setRememberPassword = (value: boolean) => {
//   loginConfig.value.rememberPassword = value;
// };
</script>

<style lang="less" scoped>
.register-form-wrapper {
  background: #fff;
  padding: 24px;
}
.register-form {
  &-wrapper {
    width: 320px;
  }

  &-title {
    color: var(--color-text-1);
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
  }

  &-sub-title {
    color: var(--color-text-3);
    font-size: 16px;
    line-height: 24px;
  }

  &-error-msg {
    height: 32px;
    color: rgb(var(--red-6));
    line-height: 32px;
  }

  &-password-actions {
    display: flex;
    justify-content: space-between;
  }

  &-register-btn {
    color: var(--color-text-3) !important;
  }
}
</style>
