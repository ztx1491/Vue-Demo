var vm = new Vue({
    el: '#app',
    data: {
        message: 'hello world!',
        classObject: {
            active: true,
            'text-danger': false
        }
    },
    methods: {
        changeStyle: function () {
            if (this.classObject.active) {
                this.classObject.active = false;
            } else {
                this.classObject.active = true;
            }
        }
    }
});