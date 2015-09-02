var CKF = require('./CKF.js');
require('../less/home-scroll.less');
// other dependencies ...

module.exports = (function() {
	var moduleName = 'homeScroll';
	var module = CKF.create(moduleName);

	return {
		init: function() {
			var targetSelector = module.data('target');

			$(window).on('scroll', function () {
				if (parseInt($(this).scrollTop()) > 500) {
					module.addClass('open');
				}
				else {
					module.removeClass('open');
				}
			}).trigger('scroll');

			$(window).on('load', function () {
				var hash = window.location.hash;
				var $hashTarget = $(hash);
				if ($hashTarget.length) {
					$('html, body').animate({
						scrollTop: $hashTarget.offset().top
					}, 750, function () {
						$hashTarget.siblings('.active').removeClass('active');
						$hashTarget.addClass('active');
					});
				}
			});

			module.on('click', '.home-scroll-item', function(e) {
				e.preventDefault();
				var $view = $('html, body'),
					$this = $(this),
					floorSelector,
					$floor,
					floorTop;

				if ($this.hasClass('up')) {
					$floor = $(targetSelector + '.active').prev(targetSelector);
				} else if ($this.hasClass('down')) {
					$floor = $(targetSelector + '.active').next(targetSelector);
				} else {
					floorSelector = $this.attr('href');
					$floor = $(floorSelector);
				}

				floorTop = $floor.length ? $floor.offset().top : null;

				if (!$view.is(':animated') && floorTop !== null) {
					$view.animate({
						scrollTop: floorTop
					}, function() {
						$floor.siblings('.active').removeClass('active');
						$floor.addClass('active');
						window.location.hash = floorSelector;
					});
				}
			});
		}
	};
})();