<template>
  <div class="header">
    <div class="header__content">
      <div class="header__content-left">
        <slot name="left"></slot>
      </div>
      <div class="header__content-center">
        <slot></slot>
      </div>
      <div class="header__content-right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>
<style lang="sass" scoped>
  @import '../assets/sass/variables'
  @import '../assets/sass/modules/mixins'
  .header
    +box-shadow(0 0 30px rgba(0,0,0,.2))
    display: block
    background: #FFFFFF
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: $header_height
    display: flex
    align-items: stretch
    z-index: 1



    &__content
      display: flex
      padding-inline: 20px
      width: 100%
      justify-content: space-between
      align-items: center

    &__content-left
      flex: none

    &__content-center

    &__content-right
      flex: none
</style>
