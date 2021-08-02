<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <UserCard v-for="user in topUsers" :key="user.id" :initial-user="user" />
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs.vue";
import UserCard from "./../components/UserCard.vue";

const dummyData = {
  topUsers: [
    {
      id: 1,
      name: "User1",
      image:
        "https://i.pinimg.com/564x/0a/c4/ce/0ac4ce6e9c68fd3e3438581f636cc147.jpg",
      followerCount: 8,
      isFollowed: false,
    },
    {
      id: 2,
      name: "User2",
      image:
        "https://i.pinimg.com/564x/ea/89/77/ea89773b3f3dc9643290348678aa9d2f.jpg",
      followerCount: 6,
      isFollowed: true,
    },
    {
      id: 3,
      name: "User3",
      image:
        "https://i.pinimg.com/564x/88/d2/36/88d2360cf99cad25400fa72cdedea82b.jpg",
      followerCount: 2,
      isFollowed: false,
    },
  ],
};

export default {
  data() {
    return {
      topUsers: [],
    };
  },
  created() {
    this.fetchTopUsers();
  },
  methods: {
    fetchTopUsers() {
      this.topUsers = dummyData.topUsers;
    },
  },
  components: {
    NavTabs,
    UserCard,
  },
};
</script>