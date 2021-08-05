  <template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <!-- AdminUsersTable -->
    <AdminUsersTable />
  </div>
</template>

<script>
import AdminNav from "./../components/AdminNav.vue";
import AdminUsersTable from "./../components/AdminUsersTable.vue";

export default {
  components: {
    AdminNav,
    AdminUsersTable,
  },
};
</script>