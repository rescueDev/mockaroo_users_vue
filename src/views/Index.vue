<template>
  <div class="section section--home">
    <Grid>
      <Card v-for="user in userList" :key="user.id" :data="user">
        <template #body></template>
        <template #footer>
          <button class="button" @click="showUser(user)">
            Show
          </button>
        </template>
      </Card>
    </Grid>
  </div>
</template>

<script>
  import Card from "../components/Card";
  import Grid from "../components/Grid";

  export default {
    name: "Home",
    components: {
      Card,
      Grid,
    },
    data() {
      return {};
    },
    methods: {
      showUser: function(user) {
        this.$router.push(`/users/user/${user.id}`);
      },
    },
    computed: {
      userList() {
        return this.$store.users.list;
      },
    },
  };
</script>

<style lang="sass" scoped>
  @import '../assets/sass/variables'
  @import '../assets/sass/modules/mixins'

  .button
    margin: 10px
    border: none
    border-radius: 8px
    background-color: #CCCCCC
    color: white
    padding: 8px
</style>
