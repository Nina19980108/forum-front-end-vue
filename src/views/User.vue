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
          <div class="card">
            <div class="card-header"><strong>38</strong> 已評論餐廳</div>
            <div class="card-body">
              <a href="/restaurants/4">
                <img
                src=https://loremflickr.com/320/240/restaurant,food/?random&#x3D;42.58020446504014
                width="60" height="60" class="avatar" />
              </a>
              <a href="/restaurants/6">
                <img
                src=https://loremflickr.com/320/240/restaurant,food/?random&#x3D;12.190112895855831
                width="60" height="60" class="avatar" />
              </a>
              <a href="/restaurants/7">
                <img
                src=https://loremflickr.com/320/240/restaurant,food/?random&#x3D;26.38207413310656
                width="60" height="60" class="avatar" />
              </a>
            </div>
          </div>
          <!-- // -->
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

export default {
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
  },
};
</script>