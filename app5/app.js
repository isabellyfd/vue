var app5 =  new Vue({
    el: '#app-5', 
    data: {
        message: "Hi testing vue - app 5!"
    }, 
    methods :{
        reverseMessage: function() {
            this.message = this.message.split(' ').reverse().join(' ')
        }
    }
})