require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const cookieSession = require("cookie-session");
const pool = require('./db/db');
const memoriesRoutes = require("./Routes/memories");
app.use(cors());
app.use(express.json());
app.use(
  cookieSession({
    name: "SESH",
    keys: ["key1,", "key2"],
  })
);
pool.connect(() => console.log("------------Connected to Database--------------"));

app.use(memoriesRoutes);
app.get("/", (req, res) => {
  const data = {
    first: "Prabhu",
    second: "Vardhan",
  };
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`The server is up and running and is listening on port:${PORT}`);
});
