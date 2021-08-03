<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ userFavoritedRestaurants.length }}</strong> 收藏的餐廳
    </div>
    <div class="card-body">
      <router-link
        class="m-2"
        v-for="restaurant in userFavoritedRestaurants"
        :key="restaurant.id"
        :to="{ name: 'restaurant', params: { id: restaurant.id } }"
      >
        <img
          :src="restaurant.image"
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
    userFavoritedRestaurants: {
      type: Array,
      required: true,
    },
  },
};
</script>