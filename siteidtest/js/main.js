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

$(window).on('onstreamynotificationssubscribeerror', function(e) {
    message.css('color', 'red');
    message.text(e.detail.message);
    console.error("Error: " + e.detail.message);
});

$(window).on('onstreamynotificationssubscribesuccess', function(e) {
    message.css('color', 'green');
    message.text(e.detail.message);
    console.log("Succes: " + e.detail.message);
});