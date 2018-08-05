Vue.component('blog-post', {
    props: ['post'],
    beforeCreate: function () {
        console.log("---beforeCreate---")
    },
    created: function () {
        console.log("---created----")
    },
    template: '<div>\
                    <h3>{{ post.title }}</h3>\
                    <div v-html="post.content"></div>\
                </div >'
});

var app = new Vue({
    el: '#app',
    data: {
        posts: [
            { id: 0, title: '蔬菜',content: '蔬菜是什么？' },
            { id: 1, title: '奶酪', content: '奶酪是什么？' },
            { id: 2, title: '随便其它什么人吃的东西', content: '怎么了？' }
        ]
    }
});