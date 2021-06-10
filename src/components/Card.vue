<template>
  <div class="card">
    <div class="card__content">
      <div class="card__header">
        <h2 class="card__fullname">{{ fullname }}</h2>
      </div>

      <div class="card__body">
        <slot name="card_body">
          <div v-if="isShow">
            <img :src="data.picture" alt="" />
            <h3>
              {{ data.email }}
            </h3>
            <h3>
              {{ data.gender }}
            </h3>
            <h3>
              {{ data.ip_address }}
            </h3>
          </div>
          <div v-else>
            <h3>
              {{ data.email }}
            </h3>
          </div>
        </slot>
      </div>
      <div class="card__footer">
        <slot name="card_footer"></slot>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      data: {
        type: Object,
        default: function() {
          return {};
        },
      },
    },
    mounted() {
      console.log(this.data);
    },
    computed: {
      fullname() {
        return `${this.data.first_name} ${this.data.last_name}`;
      },
      isShow() {
        return this.$route.name === "UserShow";
      },
    },
  };
</script>
<style lang="sass" scoped>
  @import '../assets/sass/variables'
  @import '../assets/sass/modules/mixins'

  .card
    // +border-radius($global_border_radius)
    +box-shadow(0 10px 20px rgba(0,0,0,.1))
    margin: 20px 10px
    padding:10px
    background: #FFFFFF

    -ms-flex: auto
    width: 259px
    text-align: center

    @media(max-width: 1333px)
      flex-basis: 33.33%

    @media(max-width: 1073px)
        flex-basis: 33.33%

    @media(max-width: 815px)
        flex-basis: 50%

    @media(max-width: 555px)
        flex-basis: 100%

    &__fullname
      font-weight: bold

    &__footer
      text-align:center

    &__header
      border-bottom: 1px solid #eee
      padding: 10px 30px

    &__body
      padding: 10px 30px
</style>
