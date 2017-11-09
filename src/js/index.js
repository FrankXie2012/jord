import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
require('../scss/index.scss');

export {
	carousel
};

const carousel = () => {

	$('.carousel').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		fade: true,
		dots: true
	});
};

carousel();
