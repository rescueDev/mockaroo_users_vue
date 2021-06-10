<template>
  <div class="card">
    <div class="card__content">
      <div class="card__header">
        <h2 class="card__fullname">{{ fullname }}</h2>
      </div>

      <div class="card__body">
        <p>
          {{ data }}
        </p>
      </div>
      <div class="card__footer">
        <slot></slot>
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
  computed: {
    fullname() {
      return `${this.data.first_name} ${this.data.last_name}`;
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
  background: #FFFFFF

  &__header
    border-bottom: 1px solid #eee
    padding: 10px 30px

  &__body
    padding: 10px 30px
</style>
