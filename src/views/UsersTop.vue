<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <div class="col-3" v-for="user in topUsers" :key="user.id">
        <a href="#">
          <img :src="user.image | emptyImage" width="140px" height="140px" />
        </a>
        <h2>{{ user.name }}</h2>
        <span class="badge bg-secondary">
          追蹤人數：{{ user.followerCount }}</span
        >
        <p class="mt-3">
          <button
            type="button"
            class="btn btn-danger"
            v-if="user.isFollowed"
            @click.stop.prevent="deleteFollow(user.id)"
          >
            取消追蹤
          </button>
          <button
            type="button"
            class="btn btn-primary"
            v-if="!user.isFollowed"
            @click.stop.prevent="addFollow(user.id)"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs.vue";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
import { emptyImageFilter } from "./../utils/mixins";

export default {
  mixins: [emptyImageFilter],
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
        const { data } = await usersAPI.getTopUser();
        this.topUsers = data.users.map((user) => {
          return {
            id: user.id,
            name: user.name,
            image: user.image,
            followerCount: user.FollowerCount,
            isFollowed: user.isFollowed,
          };
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得美食達人資料，請稍後再試",
        });
      }
    },
    async addFollow(userId) {
      const { data } = await usersAPI.addFollowing({ userId });
      if (data.status !== "success") {
        throw new Error(data.message);
      }
      this.topUsers = this.topUsers.map((user) => {
        if (user.id !== userId) {
          return user;
        } else {
          return {
            ...user,
            followerCount: user.followerCount + 1,
            isFollowed: true,
          };
        }
      });
    },
    async deleteFollow(userId) {
      const { data } = await usersAPI.deleteFollowing({ userId });
      if (data.status !== "success") {
        throw new Error(data.message);
      }
      this.topUsers = this.topUsers.map((user) => {
        if (user.id !== userId) {
          return user;
        } else {
          return {
            ...user,
            followerCount: user.followerCount - 1,
            isFollowed: false,
          };
        }
      });
    },
  },
  components: {
    NavTabs,
  },
};
</script>