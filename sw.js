console.log('Service worker started', self);
self.addEventListener('install', function(event) {
    self.skipWaiting();
    console.log('Service worker installed', event);
});
self.addEventListener('activate', function(event) {
    console.log('Service worker activated', event);
});
self.addEventListener('push', function(event) {
    console.log('Push message received', event);
    // TODO
});