var btnSub = $("#button");
var inputSiteId = $("#siteId");
var message = $("#message");

$(document).ready(function() {
    btnSub.click(function(event) {
    	StreamyAPI.onSubscribe(inputSiteId.val());
    });
    
    inputSiteId.on("change paste keyup", function() {
    	message.text('');
    });
});

$(window).on('streamysubscribeerror', function(e) {
    message.text("Error: " + e.detail.errorMessage);
    console.error("Error: " + e.detail.errorMessage);
});

$(window).on('streamysubscribesuccess', function(e) {
    message.text("Succes: " + e.detail.subscribeMessage);
    console.log("Succes: " + e.detail.subscribeMessage);
});

