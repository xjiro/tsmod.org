const images = ['/static/i/1.webp', '/static/i/2.webp', '/static/i/3.webp', 'static/i/4.webp', '/static/i/5.webp'];
let jumbotron_rotate = function () {
    $('#jumbotron').css('background-image', 'url(' + images[Math.floor(Math.random() * images.length)] + ')');
};
jumbotron_rotate();
setInterval(function () {
    jumbotron_rotate();
}, 3000);