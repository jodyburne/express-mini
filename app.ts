import express, { NextFunction, Request, Response } from "express";
import webpack from "webpack";
import webpackConfig from "./webpack.config";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

const compiler = webpack(webpackConfig);

const path = require("path");

const app = express();
const port = 3009;
app.use(express.static(path.resolve(__dirname, "dist")));

app.use(webpackDevMiddleware(compiler, {}));
app.use(webpackHotMiddleware(compiler, {}));

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log("minimal ex listening on port", port);
});
