import contacts from './db.js'
const {createApp} = Vue;

createApp({

  data() {

    return{
      contacts,
      activeUser : 0,
    }    
  },

  methods : {
    selectUser(index){
      this.activeUser = index
    }
  },

  mounted(){
  }

}).mount('#app')