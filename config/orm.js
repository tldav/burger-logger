const connection = require("./connection.js");

// orm object key functions
const orm = {
	selectAll: function(tableInput, cb) {
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	insertOne: (burgerName, cb) => {
		const query = "INSERT INTO burgers (burger_name) VALUE (?)";

		connection.query(query, [burgerName], (err, result) => {
			if (err) throw err;
			cb(result);
		});
	},
	updateOne: (id, cb) => {
		const query = "UPDATE burgers SET devoured=true WHERE id=?";

		connection.query(query, [id], (err, result) => {
			if (err) throw err;
			cb(result);
		});
	}
};

module.exports = orm;

// selectAll: (cb) => {
//     const query = "SELECT * FROM burgers";

//     connection.query(query, (err, result) => {
//         if (err) throw err;

//         cb(result);
//     });
// },
