<template>
  <div>
    <Card :data="user"></Card>
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
      return {
        user: {},
      };
    },
    components: {
      Card,
    },
    mounted() {
      this.$axios
        .get(`/users-1.json`)
        .then((users) => {
          const userToShow = users.data.find((user) => {
            return user.id == this.$route.params.id;
          });
          this.user = userToShow;
        })
        .catch((err) => console.log(err));
    },
  };
</script>

<style lang="sass" scoped></style>
