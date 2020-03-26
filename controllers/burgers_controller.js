const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", (req, res) => {
	burger.all((data) => {
		const hbsObject = {
			burgers: data
		};

		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

// router.post("/api/burgers", (req, res) => {
// 	burger.create(req.body.name, (data) => {
// 		console.log(data);
// 		// res.json({ id: data.insertId });
// 		res.redirect("/");
// 	});
// });

module.exports = router;
