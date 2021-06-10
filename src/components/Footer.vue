<template>
  <div class="footer">
    <div class="footer__content">
      <div class="footer__content-left">
        <slot name="left"></slot>
      </div>
      <div class="footer__content-center">
        <slot></slot>
      </div>
      <div class="footer__content-right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>
<style lang="sass" scoped>
@import '../assets/sass/variables'
@import '../assets/sass/modules/mixins'
.footer
  display: block
  background: #FFFFFF
  position: relative
  width: 100%
  display: flex
  align-items: stretch
  padding-block: 20px

  &__content
    display: flex
    padding-inline: 20px
    width: 100%
    justify-content: space-between
    align-items: center

  &__content-left
    flex: none

  &__content-center
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column

  &__content-right
    flex: none
</style>
