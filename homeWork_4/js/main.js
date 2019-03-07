window.addEventListener('DOMContentLoaded', function () {

	slider();

	function slider() {

		const slides = document.getElementsByClassName('jsSliderItem');
		const dotsWrap = document.querySelector('.jsSliderDots');
		const dots = document.querySelectorAll('.jsSliderDot');

		let forEach = [].forEach;

		showSlide(0);

		function showSlide(n) {

			forEach.call(slides, slide => {
				slide.classList.remove('main__slider-item_active');
			});
			forEach.call(dots, dot => {
				dot.classList.remove('main__slider-dot_active');
			});

			slides[n].classList.add('main__slider-item_active');
			dots[n].classList.add('main__slider-dot_active');
		};

		dotsWrap.addEventListener('click', event => {
			forEach.call(dots, (dot, i) => {
				if (event.target == dot) {
					showSlide(i);
				}
			});
		});

	};

})