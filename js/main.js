/**
 * Created by OPM-285 on 2016. 03. 10..
 */
if ('serviceWorker' in navigator) {
    console.log('Service Worker is supported');
    navigator.serviceWorker.register('js/sw.js').then(function(reg) {
        console.log(':^)', reg);
        // TODO
    }).catch(function(err) {
        console.log(':^(', err);
    });
}