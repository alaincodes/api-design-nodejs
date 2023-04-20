import express from "express";

const app = express();

app.get("/", (req, res) => {
	console.log("express lol");
	res.status(200);
	res.json({ message: "hello" });
});

export { app };
