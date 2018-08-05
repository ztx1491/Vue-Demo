
var vm = new Vue({
    el: '#app',
    data: {
        message: '',
        message2: '',
        checked: false,
        checkedNames: [],
        picked: '',
        selected: '',
        selected2: [],
        selected3: 'A',
        options: [
            {text: 'A', value: 'A'},
            {text: 'B', value: 'B'},
            {text: 'C', value: 'C'}
        ],
        toggle: '',
        pick: '',
        a: 'hhh',
        selected4: '',
        msg: '',
        age: '',
        msg2: ''
    },
    methods: {
        pickRadio: function() {
            alert(vm.a);
            alert(vm.pick);
            alert(vm.pick === vm.a);
        }
    }
});