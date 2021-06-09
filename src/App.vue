<template>
  <div class="application">
    <Navigation :items="$store.navigation.items"></Navigation>
    <Navigation :mini="mini" :items="$store.navigation.items"></Navigation>
    <div>
      <div v-if="loading">
        carica
      </div>
      <router-view v-else :key="$route.path" />
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
      .then((results) => {
        results.data.map((user) => {
          this.$store.users.list.push(user);
        });
        this.loading = false;
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
