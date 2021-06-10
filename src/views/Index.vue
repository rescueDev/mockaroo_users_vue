<template>
  <div class="section section--home">
    <Card v-for="user in userList" :key="user.id" :data="user"></Card>
  </div>
</template>

<script>
import Card from "../components/Card";

export default {
  name: "Home",
  components: {
    Card,
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
