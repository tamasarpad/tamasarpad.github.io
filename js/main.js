window.addEventListener('load', function() {
    var button = document.getElementById("button");
    var siteId = document.getElementById("siteId");
    button.onclick = function () {
        StreamyAPI.onSubscribe(siteId.value);
    };
});

window.addEventListener('streamysubscribeerror', function(e) {
    alert("Subscribe error! " + e.detail.errorMessage);
});

window.addEventListener('streamysubscribesuccess', function(e) {
    alert("Subscribe successful! " + e.detail.subscribeMessage);
});