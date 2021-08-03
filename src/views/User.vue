<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <!--  user card -->
      <UserProfileCard />
      <!-- // -->
      <div class="row">
        <div class="col-md-4">
          <!-- followings -->
          <div class="card">
            <div class="card-header">
              <strong>1</strong> followings (追蹤者)
            </div>
            <div class="card-body">
              <a href="/users/1">
                <img
                  src="https://i.imgur.com/pU2mGov.png"
                  width="60"
                  height="60"
                  class="avatar"
                />
              </a>
            </div>
          </div>
          <!-- // -->
          <br />
          <!-- followers -->
          <div class="card">
            <div class="card-header"><strong>1</strong> followers (追隨者)</div>
            <div class="card-body">
              <a href="/users/1">
                <img
                  src="https://i.imgur.com/pU2mGov.png"
                  width="60"
                  height="60"
                  class="avatar"
                />
              </a>
            </div>
          </div>
          <!-- // -->
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
export default {
  components: {
    UserProfileCard,
  },
};
</script>