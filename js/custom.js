function reformContainer(id) {
	var newContainer = `#${id}-content`;

	if($(`${newContainer} :not(.hidden)`)) {
		$(".body-content").hide();
		$(newContainer).show();
	}
}

function initiateGallery() {

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