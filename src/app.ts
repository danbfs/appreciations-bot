import dotevn from "dotenv";
dotevn.config();

import express from "express";
const app = express();
const port = 8080;

app.post("/", async () => {});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
