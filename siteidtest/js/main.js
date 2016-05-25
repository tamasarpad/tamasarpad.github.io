var btnSub = $("#button");
var inputSiteId = $("#siteId");
var message = $("#message");

$(document).ready(function() {
    btnSub.click(function(event) {
        StreamyAPI.subscribeForNotifications(inputSiteId.val());
    });
    
    inputSiteId.on("change paste keyup", function() {
    	message.html("&nbsp;");
    });
});

$(window).on('onstreamynotificationssubscribeerror', function(e) {
  //  message.css('color', 'red');
    
    // if (typeof e !== 'undefined' && e.detail && e.detail.message) {
    //     message.text(e.detail.message);    
    //     console.error("Error: " + e.detail.message);
    // } else {
    //     str = JSON.stringify(e, null, 4)
    //     message.text(str);    
    //     console.error("Error: " + str);
        
    // }
    console.error('error');
});

$(window).on('onstreamynotificationssubscribesuccess', function(e) {
    console.log('success');
    // message.css('color', 'green');
    // message.text(e.detail.message);
    
    // if (typeof e !== 'undefined' && e.detail && e.detail.message) {
    //     message.text(e.detail.message);    
    //     console.log("Success: " + e.detail.message);
    // } else {
    //     str = JSON.stringify(e, null, 4)
    //     message.text(str);    
    //     console.error("Success: " + str);  
//    }  
});

(function(){
    var rgb = window.getComputedStyle(document.body, null).backgroundColor;
    console.log(rgb+ 'asdasd');
})();