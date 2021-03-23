const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const cors = require('./cors');
const requireLogin = require("../../middleware/requireLogin");
//const Post =  mongoose.model("Post")
const Userinfodb = require("../../models/UserInfoDB");


// @route POST api/posts/createpost
router.post("/createuserdata", requireLogin, (req, res) => {
    const {
      profileImage,
      firstName,
      lastName,
      about
      //  ,pic
    } = req.body;
    if (
        !profileImage ||
        !firstName ||
        !lastName ||
        !about
      //|| !pic
    ) {
      return res.status(422).json({ error: "Plase add all the fields" });
    }
    // req.user.password = undefined
    const userinfodb = new Userinfodb({
        profileImage,
        firstName,
        lastName,
        about,
      // photo:pic,
  
    //   postedBy: req.user,
      userIdentity: req.user,
    });
    console.log(req.user);
    userinfodb
      .save()
      .then((result) => {
        res.json({ userinfodb:result  });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  module.exports = router;