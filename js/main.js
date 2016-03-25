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
    button.click(function () {
        if(isInt(siteId.value)){
            StreamyAPI.onSubscribe(siteId.value);
        } else {
            alert("Give a valid number")
        }
    });
    var event = new CustomEvent("asd");
    event.detail = "asd";
    console.log(event);
    var double_tap = new CustomEvent("doubleTap", {
        detail: {
            hello: 'world'
        },
        bubbles: true,
        cancelable: true
    });
    console.log(double_tap);
});

window.addEventListener('streamysubscribeerror', function(e) {
    console.log(e);
    alert("Subscribe error! " + e.detail.errorMessage);
});

window.addEventListener('streamysubscribesucces', function(e) {
    console.log(e);
    alert("Subscribe successful! Subscribe Id " + e.detail.subscriptionId);
});