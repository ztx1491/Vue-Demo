
var vm = new Vue({
    el: '#app',
    data: {
        ok: true,
        type: 'A',
        loginType: 'username'
    },
    methods: {
        changeValue: function () {
            if (this.ok) {
                this.ok = false;
            } else {
                this.ok = true;
            }
        },
        toggleLoginType: function () {
            if (this.loginType === 'username') {
                this.loginType = 'email';
            } else {
                this.loginType = 'username';
            }
        },
        toggleLoginType2: function () {
            if (this.loginType === 'username') {
                this.loginType = 'email';
            } else {
                this.loginType = 'username';
            }
        }
    }
});