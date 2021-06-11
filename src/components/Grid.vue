<template>
  <div class="grid grid--container">
    <slot></slot>
  </div>
</template>

<style lang="sass" scoped>
  .grid--container
      display: flex
      width: 100%
      justify-content: space-between
      flex-wrap: wrap
</style>
