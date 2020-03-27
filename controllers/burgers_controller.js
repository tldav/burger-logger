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

router.post("/api/burgers", (req, res) => {
	burger.create(req.body.name, (data) => {
		console.log(data);
		res.json({ id: data.insertId });
	});
});

router.put("/api/burgers/:id", (req, res) => {
	burger.update(req.params.id, (data) => {
		console.log(data);
		res.sendStatus(200);
	});
});
module.exports = router;
