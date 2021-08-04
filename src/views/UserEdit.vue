<template>
  <div class="container py-5">
    <form>
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="mb-3">
        <label for="image" class="form-label">Image</label>
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>