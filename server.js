const express = require("express");

const app = express();
const listener = app.listen(4444, () => {
	console.log(`webserver started to ${listener.address().port} potr`);
});
