/* global requirejs:true */

sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/thirdparty/require"
], function (Controller) {
	"use strict";

	return Controller.extend("nickcode_ru_external_js.controller.View1", {
		onInit: function () {
			var oLabel = this.getView().byId("labelId");

			var oPromise = new Promise(function (resolve, reject) {
					requirejs.config({
						paths: {
							"date_fns": ["//cdnjs.cloudflare.com/ajax/libs/date-fns/1.30.1/date_fns.min"]
						}
					});

					resolve();
			});

			oPromise.then(require(["date_fns"], function (oDateFns) {
				oLabel.setText(oDateFns.parse("03.06.2020", "dd.MM.yyyy", new Date()));
			}));

		}
	});
});