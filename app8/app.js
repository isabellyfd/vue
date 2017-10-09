Vue.component('menu-item', {
    props: ['menu', 'func'],
    template: '<li style="list-style-type: none; padding: 20px;">{{ menu.title }}</li>'
})

Vue.component('details-screen', {
    props: ['detail'], 
    template: '<div> <h1>{{ detail.title }}</h1><br/><p>{{ detail.details }}</p> </div>'
})

var app = new Vue({
    el: '#app', 
    data: {
        menulist: [
            {id: 0, title: 'First!', details: "first uashduahsduashduashda adhuashd uash"},
            {id: 1, title: 'Second!', details: "second uashduahsduashduashda adhuashd uash"},
            {id: 2, title: 'Third!', details: "third uashduahsduashduashda adhuashd uash"}
        ],
        isSelected: false 
    },
    methods: {
        firstDetails : function() {
            return this.menulist[0];
        }
    }
})