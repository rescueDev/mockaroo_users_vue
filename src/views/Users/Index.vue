<template>
  <div>
    <h1>Users list</h1>
    <div>
      <div class="user" v-for="user in userList" :key="user.id">
        <h3 class="">
          {{ user.first_name }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        users: null,
        isEmpty: undefined,
      };
    },

    methods: {},
    computed: {
      userList() {
        return this.$store.users.list;
      },
    },
  };
</script>
