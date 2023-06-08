const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/ecart-login")
  .then(() => {
    console.log("connection is successful..");
  })
  .catch((e) => {
    console.log("no connection");
  });
