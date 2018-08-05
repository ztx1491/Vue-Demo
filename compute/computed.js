var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello'
    },
    /* computed: {
        // 计算属性的 getter
        reversedMessage: function () {
            //`this` 指向 vm 实例
            return this.message.split('').reverse().join('');
        }
    }, */
    // 在组件中
    methods: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('')
        }
    }
});

//console.log(app.reversedMessage) // => 'olleH'
//app.message = 'Goodbye'
//console.log(app.reversedMessage) // => 'eybdooG'