<template>
  <div class="section section--home">
    <Grid>
      <template #cards>
        <Card v-for="user in userList" :key="user.id" :data="user">
          <template #card_body></template>
          <template #card_footer>
            <button class="card__button__footer" @click="showUser(user)">
              Show
            </button>
          </template>
        </Card>
      </template>
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
        console.log("button clicked", user);
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

  .card__button__footer
    background-color: $showButtonColors
    padding: 0.6rem
    +button_border_radius
    color: #FFFF
</style>
