<template>
  <div class="home">
    {{ userList }}
  </div>
</template>

<script>
  export default {
    name: "Home",
    mounted() {
      // this.users = this.$store.users.list;
    },
    data() {
      return {
        users: [],
      };
    },
    computed: {
      userList() {
        return this.$store.users.list;
      },
    },
  };
</script>
