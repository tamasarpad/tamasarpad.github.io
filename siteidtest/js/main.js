var btnSub = $("#button");
var inputSiteId = $("#siteId");
var message = $("#message");

$(document).ready(function() {
    btnSub.click(function(event) {
        StreamyAPI.subscribeForNotifications(inputSiteId.val());
    });
    
    inputSiteId.on("change paste keyup", function() {
    	message.text(&nbsp;);
    });
});

$(window).on('onstreamynotificationssubscribeerror', function(e) {
    message.text("Error: " + e.detail.message);
    console.error("Error: " + e.detail.message);
});

$(window).on('onstreamynotificationssubscribesuccess', function(e) {
    message.text("Succes: " + e.detail.message);
    console.log("Succes: " + e.detail.message);
});