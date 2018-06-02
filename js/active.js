$(document).ready(function(){

	//slider-area owl-carousel...
	$('.active-slider').owlCarousel({
	    loop:true,
	    nav:true,
	    autoplay:true,
	    autoplayTimeout:4000,
	    smartSpeed:1000,
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
	})

})