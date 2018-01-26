import 'babel-polyfill';
import 'unslider';
require('../scss/index.scss');

export {
	carousel
};

const carousel = () => {
	const $slider = $('.carousel').unslider({
		autoplay: true,
		animation: 'fade',
		arrows: false
	});
	$slider.on('mouseover', function() {
		$slider.data('unslider').stop();
	}).on('mouseout', function() {
		$slider.data('unslider').start();
	});
	const $vSlider = $('.v-carousel').unslider({
		autoplay: true,
		animation: 'vertical',
		infinite: true,
		nav: false,
		arrows: false,
		delay: 6000
	});
	$vSlider.on('mouseover', function() {
		$vSlider.data('unslider').stop();
	}).on('mouseout', function() {
		$vSlider.data('unslider').start();
	});
	const $cardSlider = $('.card-carousel').unslider({
		autoplay: true,
		nav: false,
		arrows: false
	});
	$cardSlider.on('mouseover', function() {
		$cardSlider.data('unslider').stop();
	}).on('mouseout', function() {
		$cardSlider.data('unslider').start();
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
