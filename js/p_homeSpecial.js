var CKF = require('./CKF.js');
require('../less/home-special.less');
// other dependencies ...

module.exports = (function () {
	var moduleName = 'homeSpecial';
	var module = CKF.create(moduleName);
	return {
		init: function () {
			module.each(function (index, elem) {
				var $elem = $(elem);
				$elem.on('click', '.home-special-spin', function(e) {
					var $this = $(this);
					var $homeSpecial = $this.closest('.home-special');
					$homeSpecial.find('.home-special-category').toggleClass('open');
					$homeSpecial.find('.home-special-detail').toggleClass('open');
					$this.toggleClass('open');
				});
			});
		}
	};
})();