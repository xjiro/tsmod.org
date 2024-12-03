$(function () {
    $('*[data-datetime]').each(function () {
        const date = new Date($(this).data('datetime') * 1000);
        const datevalues = [
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
        ];
        $(this).text(new Date(...datevalues).toLocaleString());
    });

    $('*[data-timeago]').each(function () {
        const date = new Date($(this).data('timeago') * 1000);
        $(this).text(moment(date).fromNow());
    });

    const page = $('main').data('page');
    $('#nav a').each(function () {
        if ($(this).text().toLowerCase() === page) {
            $(this).addClass('active');
        }
    });
});