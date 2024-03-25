const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        messaggio: "Messaggio stampato usando Vue"
      }
    }
  }).mount('#app')