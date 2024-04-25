const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/mm", (req, res) => {
	let msgs = ["live and let live", "just do it", "just did it", "u can win", "nothing is impossible", "live big"];
	let r = parseInt(Math.random() * msgs.length);
	res.send({"msg": msgs[r]});
	res.end();
});


app.listen(9000, () => {  console.log("read @ 9000"); } );