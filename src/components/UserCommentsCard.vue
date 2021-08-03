<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ userComments.length }}</strong> 已評論餐廳
    </div>
    <div class="card-body">
      <router-link
        class="m-2"
        v-for="comment in userComments"
        :key="comment.id"
        :to="{ name: 'restaurant', params: { id: comment.RestaurantId } }"
      >
        <img
          :src="comment.Restaurant.image"
          width="60"
          height="60"
          class="avatar mb-2"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userComments: {
      type: Array,
      required: true,
    },
  },
};
</script>