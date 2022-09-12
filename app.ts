import express, { NextFunction, Request, Response } from "express";
const app = express();
const port = 3009;

app.get("/", (req: Request, res: Response) => {
  res.send("hi hunni");
});

app.listen(port, () => {
  console.log("minimal ex listening on port", port);
});
