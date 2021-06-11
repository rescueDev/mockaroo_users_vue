<template>
  <div>
    <Card v-if="user" :data="user"></Card>
    <!-- v else component not found or 404 -->
    <NotFound v-else></NotFound>
  </div>
</template>

<script>
  import Card from "@/components/Card.vue";
  import NotFound from "@/components/404.vue";
  export default {
    props: {
      data: {
        type: Object,
        default: function() {
          return {};
        },
      },
    },
    data() {
      return {};
    },
    components: {
      Card,
      NotFound,
    },
    computed: {
      user() {
        return this.$store.users.list
          .filter((user) => {
            return user.id == this.$route.params.id;
          })
          .pop();
      },
    },
  };
</script>

<style lang="sass" scoped></style>
