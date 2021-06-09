<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"> Home</router-link>
      <router-link to="/users"> Users </router-link>
      <router-link to="/users/create"> New</router-link>
    </div>
    <router-view :key="$route.path" />
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$axios
        .get(
          `https://my.api.mockaroo.com/users.json?key=${process.env.VUE_APP_MOCK_PASS}`
        )
        .then((results) => {
          results.data.map((item) => {
            this.$store.users.list.push(item);
          });
        })
        .catch((err) => console.log(err));
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
