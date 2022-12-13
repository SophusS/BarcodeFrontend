const baseurl = "localhost/BarcodeBackend"

Vue.createApp({
    data() {
      return {
        message: 'Hello Vue!',
        shoppingCarts: []
      }
    },
    methods:{
      async getShoppingCarts(){
        url = baseurl + "/ShoppingCarts"
        try{
          const response = await axios.get(url)
          this.shoppingCarts = await response.data
        }
        catch(ex){
          console.log(ex.message)
        }
      }
    }
}).mount('#app')