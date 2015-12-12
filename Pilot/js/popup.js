$(document).ready(function() {
    
    $("#call").click(function() {
        var left = ($(window).width() - 372)/2;
        var top = ($(window).height() - $('#popup').innerHeight())/2;

       $("#popup").css({"top": top, "left": left, "display": "block"});
       $("#dark_overlay").css("display", "block");
    });      

    $('#close').click(function() {
    	$("#dark_overlay").css("display", "none");
    	 $("#popup").css("display", "none");
    });
});