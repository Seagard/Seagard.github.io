$(document).ready(function () {
   $('.carousel').carousel();

    var $item = $('.carousel .item');
    var $windowHeight = $(window).height();

    $item.height($windowHeight); 
    $item.addClass('full-screen');

    var top = ($windowHeight - 347)/2;
    $('.carousel img').each(function() {
        var $src = $(this).attr('src');
        var $color = $(this).attr('data-color');

        $(this).parent().css({
            'background-image' : 'url(' + $src + ')',
            'background-color' : $color
        });
        $(this).remove();
    });

    $(window).on('resize', function (){
        var $windowHeight = $(window).height();
        $item.height($windowHeight); 
    });

    if ($('#first').hasClass('active')) {
        $(this).css('background-color', 'red');
    }

});    

