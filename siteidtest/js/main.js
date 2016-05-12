var btnSub = $("#button");
var inputSiteId = $("#siteId");
var message = $("#message");

$(document).ready(function() {
    btnSub.click(function(event) {
    	StreamyAPI.onSubscribe(inputSiteId.val());
    });
    
    inputSiteId.change(function(event) {
    	message.text('');
    });
});

$(window).on('streamysubscribeerror', function(e) {
    alert("Subscribe error! " + e.detail.errorMessage);
    message.text(e.detail.errorMessage);
    console.error(e.detail.errorMessage);
});

$(window).on('streamysubscribesuccess', function(e) {
    alert("Subscribe successful! " + e.detail.subscribeMessage);
    message.text(e.detail.subscribeMessage);
    console.log(e.detail.subscribeMessage);
});

