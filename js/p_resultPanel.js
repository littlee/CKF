var CKF = require('./CKF.js');
require('../less/result-panel.less');
// other dependencies ...

module.exports = (function () {
	var moduleName = 'resultPanel';

	var module = CKF.create(moduleName);

	function showResult(query) {
		module.html('Your query:' + query);
	}

	return {
		init: function () {
			CKF.listen({
				'perform-search': showResult
			}, moduleName);
		}
	};
})();