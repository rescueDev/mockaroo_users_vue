<template>
  <div>
    <Chat v-chat-scroll>
      <template #body>
        <Message
          :message="message.text"
          :sender="message.sender"
          v-for="message in messages"
          :key="message.id"
          ref="message"
        >
          {{ message.text }}

          <template #footer>
            <Author :author="message.author" :avatar="message.picture"></Author>
          </template>
        </Message>
      </template>

      <template #footer>
        <div class="input-group">
          <input
            class="input-group__input"
            v-model="inputMessage"
            type="text"
            name="message"
            id="message"
            placeholder="Type Message"
            @keyup.enter="sendMessage"
          />
        </div>
      </template>
    </Chat>
  </div>
</template>

<script>
  import Chat from "@/components/Chat";
  import Message from "@/components/Message";
  import Author from "@/components/Author";
  export default {
    components: {
      Chat,
      Message,
      Author,
    },
    data() {
      return {
        messages: [
          {
            text:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere doloribus facilis qui atque animi, quae voluptatem labore neque sed dolores eaque reprehenderit, expedita voluptatum consectetur et, quis quibusdam! Vitae, modi.",
            author: "Giovanni",
            id: Date.now() + Math.random(),
            picture:
              "https://robohash.org/voluptatumidnatus.png?size=150x150&set=set1",
            sender: false,
          },
          {
            text:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere doloribus facilis qui atque animi, quae voluptatem labore neque sed dolores eaque reprehenderit.",
            author: "Alberto",
            id: Date.now() + Math.random(),
            picture:
              "https://robohash.org/ullamnullavelit.png?size=150x150&set=set1",
            sender: false,
          },
          {
            text:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere doloribus facilis qui atque animi, quae voluptatem labore neque sed dolores eaque reprehenderit.",
            author: "Carla",
            id: Date.now() + Math.random(),
            picture:
              "https://robohash.org/eamagnieos.png?size=150x150&set=set1",
            sender: false,
          },
        ],
        inputMessage: "",
      };
    },
    methods: {
      sendMessage() {
        if (this.inputMessage !== "") {
          this.messages.push({
            text: this.inputMessage,
            author: "me",
            id: Date.now() + Math.random(),
            picture:
              "https://robohash.org/molestiasnecessitatibuslibero.png?size=150x150&set=set1",
            sender: true,
          });
          this.inputMessage = "";
        }
      },
    },
    computed: {},
  };
</script>

<style lang="sass" scoped>


  .input-group
    position: sticky
    bottom: 0
    display: flex
    padding: 10px
    justify-content: center
    left: 0
    height: 60px
    background: #F1F2F6
    width: 100%

    &__input
      width: 80%
      padding: 10px
      border-radius: 20px
      border: none
      background: white

      &:focus
        outline-style: none
</style>
