const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongoose databse connected successfully");
});

const allUsers = require("./routes/users");
app.use("/users", allUsers);

app.listen(port, () => console.log(`Server running on port: ${port}`));
