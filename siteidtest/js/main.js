window.addEventListener('load', function() {
    var button = $("#button");
    var siteId = $("#siteId");
    button.click(function(event) {
    	StreamyAPI.onSubscribe(siteId.value);
    });
});

window.addEventListener('streamysubscribeerror', function(e) {
    alert("Subscribe error! " + e.detail.errorMessage);
    console.error(e.detail.errorMessage);
});

window.addEventListener('streamysubscribesuccess', function(e) {
    alert("Subscribe successful! " + e.detail.subscribeMessage);
    $("#subId").text(e.detail.subscribeMessage);
    console.log(e.detail.subscribeMessage);
});