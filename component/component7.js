Vue.component('alert-box', {
    template: '\
        <div class="demo-alert-box">\
            <strong>Error!</strong>\
            <slot></slot>\
        </div>\
    '
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