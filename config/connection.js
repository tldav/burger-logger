const mysql = require("mysql2");

const connection = mysql.createConnection({
	host: "localhost",
	port: 3036,
	user: "root",
	password: "",
	database: "burgers_db"
});

connection.connect((err) => {
	if (err) {
		console.error(`Error connecting: ${err.stack}`);
		return;
	}
	console.log(`Connected as id ${connection.threadId}`);
});

module.exports = connection;
