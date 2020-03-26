const mysql = require("mysql2");
let connection;

// creates a connection w/ JawsDB if it contains a JawsDB env variable. Otherwise, connects to the local database

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: "localhost",
		port: 3036,
		user: "root",
		password: "",
		database: "burgers_db"
	});
}

// Initiate Connection
connection.connect((err) => {
	if (err) {
		console.error(`Error connecting: ${err.stack}`);
		return;
	}
	console.log(`Connected as id ${connection.threadId}`);
});

// Export the connection

module.exports = connection;
