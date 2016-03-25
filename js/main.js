var isInt = function(value) {
    var x;
    if (isNaN(value)) {
        return false;
    }
    x = parseFloat(value);
    return (x | 0) === x;
};

window.addEventListener('load', function() {
    var button = document.getElementById("button");
    var siteId = document.getElementById("siteId");
    button.onclick = function () {
        if(isInt(siteId.value)){
            StreamyAPI.onSubscribe(siteId.value);
        } else {
            alert("Give a valid number")
        }
    };
});

window.addEventListener('streamysubscribeerror', function(e) {
    alert("Subscribe error! " + e.detail.errorMessage);
});

window.addEventListener('streamysubscribesuccess', function(e) {
    alert("Subscribe successful! Subscribe Id: " + e.detail.subscriptionId);
});