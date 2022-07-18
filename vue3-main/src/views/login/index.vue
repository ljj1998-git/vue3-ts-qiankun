<template>
  <div class="container">
    <!-- <LoginBanner /> -->
    <div class="content">
      <div class="content-inner">
        <transition name="fade" mode="out-in" appear>
          <LoginForm v-if="storeIsLogin" />
          <RegisterForm v-else />
        </transition>
      </div>
      <div class="footer">
        <!-- <Footer /> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LoginForm from "./components/login-form.vue";
import RegisterForm from "./components/register-form.vue";
import { useLoginStore } from "@/store";
import { storeToRefs } from "pinia";
const store = useLoginStore();
const storeRef = storeToRefs(store);
const { isLogin: storeIsLogin } = storeRef;
</script>

<style lang="less" scoped>
.container {
  display: flex;
  height: 100vh;
  background-image: url("@/assets/images/loginBg.jpeg");
  background-size: cover;

  .banner {
    width: 550px;
    background: linear-gradient(163.85deg, #1d2129 0%, #00308f 100%);
  }

  .content {
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-bottom: 40px;
  }

  .footer {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
  }
}

.logo {
  position: fixed;
  top: 24px;
  left: 22px;
  z-index: 1;
  display: inline-flex;
  align-items: center;

  // &-text {
  //   margin-right: 4px;
  //   margin-left: 4px;
  //   color: var(--color-fill-1);
  //   font-size: 20px;
  // }
}
</style>

<style lang="less" scoped>
// responsive
// @media (max-width: @screen-lg) {
//   .container {
//     .banner {
//       width: 25%;
//     }
//   }
// }
</style>
