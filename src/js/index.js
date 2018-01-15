import 'babel-polyfill';
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
	$('.v-carousel').unslider({
		autoplay: true,
		animation: 'vertical',
		infinite: true,
		nav: false,
		arrows: false
	});
	$('.v-carousel').on('mouseover', function() {
		$('.v-carousel').data('unslider').stop();
	}).on('mouseout', function() {
		$('.v-carousel').data('unslider').start();
	});
	$('.card-carousel').unslider({
		autoplay: true,
		nav: false,
		arrows: false
	});
};

const viewImg = () => {
	let $images = $('.expand-img');
	const $modal = $('#imgModal');
	let $img = $('#imageInModal');
	const $close = $modal.find('.close');

	$images.off('click').on('click', function() {
		$modal.show();
		$img.attr('src', $(this).attr('src'));
	});

	$close.on('click', function() {
		$modal.hide();
	});
};

carousel();
viewImg();
