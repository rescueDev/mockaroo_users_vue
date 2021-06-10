<template>
  <nav class="navigation" :class="{ 'navigation--mini': mini }">
    <ul class="navigation__list">
      <li
        class="navigation__list-item"
        v-for="(item, index) in items"
        :key="index"
        :title="item.label"
      >
        <router-link
          class="navigation__link"
          :to="item.link"
          :title="item.label"
          >{{ item.label }}</router-link
        >
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "Navigation",
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
<style lang="sass" scoped>

@import '../assets/sass/variables'

.navigation
  width: 100%
  font-size: 20px
  display: flex
  align-items: center
  justify-content: center

  &--mini
    font-size: 14px

  &__list
    display: flex
    margin: 0
    padding: 0


    &-item
      margin-right: 14px

  &__link
    color: #2c3e50
    text-decoration: none
    &.router-link-exact-active
      color: $color
</style>
