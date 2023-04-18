import contacts from './db.js'
const {createApp} = Vue;

createApp({

  data() {

    return{
      contacts,
      activeUser : 0,
      newMsgString : '',
    }    
  },

  methods : {
    selectUser(index){
      this.activeUser = index
    },

    sendMessage(){
      const newMsg = {
        date: '10/01/2020 15:30:55',
        message: this.newMsgString,
        status: 'sent'
      }
      this.contacts[this.activeUser].messages.push(newMsg)
      this.newMsgString = ''
    }
  },

  mounted(){
  }

}).mount('#app')