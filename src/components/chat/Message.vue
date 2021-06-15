<template>

  <div class="message">
    <div class="message__body" v-html="message"></div>
    <div class="message__footer">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    message:{
      type: String,
      default: ""
    }
  },
}
</script>

<style lang="sass" scoped>
  @import '@/assets/sass/variables'
  @import '@/assets/sass/modules/mixins'

  .message
    margin-top: 30px
    &__body
      +border-radius(24px)
      background: #FFFFFF
      width: 100%
      padding: 12px 24px

    &__footer
      width: 100%
</style>
