Vue.component('custom-input', {
    props: ['value'],
    beforeCreate: function () {
        console.log("---beforeCreate---")
    },
    created: function () {
        console.log("---created----")
    },
    template: '<input v-bind:value="value" v-on:input="$emit(\'input\', $event.target.value)"></input>'
});

var app = new Vue({
    el: '#app',
    data: {
        searchText: ''
    },
    methods: {
        onEnlargeText: function(enlargeAmount) {
            //this.postFontSize += enlargeAmount;
        }
    }
});