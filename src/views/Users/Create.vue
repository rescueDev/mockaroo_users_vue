<template>
  <div>
    <h1>Add new user</h1>
    <div>
      <form @submit.prevent="addUser">
        <div>
          <label for="firstname">First Name</label>
          <input type="text" id="firstname" v-model="newUser.firstname" />
        </div>
        <div>
          <label for="firstname">Last Name</label>
          <input type="text" id="lastname" v-model="newUser.lastname" />
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
  import axios from "axios";

  export default {
    data() {
      return {
        newUser: {
          firstname: "",
          lastname: "",
          gender: "",
          email: "",
        },
      };
    },
    methods: {
      addUser() {
        console.log(this.newUser);
        axios
          .post(
            `https://my.api.mockaroo.com/user.json?key=${process.env.VUE_APP_MOCK_PASS}`,
            this.newUser
          )
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      },
    },
  };
</script>
