import express, { NextFunction, Request, Response } from "express";
const path = require("path");

const app = express();
const port = 3009;
app.use(express.static(path.resolve(__dirname, "dist")));

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log("minimal ex listening on port", port);
});
