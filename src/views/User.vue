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
          <div class="card">
            <div class="card-header"><strong>5</strong> 收藏的餐廳</div>
            <div class="card-body">
              <a href="/restaurants/50">
                <img
                  src="https://loremflickr.com/320/240/restaurant,food/?random&#x3D;80.08532188319566"
                  width="60"
                  height="60"
                  class="avatar"
                />
              </a>
            </div>
          </div>
          <!-- // -->
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

export default {
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
  },
};
</script>