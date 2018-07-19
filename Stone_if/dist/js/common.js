$(function () {

	$(function () {
		//----- OPEN
		$('[data-popup-open]').on('click', function (e) {
			var targeted_popup_class = jQuery(this).attr('data-popup-open');
			$('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
			e.preventDefault();
		});
		//----- CLOSE
		$('[data-popup-close]').on('click', function (e) {
			var targeted_popup_class = jQuery(this).attr('data-popup-close');
			$('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
			e.preventDefault();
		});
	});



	const burger = document.querySelector('.burger');

	function addClassFunOne() {
		this.classList.toggle('clickBurger');
	}

	burger.addEventListener('click', addClassFunOne);
	const menuBurger = document.querySelector('.menuBurger');

	$(function () {
		$('.burger').click(function () {
			$(menuBurger).toggleClass('menuBurger_opened');
		});
		$(menuBurger).click(function (event) {
			if ($(event.target).closest('.burger').length) return;

			$(menuBurger).removeClass('menuBurger_opened');

			$(burger).removeClass('clickBurger');
			event.stopPropagation();

		});
	});






	document.addEventListener('scroll', function () {
		if (window.pageYOffset >= '100%') {
			burger.classList.add('clickBurger');
			menuBurger.classList.add('menuBurger_opened');

		} else {
			burger.classList.remove('clickBurger');
			menuBurger.classList.remove('menuBurger_opened');

		}
	});



	$('.carouselServices').on('initialized.owl.carousel', function () {
		setTimeout(function () {
			carouselServiceFunction()
		}, 100);
	});

	$('.carouselServices').owlCarousel({
		//loop: true,
		touchDrag: false,
		mouseDrag: false,
		nav: false,
		smartSpeed: 700,
		margin: 20,
		//merge:true,
		//center: true,
		//autoWidth:true,
		//navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
		//autoplay: true,
		dots: false,
		autoplayTimeout: 7000,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				//center: true,
				touchDrag: true,
				mouseDrag: true,
				animateOut: 'slideOutDown',
				animateIn: 'flipInX',
				loop: true
			},
			992: {
				items: 3
			}

		}
	});

	function carouselServiceFunction() {
		$('.carouselServices__item').each(function () {
			var ths = $(this);
			var thsh = ths.find('.carouselServices__content').outerHeight();
			ths.find('.carouselServices__itemImage').css('min-height', thsh);
		});
	}
	carouselServiceFunction();

	$('#modal').iziModal({
		//title: ' ',
		appendTo: '.gallery',
		appendToOverlay: '.gallery',
		width: '80%',
		top: 'auto',
		bottom: 'auto',
		borderBottom: false,
		padding: 10,
		overlayColor: 'rgba(114, 114, 114, 0.6)'
		//transitionIn: 'fadeIn'
	});
	$(document).on('click', '.trigger', function (event) {
		event.preventDefault();
		// $('#modal').iziModal('setZindex', 99999);
		// $('#modal').iziModal('open', { zindex: 99999 });
		$('#modal').iziModal('open', this);

	});


});
$(window).on('load', function () {
	$('.frame').delay(1000).fadeOut('slow');
});
