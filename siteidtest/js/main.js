window.addEventListener('load', function() {
    $("#button").click(function(event) {
    	StreamyAPI.onSubscribe($("#siteId").val());
    });
});

window.addEventListener('streamysubscribeerror', function(e) {
    alert("Subscribe error! " + e.detail.errorMessage);
    $("#subId").text(e.detail.errorMessage);
    console.error(e.detail.errorMessage);
});

window.addEventListener('streamysubscribesuccess', function(e) {
    alert("Subscribe successful! " + e.detail.subscribeMessage);
    $("#subId").text(e.detail.subscribeMessage);
    console.log(e.detail.subscribeMessage);
});