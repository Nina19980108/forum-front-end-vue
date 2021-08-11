<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/"> 餐廳評論網 </router-link>
      <router-link class="text-white dropdown-menu-name" to="#">
        {{ currentUser.name || "使用者" }} 您好
      </router-link>

      <div class="btn-group" id="dropdown-menu">
        <button
          type="button"
          class="btn btn-dark"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span class="navbar-toggler-icon text-white" />
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li v-if="currentUser.isAdmin">
            <router-link
              :to="{ name: 'admin-restaurants' }"
              class="text-dark dropdown-item"
            >
              管理員後台
            </router-link>
          </li>
          <li v-if="isAuthenticated">
            <button class="dropdown-item" type="button">登出</button>
          </li>
        </ul>
      </div>

      <div id="navbarSupportedContent">
        <div class="ml-auto d-flex align-items-center">
          <!-- is user is admin -->
          <router-link
            :to="{ name: 'admin-restaurants' }"
            class="text-white me-3"
            v-if="currentUser.isAdmin"
          >
            管理員後台
          </router-link>

          <!-- is user is login -->
          <template v-if="isAuthenticated">
            <router-link to="#" class="text-white me-3">
              {{ currentUser.name || "使用者" }} 您好
            </router-link>
            <button
              type="button"
              class="btn btn-sm btn-outline-success my-2 my-sm-0"
            >
              登出
            </button>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
};
</script>

<style>
@media screen and (max-width: 900px) {
  #navbarSupportedContent {
    display: none;
  }
}
@media screen and (min-width: 900px) {
  #dropdown-menu,
  .dropdown-menu-name {
    display: none;
  }
}
</style>