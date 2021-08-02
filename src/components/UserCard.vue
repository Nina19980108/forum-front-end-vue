<template>
  <div class="col-3">
    <a href="#">
      <img :src="user.image" width="140px" height="140px" />
    </a>
    <h2>{{ user.name }}</h2>
    <span class="badge bg-secondary"> 追蹤人數：{{ user.followerCount }}</span>
    <p class="mt-3">
      <button
        type="button"
        class="btn btn-danger"
        v-if="user.isFollowed"
        @click.stop.prevent="unfollow"
      >
        取消追蹤
      </button>
      <button
        type="button"
        class="btn btn-primary"
        v-if="!user.isFollowed"
        @click.stop.prevent="follow"
      >
        追蹤
      </button>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    initialUser: {
      type: [String, Object],
      required: true,
    },
  },
  data() {
    return {
      user: this.initialUser,
    };
  },
  methods: {
    follow() {
      const num = this.user.followerCount + 1;
      this.user = {
        ...this.user,
        isFollowed: true,
        followerCount: num,
      };
    },
    unfollow() {
      const num = this.user.followerCount - 1;
      this.user = {
        ...this.user,
        isFollowed: false,
        followerCount: num,
      };
    },
  },
};
</script>