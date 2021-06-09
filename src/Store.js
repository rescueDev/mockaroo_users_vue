const Store = {
  debug: true,
  navigation: {
    items: [
      {
        link: "/",
        label: "Home",
      },
      {
        link: "/users",
        label: "Users",
      },
      {
        link: "/users/create",
        label: "New",
      },
    ],
  },
  users: {
    list: [],
    methods: {},
  },
};

export default Store;
