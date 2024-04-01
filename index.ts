import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // send a simple json response
  console.log(req.query)

  const name = req.query?.name || "World";
  res.json({ message: `Hello ${name}!` });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});