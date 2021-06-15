<template>
  <div class="ui">
    <div class="base">
      <div class="ui-panel">
        <Panel>
          <Message
            :message="message.text"
            v-for="(message, index) in messages"
            :key="index">
            <Author
              :name="message.author.name"
              :image="message.author.image"
              :reverse="message.type == 'sent'"></Author>
            </Message>
          <template #footer>
            <input @keydown="onEnter" placeholder="Inserisci il tuo messaggio..." class="input-text" type="text">
          </template>
        </Panel>
      </div>
    </div>
  </div>
</template>

<script>
import Author from "@/components/chat/Author";
import Panel from "@/components/chat/Panel";
import Message from "@/components/chat/Message";
  export default {
    components: {
      Panel,
      Author,
      Message
    },
    data() {
      return {
        messages:[
          {
            type: "received",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            author:{
              name: "Content Bot",
              image: "https://i.pravatar.cc/500"
            }
          },

          {
            type: "sent",
            text: "Maxime minima",
            author:{
              name: "Julia",
              image: "https://i.pravatar.cc/400"
            }
          },
          {
            type: "received",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            author:{
              name: "Content Bot",
              image: "https://i.pravatar.cc/500"
            }
          },
          {
            type: "sent",
            text: "Maxime minima",
            author:{
              name: "Julia",
              image: "https://i.pravatar.cc/400"
            }
          },
          {
            type: "sent",
            text: "Maxime minima soluta ipsa dolor cum quis adipisci voluptatum",
            author:{
              name: "Julia",
              image: "https://i.pravatar.cc/400"
            }
          }
        ]
      };
    },
    methods: {
      onEnter(e){
        if(e.code == "Enter"){
          let r = Math.random();
          let isSender = r > 0.5;
          this.messages.push({
              type: isSender ? "sent" : "received",
              text: e.target.value,
              author:{
                name: isSender ? "Julia" : "Content Bot",
                image: "https://i.pravatar.cc/500"
              }
            })
          e.target.value = ''
        }
      }
    },
  };
</script>

<style lang="sass" scoped>
  @import '@/assets/sass/variables'
  @import '@/assets/sass/modules/mixins'

  .base
    box-sizing: border-box
    background: #DADEE7
    width: 100%
    min-height: calc(100vh - 90px)
    display: flex
    align-items: stretch
    justify-content: center
    padding: 30px

  .ui-panel
    width: 100%
    max-width: 400px

  .input-text, .input-text:focus
    +border-radius($global_border_radius)
    +placeholder(#BBBBBB)
    width: 100%
    display: block
    outline: none
    height: 38px
    border: 0
    padding: 5px 12px
    font-size: 14px
    color: #404857
    background: #FFFFFF

</style>
