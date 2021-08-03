<template>
  <div class="card mb-3" style="max-width: 540px; margin: auto">
    <div class="row no-gutters">
      <div class="col-md-4">
        <a href="#">
          <img class="card-img" :src="restaurant.image" />
        </a>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ restaurant.name }}</h5>
          <span class="badge bg-secondary"
            >收藏數：{{ restaurant.FavoritedUsers.length }}</span
          >
          <p class="card-text">
            {{ restaurant.description }}
          </p>
          <a href="#" class="btn btn-primary me-2">Show</a>

          <button type="button" class="btn btn-danger me-2">移除最愛</button>
          <button type="button" class="btn btn-primary">加到最愛</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    restaurant: {
      type: Object,
      required: true,
    },
  },
};
</script>