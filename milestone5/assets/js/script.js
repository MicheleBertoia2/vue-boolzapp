import contacts from './db.js'
import answers from './answers.js';
const {createApp} = Vue;
const dt = luxon.DateTime;

createApp({

  data() {

    return{
      contacts,
      activeUser : 0,
      newMsgString : '',
      dateSent : dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
      searchStr : '',
      isSelected : false,
      answers,
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
          message: this.answers[this.rndNmbr(0,this.answers.length -1)],
          status: 'received'
        }
        this.contacts[this.activeUser].messages.push(newMsg)
      },1000)
    },

    filterSearch(){
      this.contacts.forEach(contact => {
        if(contact.name.toLowerCase().includes(this.searchStr.toLowerCase())){
          contact.visible = true;
        } else {
          contact.visible = false;
        }
      });
    },

    deleteMsg(ind){
      // console.log(this.contacts[this.activeUser].messages[ind]);
      this.contacts[this.activeUser].messages.splice(ind,1)
      this.isSelected = false
    },

    rndNmbr(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    }

    
  },

  computed : {
    
  },

  mounted(){    
  }

}).mount('#app')