<template>
  <div>
    <h2 class="my-4">所有評論：</h2>

    <div>
      <div
        class="d-flex justify-content-between align-items-start mb-3"
        v-for="comment in restaurantComments"
        :key="comment.id"
      >
        <div>
          <h3>
            <a href="#">{{ comment.User.name }}</a>
          </h3>
          <p>{{ comment.text }}</p>
          <figcaption class="blockquote-footer">
            {{ comment.createdAt | fromNow }}
          </figcaption>
        </div>
        <button type="button" class="btn btn-danger" v-if="currentUser.isAdmin">
          Delete
        </button>
      </div>

      <hr />
    </div>
  </div>
</template>

<script>
import moment from "moment";

const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true,
  },
  isAuthenticated: true,
};

export default {
  props: {
    restaurantComments: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentUser: dummyUser.currentUser,
    };
  },
  filters: {
    fromNow(datetime) {
      if (!datetime) return "-";
      return moment(datetime).fromNow();
    },
  },
};
</script>