require('../css/bootstrap.css');
require('../css/icons.css');

var header = require('./p_header.js');
var footer = require('./p_footer.js');
var topBar = require('./p_topBar.js');
var logo = require('./p_logo.js');
var ajaxLoading = require('./p_ajaxLoading.js');
var category = require('./p_category.js');

var searchInput = require('./p_searchInput.js');
var searchBox = require('./p_searchBox.js');
var resultPanel = require('./p_resultPanel.js');

$(document).ready(function () {
	header.init();
	footer.init();`
	topBar.init();
	logo.init();
	ajaxLoading.init();
	category.init();
	searchInput.init();
	searchBox.init();
	resultPanel.init();
});