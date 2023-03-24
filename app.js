( function($) {

	function carousel() {
		var index = 0;
		var slides = $('#carousel > .carousel-item');
		slides.eq(index).addClass('active');

		var navigation = function(a) {
			slides.removeClass('active');
			switch ( a ) {
				case 'next': index++;
					if ( index >= slides.length ) {
						index = index % slides.length;
					}
					break;
				case 'prev': index--;
					if ( index < 0 ) {
						index = slides.length - 1;
					}
					break;
			}
			slides.eq(index).addClass('active');
		}

		$(document).on('click', '.carousel-control', function(e) {
			e.preventDefault();
			var action = '';
			switch ( $(this).attr('data-carousel') ) {
				case 'next': action = 'next'; break;
				case 'prev': action = 'prev';	break;
			}
			navigation(action);
		});

		$(document).on('keydown', function(e) {
			var action = '';
			switch ( e.keyCode.toString() ) {
				case '37': action = 'next'; break;
				case '39': action = 'prev';	break;
			}
			navigation(action);
		});
	}

	$(document).on('click', '.navbar-toggle', function(e) {
		// aria expanded
		if( $(this).attr('aria-expanded') === 'true' ) {
			$('.navbar-toggle').attr('aria-expanded', 'false');
			// modal menu
			$('.modal').remove();
		} else {
			$('.navbar-toggle').attr('aria-expanded', 'true');
			// modal menu
			$('.page').append('<div class="modal"><nav class="navbar"></nav></div>');
			$('.modal .navbar').append($(this).clone().addClass('active'));
			$('.modal .navbar').append($('#menu').clone());
		}
	});

	//CAROUSEL
	carousel();

})(jQuery);