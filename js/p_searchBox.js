var CKF = require('./CKF.js');
require('../less/search-box.less');
// other dependencies ...

module.exports = (function () {
	var moduleName = 'searchBox';
	var module = CKF.create(moduleName);

	

	function handleSearch(query) {
		if (query) {
			CKF.notify({
				type: 'perform-search',
				data: query
			});
		}
	}

	return {
		init: function () {
			module.each(function (index, elem) {
				var $elem = $(elem);
				var input = $elem.find('.search-box-input');
				var button = $elem.find('.search-box-btn');
				button.on('click', function () {
					handleSearch(input.val());
				});
			});
		}
	};
})();