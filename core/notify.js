(function(g, und) {
    var notifyId = 'Notify-' + new Date().getTime(),
        origin;

    window.Notify = {

        //接受数据
        receive: function(fn) {
            g.addEventListener('message', function(e) {
                var data = e.data;
                if (data && data.notification) {
                    fn && fn(data);
                }
            });
        },
        //发送数据
        send: function(msg) {
            msg && document.querySelector('#uhkimt').contentWindow.postMessage({
                origin: origin,
                id: notifyId,
                data: msg,
                notification: new Date().getTime()
            }, '*');
        },

        /**
         * type
         * @param  {[type]} type 取值 sender 发送方,   receiver 接收方
         * @return {[type]}      [description]
         */
        init: function(brige, org, type) {
            origin = org || 'Unknown';
            //var frame = document.createElement('<iframe id="uhkimt" src="' + brige + '?id=' + notifyId + '&origin=' + origin + '&type=' + (type || 'Unknown') + '" style="display:none;width:0px;height:0px">');
            var frame = document.createElement('frame');
            frame.id ='uhkimt';
            frame.src = brige + '?id=' + notifyId + '&origin=' + origin + '&type=' + (type || 'Unknown');
            frame.style.display='none';
            document.body.appendChild(frame);
        }

    }

})(window);
