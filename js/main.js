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
        if(isInt(siteId.val())){
            StreamyAPI.onSubscribe(siteId.val());
        } else {
            alert("Give a valid number")
        }
    });
});

window.addEventListener('streamysubscribeerror', function(e) {
    console.log(e);
    alert("Subscribe error! " + e.detail.errorMessage);
});

window.addEventListener('streamysubscribesucces', function(e) {
    console.log(e);
    alert("Subscribe successful! Subscribe Id " + e.detail.subscriptionId);
});