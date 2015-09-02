var CKF = require('./CKF.js');
require('../less/ajax-loading.less');
// other dependencies ...

module.exports = (function () {
	return {
		init: function () {
			$(document).ajaxStart(function () {
				var AJAX_HTML = '<div class="ajax-loading"><div class="ajax-loading-icon"></div></div>';
				$('body').append(AJAX_HTML);
			});

			$(document).ajaxStop(function () {
				$('.ajax-loading').remove();
			});
		}
	};
})();