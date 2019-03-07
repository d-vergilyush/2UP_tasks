window.addEventListener('DOMContentLoaded', function () {

	const slides = document.getElementsByClassName('jsSliderItem');
	const dotsWrap = document.querySelector('.jsSliderDots');
	const dots = document.querySelectorAll('.jsSliderDot');
	let slideIndex = 1;

	showSlides(slideIndex);

	// функция показа текущего слайда
	function showSlides(n) {
		if (n > slides.length) {
				slideIndex = 1;
		};
		if (n < 1) {
			slideIndex = slides.length;
		};
		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		};
		for (let i = 0; i < dots.length; i++) {
			dots[i].classList.remove('active');
		};
		slides[slideIndex - 1].style.display = '';
		dots[slideIndex - 1].classList.add('active');
	}

	// функция для получения текущего слайда
	function currentSlide(n) {
		showSlides(slideIndex = n);

	}

/*	let autoShowNextSlide = setTimeout(autoPlusSlides, 6000);
	function autoPlusSlides () {
		showSlides(slideIndex += 1);
		autoShowNextSlide = setTimeout(autoPlusSlides, 6000);
	}*/

	dotsWrap.addEventListener('click', event => {
		for (let i = 1; i <= dots.length; i++) {
				if (event.target.classList.contains('jsSliderDot') && event.target == dots[i-1]) {
					currentSlide(i);
				}
		}
	});

})