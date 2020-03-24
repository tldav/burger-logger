const orm = require("../config/orm.js");

// orm functions go here
const burger = {
	selectAll: (cb) => {
		orm.selectAll("burgers", (res) => {
			cb(res);
		});
	},
	insertOne: (burgerName, cb) => {
		orm.insertOne("burgers", burgerName, (res) => {
			cb(res);
		});
	},
	updateOne: (id, cb) => {
		orm.updateOne("burgers", id, (res) => {
			cb(res);
		});
	}
};

module.exports = burger;
