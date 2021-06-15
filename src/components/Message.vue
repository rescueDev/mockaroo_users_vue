<template>
  <div :class="[sender ? 'message--reverse' : 'message']">
    <div class="message__box">
      <div class="message__box__text">
        <slot></slot>
      </div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      //send or received mode
      mode: {
        type: Boolean,
        default: false,
      },
      message: {
        type: String,
        default: "",
      },
      sender: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>

<style lang="sass" scoped>
  @import '../assets/sass/variables'
  @import '../assets/sass/modules/mixins'
  .message
    display: flex
    flex-direction: row
    justify-content: flex-start
    padding: 8px

    &--reverse
      display: flex
      text-align: right
      justify-content: flex-end

    &__box
      width: 400px
      text-align: left

      &__text
        background: #F5F5F5
        +box-shadow(0 10px 20px rgba(0,0,0,.1))
        border-radius: 10px
        padding: 8px
        margin: 8px 10px
</style>
