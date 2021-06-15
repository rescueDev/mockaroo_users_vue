<template>
  <div class="author" :class="{'author--reverse': reverse}">
    <div class="popup-overlay" v-if="popUpIs"></div>
    <div class="author__avatar" :style="avatar" @click="popUpIs = !popUpIs">
      <div class="popup" v-if="popUpIs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
    </div>
    <div class="author__name">{{name}}</div>
  </div>
</template>
<script>
export default {
  props: {
    name:{
      type: String,
      default: ""
    },
    image:{
      type: String,
      default: ""
    },
    reverse:{
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      popUpIs: false
    }
  },
  computed:{
    avatar(){
      return {
        'background-image': `url(${this.image})`
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  @import '@/assets/sass/variables'
  @import '@/assets/sass/modules/mixins'

  .popup
    +transform(translateX(-50%) translateY(-100%))
    +border-radius(14px)
    +box-shadow(0 0 30px rgba(#000000, .2))
    z-index: 100
    padding: 20px
    background: #ffffff
    position: absolute
    top: -10px
    left: 150%
    width: 140px

    .author--reverse &
      left: -50%

  .author
    // position: relative
    margin-top: 4px
    display: flex
    align-items: center
    justify-content: flex-start

    &--reverse
      flex-direction: row-reverse
      justify-content: flex-start

    &__name
      width: 100%
      text-align: left

      margin-left: 10px
      .author--reverse &
        text-align: right
        margin-right: 10px

    &__avatar
      +border-radius(40px)
      position: relative
      cursor: pointer
      flex: none
      width: 40px
      height: 40px
      background-repeat: no-repeat
      background-size: cover
      z-index: 10

</style>
