const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

exports.signup = (req, res) => {
    console.log(req.body)
User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    gender: req.body.gender,
    dob: req.body.dob,
    privacy_sharing: req.body.privacy_sharing,
    created_on: Date.now()
  })
  .then((value)=>{
      res.status(201).send({message: "User was registered successfully!"})
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
}

  exports.signin = (req, res) => {
    User.findOne({
      where: {
        username: req.body.username
      }
    })
      .then(user => {
        if (!user) {
          return res.status(404).send({ message: "User Not found." });
        }
        var passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
        );
        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!"
          });
        }
        var token = jwt.sign({ id: user.user_id }, config.secret, {
          expiresIn: 86400
        });
          res.status(200).send({
            user_id: user.user_id,
            username: user.username,
            email: user.email,
            accessToken: token
        });
    });
}