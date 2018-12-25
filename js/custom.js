function reformContainer(id) {
	var newContainer = `#${id}-content`;
	$(".body-content").hide();
	$(newContainer).show();
}

function initiateGallery() {
	
}

$(document).ready(function() {
	$(".body-content:not(:first)").hide();

	$("#slideshow > div:gt(0)").hide();

	setInterval(function() {
	  $('#slideshow > div:first')
	    .fadeOut(1000)
	    .next()
	    .fadeIn(1000)
	    .end()
	    .appendTo('#slideshow');
	}, 5000);
});