Vue.component('button-counter',{
    data: function() {
        return {
            count: 0
        }
    },
    beforeCreate: function() {
        console.log("---beforeCreate---")
    },
    created: function() {
        console.log("---created----")
    },
    template: '<button @click="count++">You clicked me {{count}} times.</button>'
});

var app = new Vue({
    el: '#app',
    data: {
        groceryList: [
            {id: 0, text: '蔬菜'},
            {id: 1, text: '奶酪'},
            {id: 2, text: '随便其它什么人吃的东西'}
        ]
    }
});