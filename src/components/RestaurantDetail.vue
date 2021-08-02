<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{ restaurant.name }}</h1>
      <p class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-responsive center-block"
        :src="restaurant.image"
        style="width: 250px; margin-bottom: 25px"
      />
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{ restaurant.openingHours }}
          </li>
          <li>
            <strong>Tel:</strong>
            {{ restaurant.tel }}
          </li>
          <li>
            <strong>Address:</strong>
            {{ restaurant.address }}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{ restaurant.description }}</p>
      <a class="btn btn-primary btn-border me-2" href="#">Dashboard</a>

      <button
        type="button"
        class="btn btn-danger btn-border me-2"
        @click.stop.prevent="removeFavorite"
        v-if="restaurant.isFavorite"
      >
        移除最愛
      </button>
      <button
        type="button"
        class="btn btn-primary btn-border me-2"
        @click.stop.prevent="addFavorite"
        v-if="!restaurant.isFavorite"
      >
        加到最愛
      </button>
      <button
        type="button"
        class="btn btn-danger like me-2"
        @click.stop.prevent="unLike"
        v-if="restaurant.isLiked"
      >
        Unlike
      </button>
      <button
        type="button"
        class="btn btn-primary like me-2"
        @click.stop.prevent="like"
        v-if="!restaurant.isLiked"
      >
        Like
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialRestaurant: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      restaurant: this.initialRestaurant,
    };
  },
  methods: {
    addFavorite() {
      this.restaurant = {
        ...this.restaurant,
        isFavorite: true,
      };
    },
    removeFavorite() {
      this.restaurant = {
        ...this.restaurant,
        isFavorite: false,
      };
    },
    like() {
      this.restaurant = {
        ...this.restaurant,
        isLiked: true,
      };
    },
    unLike() {
      this.restaurant = {
        ...this.restaurant,
        isLiked: false,
      };
    },
  },
};
</script>