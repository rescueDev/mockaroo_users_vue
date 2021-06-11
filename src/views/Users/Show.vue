<template>
  <div>
    <Card v-if="user" :data="user"></Card>
    <!-- v else component not found or 404 -->
  </div>
</template>

<script>
  import Card from "@/components/Card.vue";
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
    },
    computed: {
      user() {
        return (
          this.$store.users.list
            .filter((user) => {
              return user.id == this.$route.params.id;
            })
            .pop() || null
        );
      },
    },
  };
</script>

<style lang="sass" scoped></style>
