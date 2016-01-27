define(id?: String, dependencies?: String[], factory: Function|Object);

define('myModule', ['jquery'], function($) {
		    // $ is the export of the jquery module.
			    $('body').text('hello world');
});
// and use it
require(['myModule'], function(myModule) {});
