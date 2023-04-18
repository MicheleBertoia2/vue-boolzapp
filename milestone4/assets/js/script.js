import contacts from './db.js'
const {createApp} = Vue;
const dt = luxon.DateTime;

createApp({

  data() {

    return{
      contacts,
      activeUser : 0,
      newMsgString : '',
      dateSent : dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS)
    }    
  },

  methods : {
    selectUser(index){
      this.activeUser = index
    },

    sendMessage(){
      const newMsg = {
        date: this.dateSent,
        message: this.newMsgString,
        status: 'sent'
      }
      this.contacts[this.activeUser].messages.push(newMsg)
      this.newMsgString = ''

      setTimeout(() =>{
        const newMsg = {
          date: this.dateSent,
          message: 'ok',
          status: 'received'
        }
        this.contacts[this.activeUser].messages.push(newMsg)
      },1000)
    }
  },

  mounted(){
  }

}).mount('#app')