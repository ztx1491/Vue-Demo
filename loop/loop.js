var app = new Vue({
    el: "#app",
    data: {
        todos: [
            {text: "Java"},
            {text: "JavaScript"},
            {text: "Html"}
        ]
    }
});
app.todos.push({text: "VBScript"});