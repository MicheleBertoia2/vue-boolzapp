import contacts from './db.js'
const {createApp} = Vue;

createApp({

  data() {

    return{
      contacts
    }    
  },

  mounted(){
    console.log(contacts);
  }

}).mount('#app')