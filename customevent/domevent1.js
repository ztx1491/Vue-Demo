Vue.component('base-input', {
    inheritAttrs: false,
    props: ['label', 'value'],
    template: `
        <input
            v-bind="$attrs"
            v-bind:value="value"
            v-on:input="$emit('input', $event.target.value)"
        >
    `
});

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello',
        message1: 'Hello'
    },
    methods: {
        onFocus: function(event) {
            alert(event.target.value);
        }
    }
});