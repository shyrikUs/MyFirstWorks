jQuery(document).ready(function () {
	jQuery('.navigation').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeInDown',
		offset: 0
	});
	jQuery('.mainBanner').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeInDown',
		offset: 300
	});
	jQuery('.dancer').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeInDown',
		offset: 300
	});

	jQuery('.who-we-are').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeInLeft',
		offset: 300
	});

		jQuery('.services h3').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeInUp',
		offset: 300
	});
	jQuery('.services h2').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeInUp',
		offset: 300
	});
		jQuery('.services .service-item').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeInUp',
		offset: 300
	});

		jQuery('.profile').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated slideInLeft',
		offset: 300
	});
	
		jQuery('.client-info').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeIn',
		offset: 300
	});
		jQuery('.client-logo').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeIn',
		offset: 300
	});

	jQuery('.blog-info').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated zoomIn',
		offset: 300
	});
	
	jQuery('.blog-2, .blog-3, .blog-4, .blog-5, .blog-6').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated pulse',
		offset: 300
	});



	jQuery('footer').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated slideInUp',
		offset: 300
	});
});
