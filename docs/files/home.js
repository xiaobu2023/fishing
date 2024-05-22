function setAnchors() {
    var cssText = "#weixin-tip{position: fixed; left:0; top:0; background: rgba(0,0,0,0.8); filter:alpha(opacity=80); width: 100%; height:100%; z-index: 100;} #weixin-tip p{text-align: center; margin-top: 10%; padding:0 5%;}";
    var ua = navigator.userAgent.toLowerCase(),
        iphoneos = (ua.match(/iphone os/i) == "iphone os") || (ua.match(/iph os/i) == "iph os") || (ua.match(/ipad/i) == "ipad"),
        android = (ua.match(/android/i) == "android") || (ua.match(/adr/i) == "adr") || (ua.match(/android/i) == "mi pad");
        
	//注册点击事件

	//获取传递的参数
	//var allNumbers = window.location.href.replace(/[^0-9]/g,' ').trim().split(/\s+/);
    //var spraderID = parseInt(allNumbers[allNumbers.length - 1], 10); 
	
	// var allNumbers = window.location.href.split('=')[1];
	// document.getElementById('spreadID').innerText = "SpreaderID:" + allNumbers;
	
	
    if (is_weixin()) {
        loadHtml();
        loadStyleText();
    }

    function getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r !== null) {
            return r[2];
        }
        return null;
    }


    function is_weixin() {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            return true;
        } else {
            return false;
        }
    }

    function loadHtml() {
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios

        var div = document.createElement('div');
        div.id = 'weixin-tip';
        if (isiOS) {
            div.innerHTML = '<p><img src="source/live_weixin_ios.png" style="max-width: 100%; height: auto;"/></p>';
        } else {
            div.innerHTML = '<p><img src="source/live_weixin.png" style="max-width: 100%; height: auto;"/></p>';
        }
        console.log(div)
        document.body.appendChild(div);
    }

    function loadStyleText() {
        var style = document.createElement('style');
        style.rel = 'stylesheet';
        style.type = 'text/css';
        try {
            style.appendChild(document.createTextNode(cssText));
        } catch (e) {
            style.styleSheet.cssText = cssText; //ie9
        }
        var head = document.getElementsByTagName("head")[0]; //head
        head.appendChild(style);
    }

// 	function WebDownLoad(){
// 		var data = OpenInstall.parseUrlParams();
//         new OpenInstall({
//         /*appKey必选参数，openinstall平台为每个应用分配的ID*/
//         appKey : "c4ug4u",
//         /*自定义遮罩的html*/
//         //mask:function(){
//         //  return "<div id='_shadow' style='position:fixed;left:0;top:0;background:rgba(0,255,0,0.5);filter:alpha(opacity=50);width:100%;height:100%;z-index:10000;'></div>"
//         //},
//         /*OpenInstall初始化完成的回调函数，可选*/
//         onready : function() {
//             /*在app已安装的情况尝试拉起app*/
//             this.schemeWakeup();
// 			this.wakeupOrInstall();
//         }
//      }, data);
//    }
//    var downBtn =document.getElementById("down_btn");
//     downBtn.click = function(){
//         alert("====")
//         WebDownLoad();
//         return false;
//     }
	
}

window.addEventListener('DOMContentLoaded', setAnchors, false);