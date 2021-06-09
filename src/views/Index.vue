<template>
  <div class="home">
    <div class="user" v-for="user in userList" :key="user.id">
      <h3 class="">
        {{ user.first_name }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    // this.users = this.$store.users.list;
  },
  data() {
    return {};
  },
  computed: {
    userList() {
      return this.$store.users.list;
    },
  },
};
</script>
<style>
.home {
  background: red;
}
</style>
