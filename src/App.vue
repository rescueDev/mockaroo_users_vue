<template>
  <div class="application">
    <Header>
      <template #left><Logo></Logo></template>
      <Navigation :items="$store.navigation.header"></Navigation>
      <template #right>Hello!</template>
    </Header>

    <transition name="page" mode="out-in">
      <div v-if="loading">Carica</div>
      <router-view v-else :key="$route.path" />
    </transition>

    <Footer>
      <Logo mini></Logo>
      <div class="margin-bottom-10"></div>
      <Navigation mini :items="$store.navigation.footer"></Navigation>
    </Footer>
  </div>
</template>

<script>
  import Navigation from "./components/Navigation";
  import Header from "./components/Header";
  import Footer from "./components/Footer";
  import Logo from "./components/Logo";
  export default {
    name: "App",
    components: {
      Navigation,
      Header,
      Footer,
      Logo,
    },
    data() {
      return {
        loading: true,
      };
    },
    mounted() {
      this.$axios
        .get(`/users-1.json`)
        .then(async (results) => {
          results.data.map((user) => {
            this.$store.users.list.push(user);
          });
          await this.sleep(1000);
          this.loading = false;
        })
        .catch((err) => console.log(err));
    },
    methods: {
      sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      },
    },
  };
</script>

<style lang="sass">
  @import './assets/sass/app.sass'
</style>
