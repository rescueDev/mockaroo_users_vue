<template>
  <div class="author" :class="[author === 'me' ? 'author--reverse' : 'author']">
    <div class="author__box">
      <img
        @click="togglePopUp"
        class="author__avatar"
        :src="avatar"
        alt="avatar"
      />
      <p class="author__name">{{ author }}</p>
    </div>
    <transition name="fade">
      <div
        class="author__popup"
        :class="[author === 'me' ? 'author__popup--reverse' : 'author__popup']"
        v-if="togglePop"
      >
        Widget component
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    props: {
      author: {
        type: String,
        required: true,
      },
      avatar: {
        type: String,
        default: "",
      },
      reverse: {
        type: Boolean,
        default: true,
      },
    },
    data() {
      return {
        togglePop: false,
      };
    },
    methods: {
      togglePopUp() {
        this.togglePop = !this.togglePop;
      },
    },
  };
</script>

<style lang="sass" scoped>

  .author
    $self: &
    display: flex
    justify-content: flex-start
    width: 100%
    align-items: center
    text-align: left
    padding: 8px
    position: relative

    &--reverse
      display: flex
      justify-content: flex-end
      width: 100%
      align-items: center
      text-align: right
      padding: 8px
      position: relative

      //da migliorare

      #{$self}__box
        text-align: right
        display: flex
        flex-direction: row-reverse
        align-items: center

    &__box
      display: flex
      flex-direction: row
      text-align: left
      align-items: center

    &__avatar
      width: 22%
      border-radius: 50%
      cursor: pointer

    &__name
      font-size: 12px

    &__popup
      background: white
      justify-content: space-around
      border: none
      border-radius: 8px
      width: 50%
      display: flex
      align-items: center
      position: absolute
      top: 10%
      left: 30%


      &--reverse
        display: flex
        justify-content: space-around
        background: white
        width: 50%
        align-items: center
        text-align: left
        position: absolute
        left: 30%
        top: 10%
</style>
