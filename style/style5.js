
Vue.component('my-component', {
    template: '<p class="foo bar">Hi</p>'
})

var vm = new Vue({
    el: '#app',
    data: {
        message: 'hello world!',
        isActive: true,
        activeClass: 'active',
        errorClass: 'text-danger'
    },
    computed: {
        classObject: function () {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    },
    methods: {
        changeStyle: function () {
            if (this.isActive) {
                this.isActive = false;
            } else {
                this.isActive = true;
            }
        }
    }
});