const connection = require("./connection.js");

const orm = {
	selectAll: () => {
		const query = "SELECT * FROM burgers";

		connection.query(query, (err, result) => {
			if (err) throw err;
			console.log(result);
		});
	},
	insertOne: (burgerName) => {
		const query = "INSERT INTO burgers (burger_name) VALUE (?)";

		connection.query(query, [burgerName], (err, result) => {
			if (err) throw err;
			console.log(result);
		});
	},
	updateOne: (id) => {
		const query = "UPDATE burgers SET devoured=true WHERE id=?";

		connection.query(query, [id], (err, result) => {
			if (err) throw err;
			console.log(result);
		});
	}
};

module.exports = orm;
