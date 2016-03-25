window.addEventListener('load', function() {
    var button = $('#button');
    var siteId = $('#siteId');
    button.addEventListener('click', function () {
        StreamyAPI.onSubscribe(siteId.val());
    });
});

window.addEventListener('streamysubscribeerror', function() {
    alert("Subscribe error! Check console for more information.");
});

window.addEventListener('streamysubscribesucces', function() {
    alert("Subscribe successful! Subscribe Id " + window.subscriptionId);
});