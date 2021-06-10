const Store = {
  debug: true,
  navigation: {
    header: [
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
    footer: [
      {
        link: "/",
        label: "Privacy Policy",
      },
      {
        link: "/",
        label: "Coockie Policy",
      },
      {
        link: "/",
        label: "Contact",
      },
    ],
  },
  users: {
    list: [],
    methods: {},
  },
};

export default Store;
