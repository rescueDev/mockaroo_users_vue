<template>
  <nav class="navigation" :class="{ 'navigation--mini': mini }">
    <ul>
      <li v-for="(item, index) in items" :key="index" :title="item.label">
        <router-link :to="item.link" :title="item.label">{{
          item.label
        }}</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default: function() {
        return [];
      },
    },
    mini: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style scoped>
.navigation {
  font-size: 20px;
}
.navigation ul {
  display: flex;
  list-style: none;
}

.navigation.navigation--mini {
  font-size: 14px;
}

a.router-link-exact-active {
  color: #42b983;
}
a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
