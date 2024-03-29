const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8080 || 5000;

app.use(cors());
app.use(express.json());

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
