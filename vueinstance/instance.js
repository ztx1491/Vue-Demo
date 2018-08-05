var dataObj = {
    message: 'Hello World!'
};

//Object.freeze(dataObj);

var app = new Vue({
    el: '#app',
    data: dataObj,
    //
    beforeCreate: function() {
        console.log("beforeCreate");
    },
    //实例被创建之后执行代码
    created: function () {
        // `this` 指向 vm 实例
        console.log('message is: ' + this.message)
    },
    //
    beforeMount: function() {
        console.log("beforeMount");
    },
    //
    mounted: function() {
        console.log("mounted");
    },
    //
    beforeUpdate: function() {
        console.log("beforeUpdate");
    },
    //
    updated: function() {
        console.log("updated");
    },
    //
    beforeDestroy: function() {
        console.log("beforeDestroy");
    },
    //
    destroyed: function() {
        console.log("destroyed");
    }
});

//alert(app.$data === dataObj); // => true
//alert(app.$el === document.getElementById('app')); // => true

// $watch 是一个实例方法
app.$watch('message', function (newValue, oldValue) {
    // 这个回调将在 `vm.a` 改变后调用
    console.log("newValue ==> " + newValue);
    console.log("oldValue ==> " + oldValue);
});

//销毁Vue实例
//app.$destroy();