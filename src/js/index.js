import 'unslider';
require('../scss/index.scss');

export {
	carousel
};

// const init = () => {
//     $('html').removeClass('hidden');
// };

const carousel = () => {
	$('.carousel').unslider({
		autoplay: true,
		animation: 'fade',
		arrows: false
	});
	$('.v-carousel').unslider({
		autoplay: true,
		animation: 'vertical',
		infinite: true,
		nav: false,
		arrows: false
	});
	$('.card-carousel').unslider({
		autoplay: true,
		nav: false,
		arrows: false
	});
};

// init();
carousel();
