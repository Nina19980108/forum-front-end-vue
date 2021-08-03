<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>
    <hr />
    <RestaurantsTop />
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import RestaurantsTop from "./../components/RestaurantsTop";

export default {
  components: {
    NavTabs,
    RestaurantsTop,
  },
};
</script>
