<template>
  <div class="container py-5">
    <!-- 1. 使用先前寫好的 AdminNav -->
    <AdminNav />

    <form class="my-4">
      <div class="row">
        <div class="col-md-4">
          <input
            type="text"
            v-model="newCategoryName"
            class="form-control"
            placeholder="新增餐廳類別..."
          />
        </div>
        <div class="col-auto">
          <button
            @click.stop.prevent="createCategory"
            type="button"
            class="btn btn-primary"
          >
            新增
          </button>
        </div>
      </div>
    </form>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col" width="60">#</th>
          <th scope="col">Category Name</th>
          <th scope="col" width="210">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <th scope="row">
            {{ category.id }}
          </th>
          <td class="position-relative">
            <div class="category-name" v-show="!category.isEditing">
              {{ category.name }}
            </div>
            <input
              v-show="category.isEditing"
              v-model="category.name"
              type="text"
              class="form-control"
            />
            <span
              v-show="category.isEditing"
              class="cancel"
              @click.stop.prevent="handleCancel(category.id)"
            >
              ✕
            </span>
          </td>
          <td>
            <button
              v-show="!category.isEditing"
              type="button"
              class="btn btn-link me-2"
              @click.stop.prevent="toggleIsEditing(category.id)"
            >
              Edit
            </button>
            <button
              v-show="category.isEditing"
              type="button"
              class="btn btn-link me-2"
              @click.stop.prevent="
                updateCategory({ categoryId: category.id, name: category.name })
              "
              :disabled="category.isSaving"
            >
              Save
            </button>
            <button
              @click.stop.prevent="deleteCategory(category.id)"
              type="button"
              class="btn btn-link me-2"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "@/components/AdminNav";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";

export default {
  components: {
    AdminNav,
  },
  data() {
    return {
      categories: [],
      newCategoryName: "",
    };
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const { data } = await adminAPI.categories.get();
        this.categories = data.categories.map((category) => ({
          ...category,
          isEditing: false,
          isSaving: false,
          nameCached: "",
        }));
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳分類，請稍後再試",
        });
      }
    },
    async createCategory() {
      try {
        if (!this.newCategoryName.trim()) {
          Toast.fire({
            icon: "error",
            title: "請填入新的餐廳分類名稱",
          });
          return;
        }
        const { data } = await adminAPI.categories.create({
          name: this.newCategoryName,
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.newCategoryName = "";
        this.fetchCategories();
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法新增餐廳分類，請稍後再試",
        });
      }
    },
    deleteCategory(categoryId) {
      this.categories = this.categories.filter(
        (category) => category.id !== categoryId
      );
    },
    toggleIsEditing(categoryId) {
      this.categories = this.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            isEditing: !category.isEditing,
            nameCached: category.name,
          };
        }
        return category;
      });
    },
    async updateCategory({ categoryId, name }) {
      try {
        this.categories = await this.waitSaving(categoryId);
        const { data } = await adminAPI.categories.update({ categoryId, name });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.toggleIsEditing(categoryId);
        this.categories = await this.finishSaving(categoryId);
      } catch (error) {
        this.categories = await this.finishSaving(categoryId);
        Toast.fire({
          icon: "error",
          title: "無法修改餐廳分類，請稍後再試",
        });
      }
    },
    handleCancel(categoryId) {
      this.categories = this.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            name: category.nameCached,
          };
        }
        return category;
      });
      this.toggleIsEditing(categoryId);
    },
    waitSaving(categoryId) {
      return this.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            isSaving: true,
          };
        }
        return category;
      });
    },
    finishSaving(categoryId) {
      return this.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            isSaving: false,
          };
        }
        return category;
      });
    },
  },
};
</script>

<style scoped>
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 15px;
  top: 49%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>