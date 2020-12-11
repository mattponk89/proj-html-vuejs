Vue.config.devtools = true

const app = new Vue({
  el: '#root',
  data: {
    menu:["Home", "About", "Services", "Journal", "Contact"],
    chatActive: false
  },
  methods: {
    toggleChat: function () {
      this.chatActive = !this.chatActive
    }
  }
})
