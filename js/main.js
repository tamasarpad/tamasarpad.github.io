if ('serviceWorker' in navigator) {
    console.log('Service Worker is supported');
    navigator.serviceWorker.register('sw.js')
        .then(initialiseState)
        .catch(function (err) {
            console.log('Error: ', err);
        });
}

// Once the service worker is registered set the initial state
function initialiseState(reg) {
    console.log('Registration success: ', reg);

    // Are Notifications supported in the service worker?
    if ('showNotification' in ServiceWorkerRegistration.prototype) {
        console.log('Notifications are supported.');
    } else {
        console.warn('Notifications aren\'t supported.');
    }

    // Check the current Notification permission.
    // If its denied, it's a permanent block until the user changes the permission
    if (Notification.permission === 'denied') {
        console.warn('The user has blocked notifications.');
    }

    // Check if push messaging is supported
    if ('PushManager' in window) {
        console.log('Push messaging is supported.');
    } else {
        console.warn('Push messaging isn\'t supported.');
    }
}


navigator.sayswho= (function(){
    var ua= navigator.userAgent, tem,
        M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
})();