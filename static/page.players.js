$.get('https://ts.esix.io/players.json', function (data) {
    const players = data;
    const ul = $('#players');
    players.forEach(function (player) {
        const li = $('<li></li>');
        ul.append(li);
        li.append('<a href="'+ player.u + '">' + '<img src="'+player.a+'">' + player.n + '</a>');
    });
});