<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge bg-secondary mt-1 mb-3">
        {{ restaurant.Category ? restaurant.Category.name : "No Category" }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.Comments.length }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 1,
    name: "Jazmyn Quitzon",
    tel: "(017) 135-4543",
    address: "5876 Macejkovic Ford",
    opening_hours: "08:00",
    description: "Amet earum voluptatem dolorum.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=9.923349451179542",
    viewCounts: 17,
    createdAt: "2021-07-05T09:58:39.000Z",
    updatedAt: "2021-07-30T11:47:11.000Z",
    CategoryId: 4,
    Category: {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2021-07-05T09:58:39.000Z",
      updatedAt: "2021-07-05T09:58:39.000Z",
    },
    Comments: [
      {
        id: 171,
        text: "Modi laboriosam omnis itaque dolor eius esse sit quia.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2021-07-11T05:39:45.000Z",
        updatedAt: "2021-07-11T05:39:45.000Z",
        User: {
          id: 1,
          name: "root123",
          email: "root@example.com",
          password:
            "$2a$10$K2x6pQHkzPEKzw86x8Tc0.bfW7QVdA2Ls4AXBFkFu7xHG3UgA4Mli",
          isAdmin: true,
          image: "https://i.imgur.com/pU2mGov.png",
          createdAt: "2021-07-05T09:58:39.000Z",
          updatedAt: "2021-07-15T09:17:49.000Z",
        },
      },
      {
        id: 181,
        text: "ddddd\n",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2021-07-11T08:40:35.000Z",
        updatedAt: "2021-07-11T08:40:35.000Z",
        User: {
          id: 1,
          name: "root123",
          email: "root@example.com",
          password:
            "$2a$10$K2x6pQHkzPEKzw86x8Tc0.bfW7QVdA2Ls4AXBFkFu7xHG3UgA4Mli",
          isAdmin: true,
          image: "https://i.imgur.com/pU2mGov.png",
          createdAt: "2021-07-05T09:58:39.000Z",
          updatedAt: "2021-07-15T09:17:49.000Z",
        },
      },
      {
        id: 51,
        text: "Eius architecto adipisci labore nihil.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2021-07-05T09:58:39.000Z",
        updatedAt: "2021-07-05T09:58:39.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$knlgkc6iz7TSC1RADrSjmukYkaQgIc8JSVp1ltz614/F9SK.h/pqa",
          isAdmin: false,
          image: null,
          createdAt: "2021-07-05T09:58:39.000Z",
          updatedAt: "2021-07-05T09:58:39.000Z",
        },
      },
      {
        id: 1,
        text: "Omnis animi velit quis reiciendis odio facilis est delectus expedita.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2021-07-05T09:58:39.000Z",
        updatedAt: "2021-07-05T09:58:39.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$1UaQ5KZLbMCJztUGRWP/uOtIaKel7TQFHIbozRf4LPysvFLu3UOO6",
          isAdmin: false,
          image: null,
          createdAt: "2021-07-05T09:58:39.000Z",
          updatedAt: "2021-07-05T09:58:39.000Z",
        },
      },
      {
        id: 101,
        text: "Modi laboriosam omnis itaque dolor eius esse sit quia.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2021-07-05T09:58:39.000Z",
        updatedAt: "2021-07-05T09:58:39.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$1UaQ5KZLbMCJztUGRWP/uOtIaKel7TQFHIbozRf4LPysvFLu3UOO6",
          isAdmin: false,
          image: null,
          createdAt: "2021-07-05T09:58:39.000Z",
          updatedAt: "2021-07-05T09:58:39.000Z",
        },
      },
    ],
  },
};

export default {
  data() {
    return { restaurant: [] };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log("dashboard restaurantId", restaurantId);
      this.restaurant = dummyData.restaurant;
    },
  },
};
</script>