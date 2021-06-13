<template>
  <div class="form__container">
    <form class="form__newuser" @submit.prevent="addUser">
      <div class="form__input">
        <label for="firstname">First Name</label>
        <input type="text" id="firstname" v-model="newUser.first_name" />
      </div>
      <div class="form__input">
        <label for="firstname">Last Name</label>
        <input type="text" id="lastname" v-model="newUser.last_name" />
      </div>
      <div class="form__input">
        <label for="gender">Gender</label>
        <input type="text" id="gender" v-model="newUser.gender" />
      </div>
      <div class="form__input">
        <label for="email">email</label>
        <input type="text" id="email" v-model="newUser.email" />
      </div>
      <Button :onClick="testButton">
        <template>Add</template>
      </Button>
    </form>
  </div>
</template>

<script>
  import Button from "@/components/Button.vue";
  export default {
    components: {
      Button,
    },
    data() {
      return {
        newUser: {
          first_name: "",
          last_name: "",
          gender: "",
          email: "",
          id: this.$store.users.list.length + 1,
        },
      };
    },
    methods: {
      addUser() {
        // check for object properties null or void
        const isEmpty = Object.values(this.newUser).some(
          (x) => x === null || x === ""
        );

        if (!isEmpty) {
          this.$store.users.list.push(this.newUser);
          this.$router.push(`/users/user/${this.newUser.id}`);
        } else {
          console.log("error!! Please complete the form");
        }
      },
      testButton() {
        console.log("button clicked in created");
      },
    },
  };
</script>

<style lang="sass" scoped>
  .form

    &__container
      display: flex
      justify-content: center
      width: 100%
      margin: 20px 10px

    &__newuser
      display: block

    &__input
      padding: 10px

    &__input > :first-child
       display: block
</style>
