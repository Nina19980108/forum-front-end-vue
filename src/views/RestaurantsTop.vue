<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>
    <hr />
    <RestaurantTopCard
      v-for="restaurant in topRestaurants"
      :key="restaurant.id"
      :restaurant="restaurant"
    />
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import RestaurantTopCard from "./../components/RestaurantTopCard";

const dummyData = {
  topRestaurants: [
    {
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
      FavoritedUsers: [
        {
          id: 21,
          name: "hans",
          email: "hans@yahoo.com",
          password:
            "$2a$10$x1t6Xd/2gpTd2VjJHGoBd.NsmIZhv57MvwjMBVsB67qFh0ueCa2ja",
          isAdmin: false,
          image: null,
          createdAt: "2021-07-16T03:24:28.000Z",
          updatedAt: "2021-07-16T03:24:28.000Z",
          Favorite: {
            UserId: 21,
            RestaurantId: 1,
            createdAt: "2021-07-16T03:24:55.000Z",
            updatedAt: "2021-07-16T03:24:55.000Z",
          },
        },
        {
          id: 1,
          name: "root123",
          email: "root@example.com",
          password:
            "$2a$10$K2x6pQHkzPEKzw86x8Tc0.bfW7QVdA2Ls4AXBFkFu7xHG3UgA4Mli",
          isAdmin: true,
          image: "https://i.imgur.com/pU2mGov.png",
          createdAt: "2021-07-05T09:58:39.000Z",
          updatedAt: "2021-07-15T09:17:49.000Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 1,
            createdAt: "2021-08-02T07:33:06.000Z",
            updatedAt: "2021-08-02T07:33:06.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 2,
    },
    {
      id: 50,
      name: "Deshaun Zboncak",
      tel: "491-316-6241 x8970",
      address: "44998 Daniel Dam",
      opening_hours: "08:00",
      description: "Adipisci in omnis consectetur ullam dolores id ut ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=80.08532188319566",
      viewCounts: 3,
      createdAt: "2021-07-05T09:58:39.000Z",
      updatedAt: "2021-07-06T16:02:38.000Z",
      CategoryId: 4,
      FavoritedUsers: [
        {
          id: 1,
          name: "root123",
          email: "root@example.com",
          password:
            "$2a$10$K2x6pQHkzPEKzw86x8Tc0.bfW7QVdA2Ls4AXBFkFu7xHG3UgA4Mli",
          isAdmin: true,
          image: "https://i.imgur.com/pU2mGov.png",
          createdAt: "2021-07-05T09:58:39.000Z",
          updatedAt: "2021-07-15T09:17:49.000Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 50,
            createdAt: "2021-07-10T15:05:26.000Z",
            updatedAt: "2021-07-10T15:05:26.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 1,
    },
    {
      id: 8,
      name: "Kariane West",
      tel: "1-392-349-4577 x62194",
      address: "576 Kris Parkways",
      opening_hours: "08:00",
      description: "quo",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=59.761591350585455",
      viewCounts: 0,
      createdAt: "2021-07-05T09:58:39.000Z",
      updatedAt: "2021-07-05T09:58:39.000Z",
      CategoryId: 4,
      FavoritedUsers: [
        {
          id: 1,
          name: "root123",
          email: "root@example.com",
          password:
            "$2a$10$K2x6pQHkzPEKzw86x8Tc0.bfW7QVdA2Ls4AXBFkFu7xHG3UgA4Mli",
          isAdmin: true,
          image: "https://i.imgur.com/pU2mGov.png",
          createdAt: "2021-07-05T09:58:39.000Z",
          updatedAt: "2021-07-15T09:17:49.000Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 8,
            createdAt: "2021-08-02T07:33:10.000Z",
            updatedAt: "2021-08-02T07:33:10.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 1,
    },
    {
      id: 5,
      name: "Salma Johnson",
      tel: "866.855.4905",
      address: "4722 Lionel Trafficway",
      opening_hours: "08:00",
      description: "Mollitia sit recusandae reiciendis voluptatibus co",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=76.09006422711376",
      viewCounts: 0,
      createdAt: "2021-07-05T09:58:39.000Z",
      updatedAt: "2021-07-05T09:58:39.000Z",
      CategoryId: 1,
      FavoritedUsers: [
        {
          id: 1,
          name: "root123",
          email: "root@example.com",
          password:
            "$2a$10$K2x6pQHkzPEKzw86x8Tc0.bfW7QVdA2Ls4AXBFkFu7xHG3UgA4Mli",
          isAdmin: true,
          image: "https://i.imgur.com/pU2mGov.png",
          createdAt: "2021-07-05T09:58:39.000Z",
          updatedAt: "2021-07-15T09:17:49.000Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 5,
            createdAt: "2021-08-02T07:33:08.000Z",
            updatedAt: "2021-08-02T07:33:08.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 1,
    },
    {
      id: 4,
      name: "Mckayla Hintz",
      tel: "1-240-532-2429",
      address: "167 Rogahn Mission",
      opening_hours: "08:00",
      description: "Impedit nesciunt ad id delectus magnam aspernatur ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=42.58020446504014",
      viewCounts: 1,
      createdAt: "2021-07-05T09:58:39.000Z",
      updatedAt: "2021-07-05T17:10:00.000Z",
      CategoryId: 3,
      FavoritedUsers: [
        {
          id: 1,
          name: "root123",
          email: "root@example.com",
          password:
            "$2a$10$K2x6pQHkzPEKzw86x8Tc0.bfW7QVdA2Ls4AXBFkFu7xHG3UgA4Mli",
          isAdmin: true,
          image: "https://i.imgur.com/pU2mGov.png",
          createdAt: "2021-07-05T09:58:39.000Z",
          updatedAt: "2021-07-15T09:17:49.000Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 4,
            createdAt: "2021-08-02T07:39:28.000Z",
            updatedAt: "2021-08-02T07:39:28.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 1,
    },
    {
      id: 2,
      name: "Dudley Jast",
      tel: "(241) 684-4461 x13070",
      address: "001 Allen Road",
      opening_hours: "08:00",
      description: "Voluptatibus quisquam voluptatum aut nemo non volu",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=35.43038308274238",
      viewCounts: 4,
      createdAt: "2021-07-05T09:58:39.000Z",
      updatedAt: "2021-07-29T13:11:41.000Z",
      CategoryId: 4,
      FavoritedUsers: [
        {
          id: 21,
          name: "hans",
          email: "hans@yahoo.com",
          password:
            "$2a$10$x1t6Xd/2gpTd2VjJHGoBd.NsmIZhv57MvwjMBVsB67qFh0ueCa2ja",
          isAdmin: false,
          image: null,
          createdAt: "2021-07-16T03:24:28.000Z",
          updatedAt: "2021-07-16T03:24:28.000Z",
          Favorite: {
            UserId: 21,
            RestaurantId: 2,
            createdAt: "2021-07-16T03:25:01.000Z",
            updatedAt: "2021-07-16T03:25:01.000Z",
          },
        },
      ],
      isFavorited: false,
      FavoriteCount: 1,
    },
    {
      id: 49,
      name: "Hildegard Roberts",
      tel: "129-461-5879 x06306",
      address: "606 Jimmy Overpass",
      opening_hours: "08:00",
      description: "voluptate ut blanditiis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=93.10105269151492",
      viewCounts: 0,
      createdAt: "2021-07-05T09:58:39.000Z",
      updatedAt: "2021-07-05T09:58:39.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 48,
      name: "Edgar Toy",
      tel: "1-784-399-1059 x571",
      address: "7994 Winston Circle",
      opening_hours: "08:00",
      description: "Vitae maxime molestias vero vero dolores vero sed ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=20.170836111399094",
      viewCounts: 0,
      createdAt: "2021-07-05T09:58:39.000Z",
      updatedAt: "2021-07-05T09:58:39.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 47,
      name: "Patience Kassulke",
      tel: "858.255.9873 x81588",
      address: "0816 Cronin Extension",
      opening_hours: "08:00",
      description: "Quo quo et suscipit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=74.96472730648365",
      viewCounts: 0,
      createdAt: "2021-07-05T09:58:39.000Z",
      updatedAt: "2021-07-05T09:58:39.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 46,
      name: "Jerel Jacobs PhD",
      tel: "1-246-024-5658",
      address: "12151 Madelyn Spur",
      opening_hours: "08:00",
      description: "cum",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=98.33440081366507",
      viewCounts: 0,
      createdAt: "2021-07-05T09:58:39.000Z",
      updatedAt: "2021-07-05T09:58:39.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
  ],
};

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
    fetchTopRestaurants() {
      this.topRestaurants = dummyData.topRestaurants;
    },
  },
  components: {
    NavTabs,
    RestaurantTopCard,
  },
};
</script>
