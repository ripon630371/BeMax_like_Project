(function ($) {

	//slider-area owl-carousel...
	$('.slider-active').owlCarousel({
	    loop:true,
	    nav:true,
	    autoplay:true,
	    navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
	    autoplayTimeout:3000,
	    smartSpeed:2000,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});
	//skillbar section plagins....
	$('.skillbar').skillBars({
	  // options here
	});

	//project-area owl-carousel...
	$('.project-active').owlCarousel({
	    loop:true,
	    nav:true,
	    autoplay:true,
	    navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
	    autoplayTimeout:3000,
	    smartSpeed:2000,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:4
	        }
	    }
	});
	//project-area owl-carousel...
	$('.blog-active').owlCarousel({
	    loop:true,
	    nav:true,
	    autoplay:true,
	    navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
	    autoplayTimeout:3000,
	    smartSpeed:2000,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});
	//project-area owl-carousel...
	$('.brand-active').owlCarousel({
	    loop:true,
	    nav:false,
	    autoplay:true,
	    navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
	    autoplayTimeout:4000,
	    smartSpeed:2000,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:5
	        }
	    }
	});
	// magnificPopup
    $('.popup-video').magnificPopup({
        type: 'iframe'
        // other options
    });

})(jQuery);	