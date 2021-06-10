<template>
  <div class="grid--container">
    <slot name="cards"></slot>
  </div>
</template>

<style lang="sass" scoped>
  .grid--container
      display: flex
      width: 100%
      justify-content: space-around
      flex-wrap: wrap
      flex-basis: auto
</style>
