$.get('https://xji.ro/ts/', function (data) {
    console.log(data);
    var table = $(data).find('#servers');
    // remove thead from table
    table.find('thead').remove();
    console.log(table); 
    $('#servers').append(table);
});
