function send(dir) {
    $.ajax({
        url: '/' + dir,
    });
}

var keys = {
    87: 'front',
    83: 'back',
    65: 'left',
    68: 'right',
    38: 'up',
    40: 'down',
    81: 'turnleft',
    69: 'turnright',
    84: 'takeoff',
    76: 'land',
}

$(document).ready(function () {
    $(document).on('keyup', function (e) {
        if (e.keyCode in keys) {
            var cmd = keys[e.keyCode];
            $('#history').html('<p>' + cmd + '</p>' + $('#history').html());
            send(cmd);
            
            return false;
        }
    });
});