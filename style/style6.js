
Vue.component('my-component', {
    template: '<p class="foo bar">Hi</p>'
})

var vm = new Vue({
    el: '#app',
    data: {
        message: 'hello world!',
        isActive: true,
        activeClass: 'active',
        errorClass: 'text-danger',
        activeColor: 'red',
        fontSize: 30,
        styleObject: {
            color: 'red',
            fontSize: '13px'
        },
        baseStyles: {
            color: 'red',
            fontSize: '13px'
        },
        overridingStyles: {
            
        }
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