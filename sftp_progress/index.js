// function connect() {
//     var socket = new SockJS('/ws'), //根据之前服务端声明的ws入口,建立ws连接
//         stompClient = Stomp.over(socket); //初始化stomp客户端
//     stompClient.connect({}, function (frame) { //建立ws后的业务代码
//         var jobId = Date.now();
//         stompClient.subscribe('/topic/progress/' + jobId, function (msg) { //创建事件监听回调逻辑,收到进度通知后,更新页面
//             console.log('Msg Received: ' + msg);
//             var body = JSON.parse(msg.body);
//             $('#progressModal .progress-bar').width(body.progress + '%');
//             if (body.progress >= 100) {
//                 $('#progressModal').modal('hide');
//             }
//         });
//         stompClient.send("/app/ftp/sftpDownload", {}, jobId); //向服务端发送开始抓取的请求
//     });
// }

var vm = new Vue({
    el: '#app',
    data: {
        progress: 0
    },
    methods: {
        sftpDownload: function() {

            var socket = new SockJS('http://localhost:8080/ws'), //根据之前服务端声明的ws入口,建立ws连接
            stompClient = Stomp.over(socket); //初始化stomp客户端
            stompClient.connect({}, function (frame) { //建立ws后的业务代码
                var jobId = Date.now();
                stompClient.subscribe('/topic/progress/' + jobId, function (msg) { //创建事件监听回调逻辑,收到进度通知后,更新页面
                    //console.log("1111111111111111111111111111");
                    console.log('Msg Received: ' + msg);
                    var body = JSON.parse(msg.body);
                    console.log("body ==> " + body)
                    //$('#progressModal .progress-bar').width(body.progress + '%');
                    vm.progress = (body.current/body.total)*100;
                    if (body.progress >= 100) {
                        //$('#progressModal').modal('hide');
                    }
                });
                stompClient.send("/app/ftp/sftpDownload", {}, jobId); //向服务端发送开始抓取的请求
            });
        }
    }
});
