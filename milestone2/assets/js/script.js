import contacts from './db.js'
const {createApp} = Vue;

createApp({

  data() {

    return{
      contacts,
      activeUser : null,
    }    
  },

  methods : {
    selectUser(index){
      this.activeUser = index
    }
  },

  mounted(){
    console.log(contacts);
  }

}).mount('#app')