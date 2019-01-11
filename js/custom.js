var BOOK_LOADED = false;

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
	window.history.pushState(null, null, 'gallery');
	if (!BOOK_LOADED) {
		loadFlipbook();
	}
}

$(document).ready(function() {
	$(".body-content:not(:first)").hide();

	var index = 1;
	const SLIDESHOW_LENGTH = $("#slideshow > .image-container").length;

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

	BOOK_LOADED = true;
	var BOOK_EXPANDED = false;

	// Create the flipbook

	var display_type = "single";
	if ($(window).width() > 1200) {
		display_type = "double";
		BOOK_EXPANDED = true;
	}

	$('.flipbook').turn({
			// Width

			width:$(".container").width(),
			
			// Height

			height:$(".container").height(),

			// Elevation

			elevation: 50,

			display: display_type,
			
			// Enable gradients

			gradients: true,
			
			// Auto center this flipbook

			autoCenter: true

	});

	if ($(window).width()) {
  		var win = $(this); //this = window
  		var width = win.width();
  		var height = win.height();

  		if (width > 1200) {
  			$('.flipbook').turn('display', 'double');
  			$('.flipbook').turn('size', 2*$(".container").width(), $(".container").height());
  			var to_move = $(".container").width()/2;
			$('.flipbook').animate({
				'left' : `-=${to_move}` //moves left
			});

			BOOK_EXPANDED = true;
  		}
  		else {
  			$('.flipbook').turn('display', 'single');
  			$('.flipbook').turn('size', $(".container").width(), $(".container").height());
  		}
	}

	$(window).resize(function(){
  		var win = $(this); //this = window
  		var width = win.width();
  		var height = win.height();
  		var to_move = $(".container").width()/2;

  		if (width > 1200) {
  			$('.flipbook').turn('size', 2*$(".container").width(), $(".container").height());
  			if (BOOK_EXPANDED === false) {
  				$('.flipbook').turn('display', 'double');
				$('.flipbook').animate({
					'left' : `-=${to_move}` //moves left
				});
				BOOK_EXPANDED = true;
			}
  		}
  		else {
  			$('.flipbook').turn('size', $(".container").width(), $(".container").height());
  			if (BOOK_EXPANDED === true){
  				$('.flipbook').turn('display', 'single');
  				$('.flipbook').animate({
					'left' : `0` //moves left
				});
				BOOK_EXPANDED = false;
  			}
  		}
  	});

	window.addEventListener('popstate', function(e) {
  		var character = e.state;

  		if (character == null) {
			$("#gallery-book").hide();
  		} 
	});
}