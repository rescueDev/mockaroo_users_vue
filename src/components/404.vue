<template>
  <div class="notfound">
    <div class="notfound__title">
      <h2>
        Sorry it's a 404!
        <br />
        Not found
      </h2>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="sass" scoped>
  @import '../assets/sass/variables'
  @import '../assets/sass/modules/typography.sass'


  .notfound
    height: 600px
    width: 100%
    display: flex
    justify-content: center
    align-items: center
    text-align: center


    &__title
      color: slategray
      font-size: 33px
      font-weight: bolder
</style>
