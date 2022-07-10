<template>
  <div class="login-form-wrapper">
    <div class="login-form-title">登录 阿刘后台</div>
    <div class="login-form-sub-title">登录 阿刘后台</div>
    <div class="login-form-error-msg">{{ errorMessage }}</div>
    <a-form
      ref="loginForm"
      :model="userInfo"
      class="login-form"
      layout="vertical"
      @submit="handleSubmit"
    >
      <a-form-item
        field="username"
        :rules="[{ required: true, message: '用户名不能为空' }]"
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
        :rules="[{ required: true, message: '密码不能为空' }]"
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
      <a-space :size="16" direction="vertical">
        <div class="login-form-password-actions">
          <!-- <a-checkbox
            checked="rememberPassword"
            :model-value="loginConfig.rememberPassword"
            @change="(setRememberPassword as any)"
          >
            {{ $t("login.form.rememberPassword") }}
          </a-checkbox> -->
          <a-link>忘记密码</a-link>
        </div>
        <a-button type="primary" html-type="submit" long> 登录 </a-button>
        <a-button
          type="text"
          long
          class="login-form-register-btn"
          @click="handleRegisterBtn"
        >
          注册
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
// import { useI18n } from "vue-i18n";
// import { useStorage } from "@vueuse/core";
import { useLoginStore } from "@/store";
const store = useLoginStore();
// 点击注册按钮按钮，切换登录/注册状态 pinia/isLogin
const handleRegisterBtn = (): void => {
  store.updateSettings({ isLogin: false });
};
// import useLoading from "@/hooks/loading";

// const router = useRouter();
// const { t } = useI18n();
const errorMessage = ref("");
// const { loading, setLoading } = useLoading();
// const userStore = useUserStore();

// const loginConfig = useStorage("login-config", {
//   rememberPassword: true,
//   username: "admin", // 演示默认值
//   password: "admin", // demo default value
// });
const userInfo = reactive({
  username: "",
  password: "",
});
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
//       await userStore.login(values as LoginData);
//       const { redirect, ...othersQuery } = router.currentRoute.value.query;
//       router.push({
//         name: (redirect as string) || "Workplace",
//         query: {
//           ...othersQuery,
//         },
//       });
//       Message.success(t("login.form.login.success"));
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
.login-form-wrapper {
  background: #fff;
  padding: 24px;
}
.login-form {
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
