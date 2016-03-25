window.addEventListener('load', function() {
    var button = document.querySelector('.button');
    button.addEventListener('click', function () {
        StreamyAPI.onSubscribe("1234567890");
    });
});

window.addEventListener('streamysubscribeerror', function() {
    prompt("Subscribe error! Check console for more information.");
});

window.addEventListener('streamysubscribesucces', function() {
    prompt("Subscribe successful! Subscribe Id " + window.subscriptionId);
});