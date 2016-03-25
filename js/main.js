var isInt = function(value) {
    var x;
    if (isNaN(value)) {
        return false;
    }
    x = parseFloat(value);
    return (x | 0) === x;
};

window.addEventListener('load', function() {
    var button = $('#button');
    var siteId = $('#siteId');
    button.click(function () {
        if(isInt(siteId)){
            StreamyAPI.onSubscribe(siteId.val());
        } else {
            alert("Give a valid number")
        }
    });
    var myEvent = new CustomEvent("userLogin",{detail:{username:"davidwalsh"}});
});

window.addEventListener('streamysubscribeerror', function(e) {
    alert("Subscribe error! " + e.detail.errorMessage);
});

window.addEventListener('streamysubscribesucces', function(e) {
    alert("Subscribe successful! Subscribe Id " + e.detail.subscriptionId);
});