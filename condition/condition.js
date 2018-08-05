var app = new Vue({
    el: "#app",
    data: {
        seen: true
    },
    methods: {
        changeValue1: function() {
            console.log("chageValue");
            alert(this.seen);
            this.seen = false;
        }
    }
});