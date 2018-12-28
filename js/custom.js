function reformContainer(id) {
	var newContainer = `#${id}-content`;

	if($(`${newContainer} :not(.hidden)`)) {
		$(".body-content").hide();
		$(newContainer).show();
	}
}

function initiateGallery() {
	//make book come up
	$("#gallery-book").show();
	loadFlipbook();
}

$(document).ready(function() {
	$(".body-content:not(:first)").hide();

	var index = 1;
	const SLIDESHOW_LENGTH = 4;

	setInterval(function() {
		var to_fade = `#slideshow-${String(index)}`;
		$(to_fade).fadeOut(800, function() {
			if(index == SLIDESHOW_LENGTH) {
				index = 1;
			}
			else {
				index++;
			}

			to_fade = `#slideshow-${String(index)}`;

			$(to_fade).fadeIn(800);

		});
	}, 7000);
});

function loadFlipbook() {

	// Create the flipbook

	$('.flipbook').turn({
			// Width

			width:922,
			
			// Height

			height:600,

			// Elevation

			elevation: 50,

			display: 'single',
			
			// Enable gradients

			gradients: true,
			
			// Auto center this flipbook

			autoCenter: true

	});

	$(window).width(function(){
  		var win = $(this); //this = window
  		var width = win.width();
  		var height = win.height();

  		$('.flipbook').turn('size', $(".container").width(), $(".container").height());
	});
	$(window).resize(function(){
  		var win = $(this); //this = window
  		var width = win.width();
  		var height = win.height();

  		$('.flipbook').turn('size', $(".container").width(), $(".container").height());
  	});

}