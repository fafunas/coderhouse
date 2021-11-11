var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      a : 10,
      b : 15

    },
    methods:{
        alert(){
            alert(this.message)
        },
        suma(){
            alert(this.a+this.b)
        }
    }
  })