# CKF (not KFC)

## 模块创建
### html
使用 `data-j="*"` 启用相应的 js 代码
```html
<!-- html code -->
<div class="search-box" data-j="searchBox">
	<input type="text" class="search-box-input">
	<button type="button" class="search-box-btn">search</button>
</div>
```

### less [search-box.less]
following the SMACSS guideline
```less
@import "public.less";

.search-box {
	
	&-input {
		width: 300px;
		height: 50px;
		font-size: 40px;
		background-color: @ck-main;
	}

	&-btn {
		width: 150px;
		height: 50px;
		font-size: 40px;
	}
}
```

### js [searchBox.js]
使用 CommonJS 定义一个模块，所有的模块的依赖 CKF
这样的好处在于，模块可以声明依赖
使用 `CKF.create([String: module_name])` 创建并向核心注册一个模块
```js
var CKF = require('./CKF.js');
require('../less/search-box.less');
// other dependencies ...

module.exports = (function () {
	var moduleName = 'searchBox';
	var module = CKF.create(moduleName);

	var input = module.find('.search-box-input');
	var button = module.find('.search-box-btn');

	function handleSearch() {
		var query = input.val();
		if (query) {
			CKF.notify({
				type: 'perform-search',
				data: query
			});
		}
	}

	return {
		init: function () {
			button.on('click', handleSearch);
		}
	};
})();
```
**如果模块在页面中出现多次**
```js
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
```

## 模块交流
定义另外一个模块
```html
<div class="result-panel" data-j="resultPanel">
	click search to perform search
</div>
```
```less
@import "public.less";

.result-panel {
	margin-top: 30px;
	font-size: 50px;
}
```
```js
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
```
模块通过 `CKF.notify()` 向全局事件系统触发事件和发送数据
模块通过 `CKF.listen()` 从全局事件系统相应事件和处理数据

### webpack 的 enrty point
```js
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
	footer.init();
	topBar.init();
	logo.init();
	ajaxLoading.init();
	category.init();
	searchInput.init();
	searchBox.init();
	resultPanel.init();
});
```

## 模块总结
```js
var CKF = require('./CKF.js');
require('../less/module-name.less');

module.exports = (function () {
	// 私有变量或函数
	var myPrivate = 'private';
	function privateFunction() {
		console.log('private function');
	}

	// 模块 API
	return {
		init: function () {

		},
		destroy: function () {

		}
	};
})();
```
模块返回的 API 至少包含一个函数 init
init 要做的事：

* 事件绑定
* 监听全局事件


# CKF API

## CKF.create(moduleName)
创建一个模块

* String: moduleName 模块名称

## CKF.notify(event, moduleName)
向全局事件系统触发事件

* Object: event 事件对象
	* String: type 事件类型
	* Object || Array || String || Number || Boolean || null: data 事件数据
* String: moduleName 模块名称（事件触发者）

## CKF.listen(handlers)
响应全局事件系统事件

* Object: handlers 事件响应对象
	* 事件类型作为键
	* 处理函数作为值
	* 可以有多个键值对

# 命名约定
**html:**
```html
	<div data-j="moduleName"></div>
```

**less:**
module-name.less

**js:**
p_moduleName.js
