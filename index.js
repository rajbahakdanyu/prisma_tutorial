const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send("Its alive");
});

app.listen(5000, () => {
	console.log("Listening on Port 5000");
});
