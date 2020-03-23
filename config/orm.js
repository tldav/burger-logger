const connection = require("./connection");

const orm = {
	selectAll: () => {
		const query = "SELECT * FROM burgers";

		connection.query(query, (err, result) => {
			if (err) throw err;
			console.log(result);
		});
	},
	insertOne: (burgerName) => {
		const query = "INSERT INTO burgers burger_name VALUE ?";

		connection.query(query, [burgerName], (err, result) => {
			if (err) throw err;
			console.log(result);
		});
	},
	updateOne: (id, isEaten) => {
		const query = "UPDATE devoured WHERE id=?";
	}
};

module.exports = orm;
