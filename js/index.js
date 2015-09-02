require('../css/bootstrap.css');
require('../css/icons.css');

require('font-awesome/less/font-awesome.less');

require('bootstrap/js/transition.js');
require('bootstrap/js/carousel.js');

var header = require('./p_header.js');
var footer = require('./p_footer.js');
var topBar = require('./p_topBar.js');
var logo = require('./p_logo.js');
var ajaxLoading = require('./p_ajaxLoading.js');
var category = require('./p_category.js');
var searchInput = require('./p_searchInput.js');
var buyerService = require('./p_buyerService.js');
var homeFloor = require('./p_homeFloor.js');
var homeCarousel = require('./p_homeCarousel.js');
var homeSpecial = require('./p_homeSpecial.js');
var homeScroll = require('./p_homeScroll.js');
var product = require('./p_product.js');


$(document).ready(function() {
	header.init();
	footer.init();
	topBar.init();
	logo.init();
	ajaxLoading.init();
	category.init();
	searchInput.init();
	buyerService.init();
	homeFloor.init();
	homeCarousel.init();
	homeSpecial.init();
	homeScroll.init();
	product.init();
});