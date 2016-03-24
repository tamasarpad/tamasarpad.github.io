window.addEventListener('load', function() {
    var button = document.querySelector('.button');
    button.addEventListener('click', function () {
        StreamyAPI.onSubscribe("1234567890");
    });
});
