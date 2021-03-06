const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const db = require('./models');
const { Group } = db;

var corsOptions = {
	origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", async (req, res) => {
	let groups = await Group.findAll();
	res.json({
		message: "Welcome to test application.",
		groups
	});
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
