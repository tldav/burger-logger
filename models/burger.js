const orm = require("../config/orm.js");

// orm functions go here
const burger = {
	all: function(cb) {
		orm.selectAll("burgers", (result) => {
			cb(result);
		});
	},
	create: (burgerName, cb) => {
		orm.insertOne(burgerName, (result) => {
			cb(result);
		});
	},
	update: (id, cb) => {
		orm.updateOne(id, (result) => {
			cb(result);
		});
	}
};

module.exports = burger;
