$.get('https://fastdl.tsmod.org/ts/maps', function (data) {
    const maps = data.match(/<a href="([^"]+\.bsp)">/g).map(function (match) {
        return match.match(/<a href="([^"]+\.bsp)">/)[1];
    });

    maps.sort();

    const ul = $('#maps');

    maps.forEach(function (map) {
        const li = $('<li></li>');
        ul.append(li);

        const name = map.replace(/\.bsp$/, '');
        li.append('<a href="/map/#' + name + '">' + name + '</a>');
    });
});