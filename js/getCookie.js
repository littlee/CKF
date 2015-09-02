
module.exports = function (c) {
	// defautl set
	var DEFAULT = {
		"org.springframework.web.servlet.i18n.CookieLocaleResolver.LOCALE": "en_US"
	};

	var cReg = new RegExp('(?:(?:^|.*;\s*)' + c + '\s*\=\s*([^;]*).*$)|^.*$');
	var cMatch = document.cookie.replace(cReg, "$1");

	if (cMatch !== '') {
		return cMatch;
	}

	return DEFAULT[c];
};