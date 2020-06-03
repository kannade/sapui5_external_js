/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"nickcode_ru_external_js/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});