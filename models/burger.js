const orm = require("../config/orm.js");

// orm functions go here
const burger = {
	all: function(cb) {
		orm.selectAll("burgers", (res) => {
			cb(res);
		});
	},
	create: (burgerName, cb) => {
		orm.insertOne("burgers", burgerName, (res) => {
			cb(res);
		});
	},
	update: (id, cb) => {
		orm.updateOne("burgers", id, (res) => {
			cb(res);
		});
	}
};

module.exports = burger;
