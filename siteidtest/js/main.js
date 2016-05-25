var btnSub = $("#button");
var inputSiteId = $("#siteId");
var message = $("#message");

$(document).ready(function() {
    btnSub.click(function(event) {
        StreamyAPI.subscribeForNotifications(inputSiteId.val());
    });
    
    inputSiteId.on("change paste keyup", function() {
    	message.html("&nbsp;");
    });
});


(function(){
    var rgb = window.getComputedStyle(document.body, null).backgroundColor;
    console.log(rgb);
})();