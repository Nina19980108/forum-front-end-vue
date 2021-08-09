<template>
  <div class="container py-5">
    <form class="w-100 d-grid gap-2" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign Up</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="name" class="mb-1">Name</label>
        <input
          id="name"
          v-model="name"
          name="name"
          type="text"
          class="form-control"
          placeholder="name"
          autocomplete="name"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-2">
        <label for="email" class="mb-1">Email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="username"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password" class="mb-1">Password</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="current-password"
          required
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password-check" class="mb-1">Password Check</label>
        <input
          id="password-check"
          v-model="passwordCheck"
          name="password-check"
          type="password"
          class="form-control"
          placeholder="Password Check"
          autocomplete="current-password"
          required
        />
      </div>

      <button
        class="btn btn-lg btn-primary d-block mb-3"
        type="submit"
        :disabled="isProcessing"
      >
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signin">Sign In</router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  </div>
</template>

<script>
import authorizationAPI from "./../apis/authorization";
import { Toast } from "../utils/helpers";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      passwordCheck: "",
      isProcessing: false,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        this.isProcessing = true;
        const newUser = {
          name: this.name,
          email: this.email,
          password: this.password,
          passwordCheck: this.passwordCheck,
        };
        if (
          !newUser.name ||
          !newUser.email ||
          !newUser.password ||
          !newUser.passwordCheck
        ) {
          Toast.fire({
            icon: "error",
            title: "每個欄位都是必填",
          });
          return;
        }
        if (newUser.password !== newUser.passwordCheck) {
          Toast.fire({
            icon: "error",
            title: "請確認 password 與 password Check 相同",
          });
          return;
        }
        const { data } = await authorizationAPI.signUp({
          name: newUser.name,
          email: newUser.email,
          password: newUser.password,
          passwordCheck: newUser.passwordCheck,
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.$router.push({ name: "sign-in" });
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法使用註冊功能，請稍後再試",
        });
      }
    },
  },
};
</script>
