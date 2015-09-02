require('../css/bootstrap.css');

require('../css/icons.css');

require('bootstrap/js/transition.js');
require('bootstrap/js/tab.js');
require('bootstrap/js/carousel.js');

$('#tt').click(function () {
	$.get('https://baconipsum.com/api/?type=meat-and-filler', function (data) {
		console.log(data);
	});
});