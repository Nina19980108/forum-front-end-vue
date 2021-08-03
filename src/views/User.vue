<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <!--  user profile card -->
      <UserProfileCard />
      <div class="row">
        <div class="col-md-4">
          <!-- user followings card -->
          <UserFollowingsCard />
          <br />
          <!-- user followers card -->
          <UserFollowersCard />
        </div>
        <div class="col-md-8">
          <!-- 已評論餐廳 -->
          <UserCommentsCard />
          <br />
          <!-- 收藏的餐廳 -->
          <UserFavoritedRestaurantsCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileCard from "./../components/UserProfileCard.vue";
import UserFollowingsCard from "./../components/UserFollowingsCard.vue";
import UserFollowersCard from "./../components/UserFollowersCard.vue";
import UserCommentsCard from "./../components/UserCommentsCard.vue";
import UserFavoritedRestaurantsCard from "./../components/UserFavoritedRestaurantsCard.vue";

export default {
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
  },
};
</script>