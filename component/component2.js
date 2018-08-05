Vue.component('blog-post',{
    props: ['title'],
    beforeCreate: function() {
        console.log("---beforeCreate---")
    },
    created: function() {
        console.log("---created----")
    },
    template: '<h3>{{title}}</h3>'
});

var app = new Vue({
    el: '#app',
    data: {
        posts: [
            {id: 0, title: '蔬菜'},
            {id: 1, title: '奶酪'},
            {id: 2, title: '随便其它什么人吃的东西'}
        ]
    }
});