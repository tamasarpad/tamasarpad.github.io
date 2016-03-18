console.log('Service Worker :: started', self);
self.addEventListener('install', function(event) {
    self.skipWaiting();
    console.log('Service worker :: installed', event);
});
self.addEventListener('activate', function(event) {
    console.log('Service worker :: activated', event);
});
self.addEventListener('push', function(event) {
    console.log('Received a push message', event);

    var title = 'Yay a message.';
    var body = 'We have received a push message.';
    var icon = '/images/icon-192x192.png';
    var tag = 'simple-push-demo-notification-tag';

    event.waitUntil(
        self.registration.showNotification(title, {
            body: body,
            icon: icon,
            tag: tag
        })
    );
});