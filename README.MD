# CKF (not KFC)

## API
### CKF.create
```js
CKF.create(moduleID, optional)
```
创建一个模块并向 CKF 注册，返回 jQuery 对象。

* 参数：
    * (String) moduleID 模块名称
    * (Boolean) optional 是否 data-j 可选
* 返回值：
    * (jQuery) `$('[data-j="moduleID"]')` 的 jQuery 对象

> 如果 optional 为 true，则可以不在 DOM 中设置 data-j 属性，以不启用模块的 js 功能。

### CKF.rebuild
```js
CKF.rebuild(moduleID)
```
重新获取模块最新的 DOM 元素，返回 jQuery 对象。

* 参数：
    * (String) moduleID 模块名称
* 返回值：
    * (jQuery) `$('[data-j="moduleID"]')` 的 jQuery 对象

> 由于 jQuery 对象不是随着 DOM 的改变而实时更新，当需要从 DOM 中获取最新的模块元素时，使用本方法。使用 create 创建过的模块才能使用此方法。

### CKF.destory
```js
CKF.destory(moduleID)
```
销毁一个模块，抹除该模块所有的全局事件系统数据。

* 参数：
    * (String) moduleID 模块名称
* 返回值：
    * (Boolean) 销毁成功或失败

### CKF.notify
```js
CKF.notify({
    type: 'event-type',
    data: eventData
});
```
向全局事件系统发送事件。

* 参数：
    * (Object) event 事件对象：
        * (String) type 事件名称
        * (Object || Array || String || Number || Boolean || null) data 事件数据
* 返回值：
    * 无

> 所有通过 listen 注册对应的事件处理函数会执行，且可以从函数参数中获取事件数据。

### CKF.listen
```js
CKF.listen({
    'event-type1': handler1, 
    'event-type2': handler2 
    // ...
}, moduleName);
```
向全局事件系统注册事件处理函数

* 参数：
    * (Object) event 事件对象：
        * (String) type 事件名称 : (Function) handler 事件处理函数
* 返回值：
    * 无

> 监听来自全局事件系统的事件，可以一次指派多个事件。

### CKF.ignore
```js
CKF.ignore(['event-type1', 'event-type2'/*, ...*/], moduleName);
```
取消模块在全局事件系统的事件处理函数

* 参数：
    * (Array) events 事件名称
    * (String) moduleName 模块名称
* 返回值：
    * 无
