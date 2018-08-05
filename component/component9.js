var tabs = [{
    name: "Home",
    component: {
        template: "<div>Home component</div>"
    }
}, {
    name: "Posts",
    component: {
        template: "<div>Posts component</div>"
    }
}, {
    name: "Archive",
    component: {
        template: "<div>Archive component</div>"
    }
}];

var app = new Vue({
    el: '#app',
    data: {
        currentTab: tabs[0],
        tabs: tabs
    }
});