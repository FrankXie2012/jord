import 'babel-polyfill';
import 'unslider';
import './fuckSlider';
require('../scss/index.scss');

// 9.7
$('#flash, #flash embed').height($(window).width() * 0.12987);
$(window).resize(function () {
    $('#flash, #flash embed').height($(window).width() * 0.12987);
});
// 9.7
$('#print').off('click').on('click', function () {
    $('.header, .links, .footer').hide();
    window.print();
    $('.header, .links, .footer').show();
});


// banner轮播
var slider = function () {
    var $slider = $('.carousel').unslider({
        autoplay: true,
        animation: 'fade',
        arrows: false
    });

    $slider.on('mouseover', function () {
        $slider.data('unslider').stop();
    }).on('mouseout', function () {
        $slider.data('unslider').start();
    });
};

// 竖直新闻轮播
var vSlider = function () {
    var $vSlider = $('.v-carousel').unslider({
        autoplay: true,
        animation: 'vertical',
        infinite: true,
        nav: false,
        arrows: false,
        delay: 6000
    });

    $vSlider.on('mouseover', function () {
        $vSlider.data('unslider').stop();
    }).on('mouseout', function () {
        $vSlider.data('unslider').start();
    });
}

// 底部建瓯风土人情轮播
var cardSlider = function () {
    var $viewSlider = $('#viewSlider');
    $viewSlider.fuckSlider({
        speed: '30000'
    });

    var $projectSlider = $('#projectSlider');
    $projectSlider.fuckSlider({
        speed: '30000'
    });

    var $snackSlider = $('#snackSlider');
    $snackSlider.fuckSlider({
        speed: '30000'
    });
}

// 查看图片
var viewImage = function () {
    let $images = $('.expand-img');
    var $modal = $('#imgModal');
    let $img = $('#imageInModal');
    var $close = $modal.find('.close');

    $images.off('click').on('click', function () {
        $modal.show();
        $img.attr('src', $(this).attr('src'));
    });

    $close.on('click', function () {
        $modal.hide();
    });
}

// tab切换
var tab = function () {
    $('.tab-head').children('.tab-btn').on('click', function () {
        var _key = $(this).data('tab');
        $(this).addClass('active').siblings().removeClass('active');
        $('.tab-body').children('.tab-box').hide();
        $('.tab-body').children('.tab-box[data-tab="' + _key + '"]').show();
    });
    $('.tab-head').children('.tab-btn').first().trigger('click');
};

// 返回前页
var closePage = function () {
    $('#closePage').on('click', function () {
        history.back();
    });
};

var backToTop = function () {
    $('#backToTop').off('click').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
};

var init = (function () {
    slider();
    vSlider();
    cardSlider();
    viewImage();
    tab();
    closePage();
    backToTop();
}());