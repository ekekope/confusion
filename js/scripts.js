$(document).ready(function() {
    $('#my-carousel').carousel({ interval: 2000 });

    $('#carousel-button').click(function() {
        if($('#carousel-button').children('span').hasClass('fa-pause')) {
            $('#my-carousel').carousel('pause');
            $('#carousel-button').children('span').removeClass('fa-pause');
            $('#carousel-button').children('span').addClass('fa-play');
        }
        else {
            $('#my-carousel').carousel('cycle');
            $('#carousel-button').children('span').removeClass('fa-play');
            $('#carousel-button').children('span').addClass('fa-pause');
        }
    });

    $('#login').click(function() {
        $('#login-modal').modal('show');
    });

    $('#reservation').click(function() {
        $('#reservation-modal').modal('show');
    });

    $('.login-modal-dismiss').click(function() {
        $('#login-modal').modal('hide');
    });

    $('.reservation-modal-dismiss').click(function() {
        $('#reservation-modal').modal('hide');
    });
});