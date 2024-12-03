$.get('https://fastdl.tsmod.org/ts/models/player', function (data) {
    var models = data.match(/<a href="([^"]+\/)">/g).map(function (match) {
        return match.match(/<a href="([^"]+\/)">/)[1];
    });

    models = models.map(function (model) {
        return model.slice(0, -1);
    });

    models = models.filter(function (model) {
        return model !== '..' && model !== '.';
    });


    models.sort();

    const ul = $('#models');

    models.forEach(function (name) {
        const li = $('<li></li>');
        ul.append(li);
        li.append('<a>' + name + '</a>');
    });
});