
$(window).load(function () {
        $('.scroller').jScrollPane({
            horizontalDragMinWidth: 350,
            horizontalDragMaxWidth: 350,
            autoReinitialise: true
        });

});
/*
        setInterval(
        function()
        {
            var pane = $('.scroller').jScrollPane().data('jsp')
            pane.reinitialise();
        },
        1000
    );
       // setInterval(refreshNav(), 1000);
        

});
/*
function refreshNav() {
    
    
}*/
