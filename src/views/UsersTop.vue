<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <UserCard v-for="user in topUsers" :key="user.id" :initial-user="user" />
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs.vue";
import UserCard from "./../components/UserCard.vue";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  data() {
    return {
      topUsers: [],
    };
  },
  created() {
    this.fetchTopUsers();
  },
  methods: {
    async fetchTopUsers() {
      try {
        const response = await usersAPI.getTopUser();
        const topUsers = response.data.users;
        this.topUsers = topUsers;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得美食達人資料，請稍後再試",
        });
      }
    },
  },
  components: {
    NavTabs,
    UserCard,
  },
};
</script>