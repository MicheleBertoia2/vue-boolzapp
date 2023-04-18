import contacts from './db.js'
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
    }    
  },

  methods : {
    selectUser(index){
      this.activeUser = index
      console.log(contacts[index].visible);
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
    },

    filterSearch(){
      this.contacts.forEach(contact => {
        if(contact.name.toLowerCase().includes(this.searchStr.toLowerCase())){
          contact.visible = true;
        } else {
          contact.visible = false;
        }
      });
    }

    
  },

  computed : {
    
  },

  mounted(){    
  }

}).mount('#app')