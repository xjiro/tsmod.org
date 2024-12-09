const images = [
    '/static/i/20241130000908_1.webp',
    'static/i/20241130173731_1.webp',
    '/static/i/20241130173233_1.webp',
    '/static/i/20241130041554_1.webp',
    'static/i/20241130170716_1.webp',
    'static/i/20241130204538_1.webp',
    'static/i/20241130204424_1.webp',
    '/static/i/20241130170934_1.webp'];
let jumbotron_rotate = function () {
    $('#jumbotron').css('background-image', 'url(' + images[Math.floor(Math.random() * images.length)] + ')');
};
jumbotron_rotate();
setInterval(function () {
    jumbotron_rotate();
}, 3000);