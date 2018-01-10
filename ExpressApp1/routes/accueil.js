'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
	
	/*var $ = require("jquery");
	$("connection").hide();
	console.log("Testttttt");
	$("#connection").click(function () {

		$("#formConnection").hide("slow", function () {
			alert("Animation complete.");
		});
	});*/
	res.render('accueil.ejs');
});

module.exports = router;
