function send(dir) {
    $.ajax({
        url: '/' + dir,
    });
}

var keys = {
    87: 'forward',
    83: 'backward',
    65: 'left',
    68: 'right',
    38: 'up',
    40: 'down',
}

$(document).ready(function () {
    $(document).on('keyup', function (e) {
        if (e.keyCode in keys) {
            var cmd = keys[e.keyCode];
            $('#history').html('<p>' + cmd + '</p>' + $('#history').html());
            send(cmd);
        }
    });
});