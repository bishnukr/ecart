const express = require("express");
const app = express();
require("./db/config");
const User = require("./db/User");
const port = process.env.port || 5500;
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  res.send(result);
});

app.post("/login", async (req, res) => {
  let user = await User.findOne(req.body).select("-password");
  if (user) {
    res.send(user);
  } else {
    res.send({ result: "User not found" });
  }
});

app.listen(port, () => {
  console.log(`connection is setup ${port}`);
});
