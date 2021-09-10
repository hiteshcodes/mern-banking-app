const router = require("express").Router();
const User = require("../models/userModel");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.statusMessage(400).json("Error: " + err));
});

router.route("/addUser").post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const currBalance = 0;
  const newUser = new User({ name, email, currBalance });
  newUser
    .save()
    .then(() => {
      res.json("User added");
      console.log("Added a new user");
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/sendmoney/:id").post((req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      user.currBalance = user.currBalance += req.body.sendAmount;
      user
        .save()
        .then(() => res.json("Money sent"))
        .catch((err) => res.json(400).json("Error: " + err));
    })
    .catch((err) => res.json(400).json("Error: " + err));
});

module.exports = router;
