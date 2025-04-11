const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

let firstTimeUsers = {};

app.post("/order", (req, res) => {
  const { email, service } = req.body;
  if (!firstTimeUsers[email]) {
    firstTimeUsers[email] = true;
    res.json({ status: "success", message: `Your FREE order for ${service} is placed!` });
  } else {
    res.json({ status: "fail", message: "Free order already used." });
  }
});

app.get("/", (req, res) => {
  res.send("Captain SMM backend is running!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
