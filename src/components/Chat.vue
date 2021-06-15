<template>
  <div class="wrapper">
    <slot name="body"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<style lang="sass" scoped>
  .wrapper
      margin: auto
      overflow: auto
      height: calc( 100vh - 90px )
      width: 600px
      border-radius: 10px
      background: #EFF0F4
</style>
