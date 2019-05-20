import $ from "jquery";
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "selectize/dist/js/selectize.min.js";
import Swiper from "swiper/dist/js/swiper.js";
import timer from "./timer.js"
import "./main-sliders.js";
// import "./team.js";
// import "./timeline.js";
// import "./tovar.js";
// import "./range.js";
import "./tabs.js";
// import "./lc.js";
// import mobileMenu from "./mobile-menu.js";
import Sticky from "./x-widgets.js";

window.$ = $;
window.jQuery = $;

const WOW = require("wowjs").WOW;

require("./countTo.js");
require("./jquery.fancybox.js");
require("../css/jquery.fancybox.css");



function injector(t, splitter, klass, after) {
		var a = t.text().split(splitter), inject = '';
		if (a.length) {
			$(a).each(function(i, item) {



					// if($('div').hasClass('line')){
						inject += '<div class="'+klass+'" \
						><span style="transition: all .1s ease '+(0.06 * i)+'s;">'+item+'</span></div>'+after;
					// } else {
					// 	inject += '<div class="'+klass+(i+1)+' line">'+item+'</div>'+after;

					// }






						// let deleayCounter = a.length - i;
				// inject += '<span class="'+klass+(i+1)+'" \
				// style="transition-delay: '+(0.12 * deleayCounter)+'s; transform: translate3d('+(0.30 * i)+'%, 0, 0);">'+item+'</span>'+after;

			});
			t.empty().append(inject);
		}
	}

	var methods = {
		init : function() {

			return this.each(function() {
				injector($(this), '', 'char', '');
			});

		},

		words : function() {

			return this.each(function() {
				injector($(this), '', 'word', '');
			});

		},

		lines : function() {

			return this.each(function() {
				var r = "eefec303079ad17405c889e092e105b0";
				// Because it's hard to split a <br/> tag consistently across browsers,
				// (*ahem* IE *ahem*), we replaces all <br/> instances with an md5 hash
				// (of the word "split").  If you're trying to use this plugin on that
				// md5 hash string, it will fail because you're being ridiculous.
				injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
			});

		}
	};

	$.fn.lettering = function( method ) {
		// Method calling logic
		if ( method && methods[method] ) {
			return methods[ method ].apply( this, [].slice.call( arguments, 1 ));
		} else if ( method === 'letters' || ! method ) {
			return methods.init.apply( this, [].slice.call( arguments, 0 ) ); // always pass an array
		}
		$.error( 'Method ' +  method + ' does not exist on jQuery.lettering' );
		return this;
	};




	window.animate = function(){
		new WOW({
			boxClass:     'wow:not(.catalog__item)',      // default
			animateClass: 'animated', // default
			offset:       50,          // default
			mobile:       true,       // default
			live:         false        // default
		}).init();
	}

document.addEventListener("DOMContentLoaded", e => {

	$('.text-page iframe').wrap('<div class="iframe"></div>');
	
	$('.page-project .text-page > *').each(function(i,el){
		let $this = $(el);
		$this.addClass('wow')
	})



	animate();

	// if($(window).width() > 1000){
	// 	new WOW({
	// 		boxClass:     'project__cont',      // default
	// 		animateClass: 'animated', // default
	// 		offset:       70,          // default
	// 		mobile:       true,       // default
	// 		live:         false        // default
	// 	}).init();
		
	// }


	$(window).on("load scroll touchmove", function(){
		if ($(window).scrollTop() > 5){
			$(".project-top").addClass('js__visible');
		}else{
			$(".project-top").removeClass('js__visible');
		}

	});

	$('.nav li').each(function(){
		let $this = $(this);

		$this.find('ul').closest('li').addClass('js__has-submenu');
	})



	if($(window).width() > 1000){

		$("body").click(function(e){
			if (!$(e.target).is($(".main-nav"))
				&& !$(".main-nav").has(e.target).length
				&& $("body").hasClass("mobile-menu--open")
				&& !$(e.target).is($(".burger"))
				&& !$(".burger").has(e.target).length){
					$("body").removeClass("mobile-menu--open")
			}
		});

	}

	$('.main-nav__item').each((i,el) => {
		var $this = $(el);

		$this.css({
			"transition-delay": ""+(0.2 * i)+"s",
		})
	})





	$('.scroll').on('click', function() {

		var $this = $(this);

		$('html, body').animate({
			scrollTop: $this.closest('.about-top').next('div').offset().top },
			700);

	});



	if($('body').hasClass('loading'))
		setTimeout(function(){
			$('body').removeClass('loading')
		},500)


	$('body').removeClass('animation-delay')




	//animate main banner
	$(".main-banner__title").lettering('lines');
	$(".main-banner__title .line").lettering();

	//animate slider main-services
	// $(".main-services__info-title").lettering('lines');
	// $(".main-services__info-title .line > span ").lettering();
	// $(".main-services__info-title").lettering();


	if ($(".history-num__item div").length){
		$(".history-num__item div").countTo();
	}




	// if($('body .main-banner__img').find('video').length){
	// 	var $video = $('video');

	// 	if(!$video.length){
	// 		return
	// 	}

	// 	if($video.attr('src')){
	// 		$video[0].play();
	// 		} else {
	// 			var dataSrc = $video.attr('data-src');
	// 			$video.attr('src', dataSrc);

	// 			$video[0].addEventListener('loadedmetadata', () => {
	// 				$video[0].play();
	// 			})
	// 		}


	// 	var videoEl = document.getElementsByTagName('video')[0];


	// 	setTimeout(function(){
	// 		videoEl.play();
	// 	}, 100);
	// }

	// videoEl.play();
	
	$(window).on('scroll', function(){
		if ($(".history-num__item div").length)
			if ($(".history-num__item div").offset().top + 50 <=
				$(window).scrollTop() + $(window).height()){
					$(".history-num__item div:not(.countered)").each((i, el) => {
						let $this = $(el),
							speed = 0;

						switch (i){
							case 0:
								speed = 4000;
							break;
							case 1:
								speed = 2000;
							break;

							default:
								speed = 3000;
						}

						$this.countTo({
							speed: speed,
						});

						$this.addClass("countered");
					});
			}

	})


	let swiper = new Swiper(".main-services .swiper-container", {
		// effect: "fade",
		slidesPerView: 1,
		speed: 600,
		loop: true,
		roundLengths: true,
		autoHeight: true,
		// spaceBetween: 100,
		slidesOffsetAfter: 10,
		breakpoints: {
		    660: {
		      slidesPerView: 1,
		      spaceBetween: 0,
		      autoHeight: true,
		    }
		},
		pagination: {
			el: ".swiper-pagination",
			type: "fraction",
			clickable: true,
			renderFraction: function (currentClass, totalClass) {
			    return '<div class="' + currentClass + '"></div>' +
			            '<div class="line"></div> ' +
			            '<div class="' + totalClass + '"></div>';
			}
		},
		navigation: {
	        nextEl: '.main-services .swiper-button-next',
	        prevEl: '.main-services .swiper-button-prev',
	    },

	    on: {
			slideNextTransitionStart(){

				$('.main-services').removeClass('js__color-black js__color--green js__color--orange js__color--blue js__color--red');
				$('.main-services').find('.swiper-slide').removeClass('js__active');

				if($('.swiper-slide').hasClass('swiper-slide-active') && $(window).width() > 1050) {

	    			$('.swiper-slide-active').find('.green, .orange').closest('.main-services').addClass('js__color-black');
	    			$('.swiper-slide-active').find('.green').closest('.main-services').addClass('js__color--green');
	    			$('.swiper-slide-active').find('.orange').closest('.main-services').addClass('js__color--orange');
	    			$('.swiper-slide-active').find('.blue').closest('.main-services').addClass('js__color--blue');
	    			$('.swiper-slide-active').find('.red').closest('.main-services').addClass('js__color--red');

					setTimeout(function(){
						$('.main-services').find('.swiper-slide-active').addClass('js__active');
				    }, 1000)
				}


			},
			slidePrevTransitionStart(){
				$('.main-services').find('.swiper-slide').removeClass('js__active');
				$('.main-services').removeClass('js__color-black js__color--green js__color--orange js__color--blue js__color--red');

				if($('.swiper-slide').hasClass('swiper-slide-active') && $(window).width() > 1050) {

	    			$('.swiper-slide-active').find('.green, .orange').closest('.main-services').addClass('js__color-black');
	    			$('.swiper-slide-active').find('.green').closest('.main-services').addClass('js__color--green');
	    			$('.swiper-slide-active').find('.orange').closest('.main-services').addClass('js__color--orange');
	    			$('.swiper-slide-active').find('.blue').closest('.main-services').addClass('js__color--blue');
	    			$('.swiper-slide-active').find('.red').closest('.main-services').addClass('js__color--red');

	    			setTimeout(function(){
						$('.main-services').find('.swiper-slide-active').addClass('js__active');
				    }, 1000)
				}
			},
	    	reachEnd(){
	    		$('.main-our-work__slider').addClass('js__end-slide-visible')
	    	},
	    	sliderMove(){

	    	}


		},



	});













	let swiperOurWwork = new Swiper(".main-our-work .swiper-container", {
		// effect: "fade",
		slidesPerView: 3,
		// loop: true,
		a11y: false,
		roundLengths: true,
		spaceBetween: 100,
		breakpoints: {
		    // when window width is <= 640px
		    1600: {
		      spaceBetween: 50,
		    },
		    1440: {
		      spaceBetween: 25,
		    },
		    1200: {
		      spaceBetween: 20,
		    },
		    660: {
		      slidesPerView: 1,
		      spaceBetween: 0,
		    }
		},
		navigation: {
	        nextEl: '.main-our-work .swiper-button-next',
	        prevEl: '.main-our-work .swiper-button-prev',
	      },
	     scrollbar: {
	        el: '.swiper-scrollbar',
	        // hide: false,
	        draggable: true,
	      },
	      on: {
			slideNextTransitionStart(){
	    		$('.swiper-container').removeClass('1')

			},
	    	reachEnd(){
	    		$('.main-our-work__slider').addClass('js__end-slide-visible')
	    	},
	    	sliderMove(){

	    	}

		}
	});

	swiperOurWwork.on('transitionStart', function () {
		// console.log(swiperOurWwork.isEnd)
		if (swiperOurWwork.isEnd) {
		   $('.main-our-work__slider').addClass("js__end-slide-visible");
		} else {
			$('.main-our-work__slider').removeClass("js__end-slide-visible");
		}

	})

	$('.main-our-work .swiper-button-prev').click(_ => {
		$('.main-our-work__slider').removeClass('js__end-slide-visible');
	})

	let swiperClients = new Swiper(".clients__list .swiper-container", {
		// effect: "fade",
		slidesPerView: 5,
		loop: true,
		a11y: false,
		roundLengths: true,
		spaceBetween: 40,
		breakpoints: {

		    1440: {
		      spaceBetween: 20,
		      slidesPerView: 4,

		    },
		    1200: {
		      slidesPerView: 3,
		      spaceBetween: 20,
		    },
		    660: {
		      slidesPerView: 1,
		      spaceBetween: 0,
		    }
		},
		navigation: {
	        nextEl: '.clients__arrow .swiper-button-next',
	        prevEl: '.clients__arrow .swiper-button-prev',
	        hideOnClick: true,
	      },

	     // scrollbar: {
	     //    el: '.swiper-scrollbar',
	     //    // hide: false,
	     //    draggable: true,
	     //  },
	});




	let swiperPortfolio, delay = 3000;

	const makeCanvasBullet = bullet => {
		return new timer({
			$el: $(bullet),
			el: bullet,
			settings: {
				time: delay + 160,
			},
			afterEnd(canvas){
				// self.$emit("onEnd");
				// console.log("stop")
			},
		})
	};

	let bullets = [];

	$(".swiper-pagination.timer .timer__bullet-canvas").each((i, el) => {
		bullets.push(makeCanvasBullet(el))
	})

	swiperPortfolio = new Swiper(".portfolio-slider .swiper-container", {
		// effect: "fade",
		slidesPerView: 1,
		loop: true,
		a11y: false,
		roundLengths: true,
		spaceBetween: -280,
		loopedSlides: 2,
		breakpoints: {

		    1400: {
		      spaceBetween: -150,

		    },
		    1200: {
		      spaceBetween: 20,

		    },
		    1000: {
		      spaceBetween: 20,
		      // slidesPerView: 2,

		    },
		    660: {
		      spaceBetween: 20,
		      autoHeight: true,
		      // slidesPerView: 2,

		    },

		},
		autoplay: {
			delay: delay,
			disableOnInteraction: !1
		},
		navigation: {
	        nextEl: '.portfolio-slider__arrow .swiper-button-next',
	        prevEl: '.portfolio-slider__arrow .swiper-button-prev',
	        hideOnClick: true,
	    },
	    

		 on: {
		 	slideChangeTransitionStart(){

		 		let slider = document.querySelector(".portfolio-slider .swiper-container").swiper;

		 		$(".timer__bullet--active").removeClass("timer__bullet--active")


		 		$(".timer__bullet:eq("+slider.realIndex+")").addClass("timer__bullet--active")


		 		if (slider.realIndex > 0)
		 			bullets[slider.realIndex - 1].stop()
		 		bullets[slider.realIndex].start()
		 	},
		 	autoplayStart(){
		 		let slider = document.querySelector(".portfolio-slider .swiper-container").swiper;
		    	bullets[slider.realIndex].start();
		    },
		    autoplayStop(){
		    	let slider = document.querySelector(".portfolio-slider .swiper-container").swiper;
		    	bullets[slider.realIndex].stop();
		    	console.log(bullets[slider.realIndex])
		    },
		 }
	})

	if($('.portfolio-slider').length){
		swiperPortfolio.el.addEventListener("mouseenter", function(e) {
			// console.log(1)  
			swiperPortfolio.autoplay.stop();
		}, false);	

		swiperPortfolio.el.addEventListener("mouseleave", function(e) {   
			// console.log(2)  
			swiperPortfolio.autoplay.start();
		}, false);
		
	}






	let swiperTeam = new Swiper(".team .swiper-container", {
		// effect: "fade",
		slidesPerView: 4,
		loop: true,
		// a11y: false,
		roundLengths: true,
		spaceBetween: 60,
		loopedSlides: 5,
		breakpoints: {

		    1200: {
		      spaceBetween: 20,

		    },
		    1000: {
		      spaceBetween: 20,
		      slidesPerView: 3,

		    },
		    660: {
		      spaceBetween: 20,
		      slidesPerView: 1,

		    },


		},
		navigation: {
	        nextEl: '.team__arrow .swiper-button-next',
	        prevEl: '.team__arrow .swiper-button-prev',
	        hideOnClick: true,
	      },
	});

	let swiperMiddle = new Swiper(".slider-middle__list .swiper-container", {
		effect: "fade",
		slidesPerView: 1,
		loop: true,
		// a11y: false,
		roundLengths: true,
		spaceBetween: 60,
		loopedSlides: 5,

		navigation: {
	        nextEl: '.slider-middle__arrow .swiper-button-next',
	        prevEl: '.slider-middle__arrow .swiper-button-prev',
	        hideOnClick: true,
	      },
	});

	// var heightMiddlesliderImg = $('.slider-middle__item img').height();

	// $('.slider-middle__arrow').css({
	// 	'top': heightMiddlesliderImg
	// })




	$(window).on("load scroll touchmove", function(){
		if ($(window).scrollTop() > 800){
			$(".scroll-top").fadeIn(300);
		}else{
			$(".scroll-top").fadeOut(300);
		};

		// if($(window).width() > 1000) {

		// 	if($(window).scrollTop() > 10){
		// 			$('.inner .head').addClass('js__scroll');
		// 		}else {
		// 			$('.inner .head').removeClass('js__scroll');
		// 		}
		// }


	});

	$('.submenu').each((i,el) => {
		let $this = $(el);

		$this.closest('.head__menu-item').addClass('js__has-submenu');
	})

	$('.burger').click(function(){
		$('body').toggleClass("mobile-menu--open");

		setTimeout(function(){
			$('body').toggleClass("js__animate-menu");
		},500)
	});

	if ($(".statistic__num").length){
		$(".statistic__num").countTo();
	}

	$(window).on('scroll', function(){
		if ($(".statistic__num").length)
			if ($(".statistic__num").offset().top + 50 <=
				$(window).scrollTop() + $(window).height()){
					$(".statistic__num:not(.countered)").each((i, el) => {
						let $this = $(el),
							speed = 0;

						switch (i){
							case 0:
								speed = 4000;
							break;
							case 1:
								speed = 2000;
							break;

							default:
								speed = 3000;
						}

						$this.countTo({
							speed: speed,
						});

						$this.addClass("countered");
					});
			}

	})


	$("body").on("click change", ".btn-clear", function(){
		$(this).prevAll('input[type="text"]').val("");

	});



	if($(window).width() > 667){

		$('select').each(function(i,el){
			let $this = $(el);

			$this.selectize({
			    create: true,
			    sortField: 'text'
			});

		})

	}


	function injector(t, splitter, klass, after) {
		var a = t.text().split(splitter), inject = '';
		if (a.length) {
			$(a).each(function(i, item) {
				if($('div').hasClass('intro-bg__text')){
					// inject += '<span class="'+klass+'" \
					// style="transition-delay: '+(0.12 * i)+'s; transform: translate3d(0, '+(0.30 * i)+'%, 0);">'+item+'</span>'+after;
					inject += '<span class="'+klass+(i+1)+'" \
					style="transition-delay: '+(0.05 * i)+'s; transform: translate3d(0, '+(15.30 * i)+'%, 0);">'+item+'</span>'+after;
				}

				// let deleayCounter = a.length - i;
				// inject += '<span class="'+klass+(i+1)+'" \
				// style="transition-delay: '+(0.12 * deleayCounter)+'s; transform: translate3d('+(0.30 * i)+'%, 0, 0);">'+item+'</span>'+after;

			});
			t.empty().append(inject);
		}
	}

	var methods = {
		init : function() {

			return this.each(function() {
				injector($(this), '', 'char', '');
			});

		},

		words : function() {

			return this.each(function() {
				injector($(this), ' ', 'word', ' ');
			});

		},

		lines : function() {

			return this.each(function() {
				var r = "eefec303079ad17405c889e092e105b0";
				// Because it's hard to split a <br/> tag consistently across browsers,
				// (*ahem* IE *ahem*), we replaces all <br/> instances with an md5 hash
				// (of the word "split").  If you're trying to use this plugin on that
				// md5 hash string, it will fail because you're being ridiculous.
				injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
			});

		}
	};

	$.fn.lettering = function( method ) {
		// Method calling logic
		if ( method && methods[method] ) {
			return methods[ method ].apply( this, [].slice.call( arguments, 1 ));
		} else if ( method === 'letters' || ! method ) {
			return methods.init.apply( this, [].slice.call( arguments, 0 ) ); // always pass an array
		}
		$.error( 'Method ' +  method + ' does not exist on jQuery.lettering' );
		return this;
	};


	 $(".intro-bg__text").lettering();
	 // $(".error-bg__text").lettering();






	 var certClone = $('.wr-head-link').clone();

	if($(window).width() < 660){
		$('.main-nav__cont').append(certClone);
	}


	$(".fancybox").fancybox({
		trapFocus: false,
		touch: false,
		// buttons: ["fullscreen", "slideShow", "close"],
		image: {
			preload: true,
		},
		transitionEffect: "slide",
	});

	$(".about__map-img").fancybox({
		animationEffect: false,
		trapFocus: false,
		touch: false,
		buttons: ["fullscreen", "slideShow", "close"],
		image: {
			preload: true,
		},
		beforeShow:function() {
			$('body').addClass('fancybox-info-map');

	    },
	    afterShow:function(){
			var caption = $('.fancybox-caption').clone();
	    	$('.fancybox-content ').append(caption);
			// var btnClose = $('.fancybox-button--close').clone();
			// $('.fancybox-content ').append(btnClose);

	    },
	    beforeClose:function(){
	    	$('.fancybox-content .fancybox-caption').remove();
	    	// $('.fancybox-content .fancybox-button--close').remove();
	    },
	    afterClose:function(){
	      $('body').removeClass('fancybox-info-map');
	    },
	});



	$(".head-link .modal-items").fancybox({
		trapFocus: false,
		touch: false,
		beforeShow:function() {
	      $('body').addClass('fancybox-certificate'); 
	    },
	    afterShow:function(){

	    },
	    afterClose:function(){
	      $('body').removeClass('fancybox-certificate');
	    },
	});


	Sticky($("[data-widget=\"sticky-holder\"]"))


	let $sliderCollection = $(".slider-collection__list"),
		$sliderCollectionNav = $(".slider-nav__list");


	$sliderCollection.on('init', slick => {

	}).slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slider-nav__list',
		fade: true,
		arrows: false,
		lazyLoad: 'progressive',
		centerMode: true,
		centerPadding: 0,
		responsive: [
			{
				breakpoint: 1100,
				settings: {

				}
			}
		]
	}).on("beforeChange", (e, slick, curSlide, nextSlide) => {
		$sliderCollection.find(".slick-slide:eq("+curSlide+")").removeClass('js__active-slide');
	}).on("afterChange", (e, slick, curSlide) => {
		$sliderCollection.find(".slick-slide:eq("+curSlide+")").addClass('js__active-slide');
	});



	$sliderCollectionNav.on('init', slick => {

	}).slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-collection__list',
		focusOnSelect: true,
		arrows: true,
		centerMode: true,
		centerPadding: 0,
		lazyLoad: 'progressive',
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});


	if($(window).width() > 670){
		let $sliderCartOne = $(".cart-one__slider-list:not(.mobile)"),
			$sliderCartOneNav = $(".cart-one__slider-nav-list");





		$sliderCartOne.on('init', slick => {

		}).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: $sliderCartOneNav,
			fade: true,
			appendArrows: $('.cart-one__slider-arrow'),
			lazyLoad: 'progressive',
			responsive: [
				{
					breakpoint: 1100,
					settings: {
						arrows: true,
					}
				}
			]
		}).on("beforeChange", (e, slick, curSlide, nextSlide) => {
			$sliderCartOne.find(".slick-slide:eq("+curSlide+")").removeClass('js__active-slide');
		}).on("afterChange", (e, slick, curSlide) => {
			$sliderCartOne.find(".slick-slide:eq("+curSlide+")").addClass('js__active-slide');
			startProgressbar();
		});



		$sliderCartOneNav.on('init', slick => {

		}).slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: $sliderCartOne,
			focusOnSelect: true,
			arrows: true,
			infinite: true,
			centerMode: true,
			centerPadding: 0,
			lazyLoad: 'progressive',
		}).on("beforeChange", (e, slick, curSlide, nextSlide) => {
			// resetProgressbar();
		}).on("afterChange", (e, slick, curSlide) => {
			startProgressbar();
		});


		$("body").on("change", ".forms__input", function(e){

			var inputHasInfo = $(this).val();

			if(inputHasInfo.length){
				$(this).closest('.forms__input-cont').addClass('js__input-full');
			} else {
				$(this).closest('.forms__input-cont').removeClass('js__input-full');
			}

		});

		//start

		 var time = 10;
		 var $bar,
		      isPause,
		      tick,
		      percentTime;



		  $bar = $('.slider-progress .progress');

		  $('.cart-one__slider-list, .cart-one__slider-nav-list, .slick-arrow').on({
		    mouseenter: function() {
		      isPause = true;
		    },
		    mouseleave: function() {
		      isPause = false;
		    }
		  })

		  function startProgressbar() {
		    resetProgressbar();
		    percentTime = 0;
		    isPause = false;
		    tick = setInterval(interval, 10);
		  }

		  function interval() {
		    if(isPause === false) {
		      percentTime += 1 / (time+0.1);
		      $bar.css({
		        width: percentTime+"%"
		      });
		      if(percentTime >= 100)
		        {
		          $sliderCartOne.slick('slickNext');
		          // startProgressbar();
		          resetProgressbar();
		        }
		    }
		  }


		  function resetProgressbar() {
		    $bar.css({
		     width: 0+'%'
		    });
		    clearTimeout(tick);
		  }

		  startProgressbar();
	}

	if($(window).width() < 670){
		$(".cart-one__slider-list.mobile").on('init', slick => {

		}).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			// asNavFor: '.cart-one__slider-nav-list',
			fade: true,
			// appendArrows: $('.cart-one__slider-arrow'),
			lazyLoad: 'progressive',
			responsive: [
				{
					breakpoint: 1100,
					settings: {
						arrows: true,
					}
				}
			]
		})

	}

// $('.about__map-el .row').each(function(){

		// let timeout;

		// $('.about__map-el .row').hover(function(){
		// 	let $this = $(this);

		//     timeout = setTimeout(function(){
		//         $this.closest('.about__map-el').addClass('js__hover');
		//       },300);
		//     });


		// $('.about__map-el').hover(
		// 	// function(){}, 

		// 	function(){
		// 		clearTimeout(timeout);
		// 			$('.about__map-el').removeClass('js__hover');
		// })

	// })








	var timeout;

	$('.about__map-el .row').hover(function(){
		var $this = $(this);

	    timeout = setTimeout(function(){
	        $this.siblings('.about__map-img-wr').addClass('js__hover');
	      },300);
	    },

	     function(){
	      clearTimeout(timeout);
	        // $(this).closest('.about__map-img-wr').removeClass('js__hover');
	        // $(this).closest('.about__map-el').find('.about__map-img-wr').removeClass('js__hover');
	});


	$('.about__map-el').hover(
		function(){}, 

		function(){
			clearTimeout(timeout);
				$('.about__map-el .about__map-img-wr').removeClass('js__hover');
	})
	



	$("body").on("click", ".scroll-top", function(){
        var scrollTop = $(window).scrollTop();
        $("html, body").animate({"scrollTop": 0}, "slow")
    });


    $(".main-services__info-title").each((i, el) => {
		let $this = $(el);

		new stringEffect({
			selector: $this,
			afterFinish($el, count, options){
				$el.find('span').css({
					"transition-delay": (count * options.timeStep) + "s",
					transform: "translate3d(0, "+(options.transformStep * count)+"%, 0)"
				})
			}
		});
	});




});


$(window).on('load', function(){
  $(window).scroll(function() {

    var wintop = $(window).scrollTop(),
        docheight = $('.page-wr').height(),
        winheight = $(window).height();

    var totalScroll = (wintop/(docheight-winheight))*100;

    $(".progressbar").css("width",totalScroll+"%");
  });

});


$(window).on("load scroll resize touchmove", e => {

	if ($(window).scrollTop() > 800){
		$(".scroll-top").fadeIn(300);
		$(".scroll-top").css({
			'display': 'flex',
		})

	}else{
		$(".scroll-top").fadeOut(300);
		$(".scroll-top").removeClass('js__scrolled');
	};


});




// class stringEffect{
// 	set settings(settings){

// 		const defaultSettings = {
// 			options: {
// 				timeStep: .12,
// 				timeOffset: 0,
// 				transformStep: 20,
// 				transformStepOffset: 0,
// 			}, 
// 			beforeStart(){

// 			}, 
// 			afterFinish(){

// 			},
// 		};

// 		this._settings = $.extend( true, {}, defaultSettings, settings);
// 	}
// 	get settings(){
// 		return this._settings;
// 	}
// 	set $el(selector){
// 		this._el = selector
// 	}
// 	get $el(){
// 		return $(this._el)
// 	}

// 	afterFinish(){
// 		// console.log(this.settings.afterFinish);
// 		this.settings.afterFinish(this.$el, this.stringCounter, this.settings.options)
// 	}

// 	beforeStart(){
// 		this.settings.beforeStart(this.$el, this.stringCounter, this.settings.options)
// 	}


// 	constructor(settings = {}){
// 		this.settings = settings;

// 		this.$el = this.settings.selector;

// 		this.init()
// 	}

// 	init(){
// 		this.wrapWords();
// 		this.createStrings();
// 		this.afterFinish();

// 		this.whatch();
// 	}

// 	rebuild(){
// 		this.destroyStrings();
// 		this.createStrings();
// 	}

// 	wrapWords(){
// 		this.beforeStart();

// 		let textArr = this.$el.html().split(/\s+(?![^<>]*>)/g);

// 		this.$el.html("");

// 		for (let i in textArr)
// 			this.$el.append(" <span>"+textArr[i]+"</span>");

// 	}

// 	destroyStrings(){
// 		this.$el.children("div").children("span").unwrap();
// 	}

// 	createStrings(){
// 		let $text = this.$el.children("span"),
// 			stringsDesc = [];

// 		$text.each((i, el) => {
// 			let $this = $(el);

// 			// console.log(parseInt($this.position().top);

// 			stringsDesc.push({
// 				id: i,
// 				top: parseInt($this.position().top),
// 			});
// 		});

// 		this.wrapStrings(stringsDesc);
// 	}

// 	wrapStrings(stringsDesc = []){
// 		this.stringCounter = 0;

// 		let {
// 			timeStep: delay, 
// 			timeOffset: tmOffset, 
// 			transformStep: transStep,
// 			transformStepOffset: transStepOffset,
// 		} = this.settings.options;

// 		for (let i in stringsDesc){


// 			let word = stringsDesc[i],
// 				time = tmOffset + this.stringCounter * delay,
// 				transform = transStepOffset + this.stringCounter * transStep;

// 			if (!this.$el.find(".string--"+word.top).length){
// 				this.$el.append("<div class=\"string string--"+word.top+"\">\
// 					 <span>"
// 						+this.$el.children("span:eq("+word.id+")").html()+
// 					"</span>\
// 				</div>");

// 				this.stringCounter++;

// 				this.$el.find(".string--"+word.top).css({
// 					"transition-delay": time+"s",
// 					transform: "translate3d(0, "+transform+"%, 0)"
// 				});
// 			}else
// 				this.$el.find(".string--"+word.top)
// 					.append(" <span>"
// 						+this.$el.children("span:eq("+word.id+")").html()+
// 					"</span>");
// 		}

// 		this.$el.children("span").remove();
// 	}


// 	whatch(){
// 		$(window).on("resize", e => {
// 			clearTimeout(this.updateTimeout);

// 			this.updateTimeout = setTimeout(e => {
// 				this.rebuild();
// 			}, 100)
// 		});
// 	}
// }


// class mainPort{
// 	set $elements(selector){
// 		this._els = $(selector);
// 	}
// 	get $elements(){
// 		return this._els;
// 	}

// 	constructor(selector){
// 		this.$elements = selector;

// 		if (!this.$elements.length)
// 			return

// 		this.$strings = [];

// 		this.prepare()
// 	}
// 	prepare(){
// 		let $els = this.$elements;

// 		$els.each((i, el) => {
// 			let $this = $(el);

// 			this.$strings.push(new stringEffect({
// 				selector: $this.find(".port-one__title"),
// 				options: {
// 					timeOffset: 1.3,
// 				},
// 				afterFinish($el, count, options){
// 					let $subtitle = $el.next(".port-one__subtitle");

// 					// console.log(options);

// 					new stringEffect({
// 						selector: $subtitle,
// 						options: {
// 							timeOffset: options.timeOffset + options.timeStep * count,
// 							transformStepOffset: options.transformStep * count,
// 						}
// 					})
// 				}
// 			}))
// 		});
// 	}
// 	startAnimate(){
// 		for (let i = 0; i < this.$elements.length; i++){
// 			let $el = $(this.$elements[i]);

// 			this.show($el, i);
// 		}
// 	}
// 	show($block, step){
// 		setTimeout(e => {
// 			$block.addClass("js__animated");
// 		}, 300 * step)
// 	}
// 	hide(){
// 		this.$elements.removeClass("js__animated")
// 	}
// }