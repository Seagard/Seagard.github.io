function movement(id) {
		$(document).mousemove(function(event) {
			var div = document.getElementById (id);
			var rect = div.getBoundingClientRect ();
			//rect.top = rect.top + $('#' + id).scrollTop();
			var top = $('#' + id).offset().top;
			var left = $('#' + id).offset().left;
			var right = left + 188;
			var bottom = top + 188;

    if(event.pageX > right-62) { 
 	$('#' + id).attr("src", "photos/" + id + "r.jpg");
 	}
 	
 	if(event.pageX < left+62) {
 	$('#' + id).attr("src", "photos/" + id + "l.jpg");
	}
	if(event.pageX >= left+62 && event.pageX <= right-62 && event.pageY >= top+62 && event.pageY <= bottom-62) {
		$('#' + id).attr("src", "photos/" + id + ".jpg");
	}

	if(event.pageY < top+62) {
 	$('#' + id).attr("src", "photos/" + id + "up.jpg");
	}

	if(event.pageY > bottom-62) {
 	$('#' + id).attr("src", "photos/" + id + "down.jpg");
	}

	if(event.pageY < top+62 && event.pageX > right-62) {
 	$('#' + id).attr("src", "photos/" + id + "ur.jpg");
	}

	if(event.pageY < top+62 && event.pageX < left+62) {
 	$('#' + id).attr("src", "photos/" + id + "ul.jpg");
	}

	if(event.pageY > bottom-62 && event.pageX < left+62) {
 	$('#' + id).attr("src", "photos/" + id + "ll.jpg");
	}

	if(event.pageY > bottom-62 && event.pageX > right-62) {
 	$('#' + id).attr("src", "photos/" + id + "lr.jpg");
	}
	});
}