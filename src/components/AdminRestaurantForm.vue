<template>
  <form>
    <div class="mb-3">
      <label for="name" class="form-label">Name</label>
      <input
        id="name"
        type="text"
        class="form-control"
        name="name"
        placeholder="Enter name"
        required
      />
    </div>

    <div class="mb-3">
      <label for="categoryId" class="form-label">Category</label>
      <select id="categoryId" class="form-control" name="categoryId" required>
        <option value="" selected disabled>--請選擇--</option>
        <option value="1">中式料理</option>
        <option value="2">日式料理</option>
        <option value="3">義式料理</option>
      </select>
    </div>

    <div class="mb-3">
      <label for="tel" class="form-label">Tel</label>
      <input
        id="tel"
        type="text"
        class="form-control"
        name="tel"
        placeholder="Enter telephone number"
      />
    </div>

    <div class="mb-3">
      <label for="address" class="form-label">Address</label>
      <input
        id="address"
        type="text"
        class="form-control"
        placeholder="Enter address"
        name="address"
      />
    </div>

    <div class="mb-3">
      <label for="opening-hours" class="form-label">Opening Hours</label>
      <input
        id="opening-hours"
        type="time"
        class="form-control"
        name="opening_hours"
      />
    </div>

    <div class="mb-3">
      <label for="description" class="form-label">Description</label>
      <textarea
        id="description"
        class="form-control"
        rows="3"
        name="description"
      />
    </div>

    <div class="mb-3">
      <label for="formFile" class="form-label">Image</label>
      <input
        class="form-control"
        id="image"
        type="file"
        name="image"
        accept="image/*"
      />
    </div>

    <button type="submit" class="btn btn-primary">送出</button>
  </form>
</template>