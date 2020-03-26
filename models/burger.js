const orm = require("../config/orm.js");

// orm functions go here
const burger = {
	all: function(cb) {
		orm.selectAll("burgers", (result) => {
			cb(result);
		});
	},
	create: (burgerName, cb) => {
		orm.insertOne("burgers", burgerName, (result) => {
			cb(result);
		});
	},
	update: (id, cb) => {
		orm.updateOne("burgers", id, (result) => {
			cb(result);
		});
	}
};

module.exports = burger;
