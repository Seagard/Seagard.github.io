$(document).ready(function () {

    $('#invoke_sidebar').click(function() {
        var $sidebar = $('#sidebar_popup');
        var $windowHeight = $(window).height();

        $sidebar.height($windowHeight); 

        $sidebar.css('display', 'block');

        $(window).on('resize', function (){
            var $windowHeight = $(window).height();
            $sidebar.height($windowHeight); 
        });

    });
    
    $('#closepng').click(function() {
         $("#sidebar_popup").css("display", "none");
    });
});    
