<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>
    <hr />
    <div
      class="card mb-3"
      style="max-width: 540px; margin: auto"
      v-for="restaurant in topRestaurants"
      :key="restaurant.id"
    >
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
              >收藏數：{{ restaurant.favoriteCount }}</span
            >
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link
              class="btn btn-primary me-2"
              :to="{ name: 'restaurant', params: { id: restaurant.id } }"
            >
              Show
            </router-link>

            <button
              type="button"
              class="btn btn-danger me-2"
              v-if="restaurant.isFavorited"
              @click.stop.prevent="deleteFavorite"
            >
              移除最愛
            </button>
            <button
              type="button"
              class="btn btn-primary"
              v-if="!restaurant.isFavorited"
              @click.stop.prevent="addFavorite"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";

export default {
  data() {
    return {
      topRestaurants: [],
    };
  },
  created() {
    this.fetchTopRestaurants();
  },
  methods: {
    async fetchTopRestaurants() {
      try {
        const { data } = await restaurantsAPI.getRestaurantsTop();
        this.topRestaurants = data.restaurants.map((restaurant) => {
          return {
            id: restaurant.id,
            image: restaurant.image,
            name: restaurant.name,
            favoriteCount: restaurant.FavoriteCount,
            description: restaurant.description,
          };
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試",
        });
      }
    },
    addFavorite() {
      this.restaurant = {
        ...this.restaurant,
        isFavorited: true,
      };
    },
    deleteFavorite() {
      this.restaurant = {
        ...this.restaurant,
        isFavorited: false,
      };
    },
  },
  components: {
    NavTabs,
  },
};
</script>
