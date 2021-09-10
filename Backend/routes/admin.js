const router = require("express").Router();
const Admin = require("../models/adminModel");

router.route("/").get((req, res) => {
  User.find()
    .then((admins) => res.json(admins))
    .catch((err) => res.statusMessage(400).json("Error: " + err));
});

module.exports = router;
