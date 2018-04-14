(function($) {
    var methods = {
        init: function(opts) {
            var _speed = parseInt(opts.speed);
            var $ul = $(this).children('ul');
            var _length = $ul.children('li').length;
            var _width = $ul.width();
            // 设置样式
            $(this).wrap('<div class="unslider oh"></div>');
            $(this).addClass('unslider-horizontal');
            $ul.addClass('unslider-wrap unslider-carousel clearfix');
            $ul.css({
                width: ('200' * _length) + '%',
                left: 0
            });
            // 克隆两份li添加到后面
            $ul.children('li').each(function(i, item) {
                var $clone = $(item).clone();
                $ul.append($clone);
            });
            // 第一次轮播
            ease();
            // 设置定时器
            var _interval;
            _interval = setInterval(function() {
                ease();
            }, _speed);

            function ease() {
                $ul.animate({
                    'left': '-100%'
                }, {
                    duration: _speed,
                    easing: 'linear',
                    complete: function() {
                        var $clone = $ul.children('li').first().clone();
                        $ul.children('li').first().remove();
                        $ul.append($clone);
                        $ul.css({
                            'left': 0
                        });
                    }
                });
            }

            // $(this).parent().hover(function() {
            //     console.info('in')
            //     clearInterval(_interval);
            // }, function() {
            //     console.info('out')
            //     ease();
            //     _interval = setInterval(function() {
            //         ease();
            //     }, _speed);
            // });
        },
        show: function() {}, // IS
        hide: function() {}, // GOOD
        update: function(content) {} // !!!
    };

    $.fn.fuckSlider = function(methodOrOptions) {
        if (methods[methodOrOptions]) {
            return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
            // Default to "init"
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + methodOrOptions + ' does not exist on jQuery.tooltip');
        }
    };
})(jQuery);