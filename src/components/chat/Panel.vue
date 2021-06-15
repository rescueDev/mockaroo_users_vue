<template>
  <div class="panel">
    <div class="panel__body-wrapper">
      <div class="panel__body">
        <slot></slot>
      </div>
    </div>
    <div class="panel__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  @import '@/assets/sass/variables'
  @import '@/assets/sass/modules/mixins'

  .panel
    +border-radius($global_border_radius)
    background: #EFF0F4
    width: 100%
    display: flex
    align-items: flex-start
    justify-content: flex-end
    flex-direction: column
    overflow: hidden
    position: relative
    height: 100%

    &__body-wrapper
      padding: 100px 20px 0 20px
      width: 100%
      overflow: auto
      height: 100%
      position: absolute
      left: 0
      bottom: 80px
      display: flex
      align-items: flex-end

    &__body
      position: relative
      height: 100%

    &__footer
      +box-shadow(0 -1px 1px rgba(#666, .1))
      width: 100%
      flex: none
      height: 80px
      padding: 20px

</style>

