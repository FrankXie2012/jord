import 'unslider';
require('../scss/index.scss');

export {
	carousel
};

const carousel = () => {
	$('.carousel').unslider({
		autoplay: true,
		animation: 'fade',
		arrows: false
	});
};

carousel();
