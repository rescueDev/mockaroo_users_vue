<template>
  <div class="application">
    <Navigation :items="$store.navigation.items"></Navigation>
    <Navigation :mini="mini" :items="$store.navigation.items"></Navigation>
    <div>
      <!-- <transition name="fade" mode="out-in"> -->
      <div v-if="loading">
        carica
      </div>
      <router-view v-else :key="$route.path" />
      <!-- </transition> -->
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
export default {
  name: "App",
  components: {
    Navigation,
  },
  data() {
    return {
      loading: true,
      mini: false,
    };
  },
  mounted() {
    this.$axios
      .get(`/users.json`)
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
