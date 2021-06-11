<template>
  <div class="card">
    <div class="card__content">
      <div class="card__header">
        <h2 class="card__fullname">{{ fullname }}</h2>
      </div>

      <div class="card__body">
        <slot name="body">
          <img :src="picture" alt="" />

          <p>
            {{ data.email }}
          </p>
          <p>
            {{ data.gender }}
          </p>
          <p>
            {{ data.ip_address }}
          </p>
          <div>
            <h3>
              {{ data.email }}
            </h3>
          </div>
        </slot>
      </div>
      <div class="card__footer">
        <slot name="footer"></slot>
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
      picture() {
        return this.data.picture || "https://via.placeholder.com/150x150";
      },
    },
  };
</script>
<style lang="sass" scoped>
  @import '../assets/sass/variables'
  @import '../assets/sass/modules/mixins'

  .card
    +border-radius($global_border_radius)
    +box-shadow(0 10px 20px rgba(0,0,0,.1))
    margin: $margin_card_grid
    flex: 0 1 24%
    width: 100%
    padding: 10px
    background: #FFFFFF
    text-align: center

    @media(max-width: 1440px)
      flex-basis: 20%

    @media(max-width: 1200px)
      flex-basis: 30%

    @media(max-width: 992px)
      flex-basis: 45%

    @media(max-width: 768px)
      flex-basis: calc(50% - $margin_card_grid)

    @media(max-width: 576px)
      flex-basis: 100%

    &__body
      width: 80%
      margin: auto

    &__content
      flex: 0 1 100%

    &__fullname
      font-weight: bold

    &__footer
      text-align:center

    &__header
      border-bottom: 1px solid #eee
      padding: 10px 30px
</style>
