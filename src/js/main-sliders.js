import $ from "jquery";
import Swiper from "swiper/dist/js/swiper.js";



const autoplayToggle = _ => {
	$(".stock-slider:not(.active) .swiper-list")[0].swiper.autoplay.stop();
	$(".stock-slider.active .swiper-list")[0].swiper.autoplay.start();
}, slidersToggle = sliderId => {
	$(".stock-slider").removeClass("active");
	$(".stock-slider#"+sliderId).addClass("active");

	autoplayToggle();
};

$(_ => {
	let sliders = document.querySelectorAll(".stock-slider .swiper-list");

	if (!sliders.length)
		return

	for (let slider of sliders){
		const sliderObject = slider.closest(".stock-slider");

		new Swiper(slider, {
			slidesPerView: 1,
			effect: 'fade',
			fadeEffect: {
				crossFade: !$(sliderObject).hasClass("stock-slider--noslider")
			},
			a11y: false,
			loop: true,
			navigation: {
				prevEl: sliderObject.querySelector(".slick-prev"),
				nextEl: sliderObject.querySelector(".slick-next")
			},
			watchOverflow: true,
			autoplay: sliderObject.classList.contains("active"),

		});
	}

	autoplayToggle();

	$(".main-sliders__title").click(function(){
		let $this = $(this);

		if ($this.hasClass("active"))
			return





		let id = $this.data("id");

		$(".main-sliders__title").removeClass("active");
		$this.addClass("active");

		slidersToggle(id);
	});

	// $(".sliders-switcher").click(e => {
	// 	$(".main-sliders__title:not(.active)").trigger("click");
	// });
});