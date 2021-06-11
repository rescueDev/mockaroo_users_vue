<template>
  <div>
    <h1>Add new user</h1>
    <div>
      <form @submit.prevent="addUser">
        <div>
          <label for="firstname">First Name</label>
          <input type="text" id="firstname" v-model="newUser.first_name" />
        </div>
        <div>
          <label for="firstname">Last Name</label>
          <input type="text" id="lastname" v-model="newUser.last_name" />
        </div>
        <div>
          <label for="gender">Gender</label>
          <input type="text" id="gender" v-model="newUser.gender" />
        </div>
        <div>
          <label for="email">email</label>
          <input type="text" id="email" v-model="newUser.email" />
        </div>
        <input type="submit" value="Save" />
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        newUser: {
          first_name: "",
          last_name: "",
          gender: "",
          email: "",
          id: null,
        },
      };
    },
    methods: {
      addUser() {
        this.newUser.id = this.$store.users.list.length + 1;
        this.$store.users.list.push(this.newUser);
        this.$router.push(`/users/user/${this.newUser.id}`);
        // this.$axios
        //   .post(
        //     `https://my.api.mockaroo.com/user.json?key=${process.env.VUE_APP_MOCK_PASS}`,
        //     this.newUser
        //   )
        //   .then((res) => console.log(res))
        //   .catch((err) => console.log(err));
      },
    },
  };
</script>
