require('../less/CKF.less');
var CKF = (function() {
	var moduleData = {};

	function isObj(o) {
		return jQuery.isPlainObject(o);
	}

	function isArr(a) {
		return jQuery.isArray(a);
	}

	function registerEvents(evts, mod) {
		if (isObj(evts) && mod) {
			if (moduleData[mod]) {
				moduleData[mod].events = evts;
			}
		}
	}

	function triggerEvent(evt) {
		var mod;
		for (mod in moduleData) {
			if (moduleData.hasOwnProperty(mod)) {
				mod = moduleData[mod];
				if (mod.events && mod.events[evt.type]) {
					mod.events[evt.type](evt.data);
				}
			}
		}
	}

	function removeEvents(evts, mod) {
		if (isObj(evts) && mod && (mod = moduleData[mod]) && mod.events) {
			delete mod.events;
		}
	}

	return {
		create: function(moduleID) {
			var mod;
			if (typeof moduleID === 'string') {
				mod = jQuery('[data-j="' + moduleID + '"]');
				if (mod.length) {
					moduleData[moduleID] = {
						id: moduleID
					};
					return mod;
				}
				else {
					console.error('CKF: can not find any module named [data-j="' + moduleID + '"]');
				}

			} else {
				console.error('CKF: moduleID should be a string');
			}
		},

		notify: function(evt) {
			if (isObj(evt) && evt.type) {
				triggerEvent(evt);
			}
		},
		listen: function(evts, moduleID) {
			if (isObj(evts)) {
				registerEvents(evts, moduleID);
			}
		},
		ignore: function(evts, moduleID) {
			if (isArr(evts)) {
				removeEvents(evts, moduleID);
			}
		}
	};
})();

module.exports = CKF;