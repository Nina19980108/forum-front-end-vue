<template>
  <div class="card">
    <div class="card-header"><strong>1</strong> followings (追蹤者)</div>
    <div class="card-body">
      <router-link
        class="m-1"
        v-for="user in userFollowings"
        :key="user.id"
        :to="{ name: 'user', params: { id: user.id } }"
      >
        <img :src="user.image" width="60" height="60" class="avatar" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userFollowings: {
      type: Array,
      required: true,
    },
  },
};
</script>