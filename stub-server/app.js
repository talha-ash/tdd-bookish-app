import express from "express";
import http from "http";

import cookieParser from "cookie-parser";

import books from "./db.json" with { type: "json" };
import bodyParser from "body-parser";
const app = express();
const { json } = bodyParser
app.set("port", 8080);
app.use(json());
app.use(cookieParser());

const port = app.get("port");

app.all("/*", (req, res, next) => {
  res.set("Content-Type", "application/json");
  res.set("Access-Control-Allow-Origin", req.headers.origin);
  res.set(
    "Access-Control-Allow-Headers",
    "Content-Type,X-Requested-With,Authorization"
  );
  res.set("Access-Control-Allow-Credentials", "true");
  res.set("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
  next();
});

app.get("/books", (req, res) => {
  res.send(books);
});

http.createServer(app).listen(port, () => {
  console.log(`API Server listening on port ${port}`);
});
