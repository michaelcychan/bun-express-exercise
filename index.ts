import express from "express";
import {hello} from './src/hello'

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const message = hello(req.query as Record<string, string>)
  res.json({ message});
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});