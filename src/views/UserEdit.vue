<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          id="name"
          v-model="user.name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="mb-3">
        <label for="image" class="form-label">Image</label>
        <img
          v-if="user.image"
          :src="user.image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        />
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control"
          @change="handleFileChange"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
const dummyData = {
  user: {
    id: 1,
    name: "root",
    image: "https://i.imgur.com/58ImzMM.png",
  },
};
export default {
  data() {
    return {
      user: {
        id: -1,
        name: "",
        image: "",
      },
    };
  },
  created() {
    const id = this.$route.params;
    this.fetchUser(id);
  },
  methods: {
    fetchUser(userId) {
      console.log(userId);
      this.user = { ...dummyData.user };
    },
    handleFileChange(e) {
      const { files } = e.target;
      if (files.length === 0) {
        return (this.user.image = "");
      } else {
        const imgURL = window.URL.createObjectURL(files[0]);
        return (this.user.image = imgURL);
      }
    },
    handleSubmit(e) {
      const form = e.target;
      const formData = new FormData(form);
      for (let [name, value] of formData) {
        console.log(name, ":", value);
      }
    },
  },
};
</script>