const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const cors = require('./cors');
const requireLogin = require("../../middleware/requireLogin");
//const Post =  mongoose.model("Post")
const Userinfodb = require("../../models/Userinfodb");


// @route POST api/posts/userinfodb
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

      userIdentity: req.user,
      userEmail:req.user.email
    });
    console.log(req.user);

   userinfodb
      .save()
      .then((result) => {
        res.json({ mydata:[result]  });
      })
      .catch((err) => {
        console.log(err);
      });
  });


  router.get("/mydata", requireLogin, (req, res) => {
    Userinfodb.find({ userIdentity: req.user._id })
      .populate("UserIdentity", "_id name")
      .then((result) => {
        console.log(result);
        res.json({ mydata:result  });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  router.put("/updatedata", requireLogin, (req, res) => {
    Userinfodb.findOneAndUpdate(
      { userIdentity: req.user._id },

      { $set: {
        profileImage : req.body.profileImage,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        about: req.body.about,
        //userEmail:req.body.email
        // profileImage : "req.body.profileImage",
        // firstName: "req.body.firstName",
        // lastName: "req.body.lastName",
        // about: "req.body.about"
      } },
      { new: true },
      (err, result) => {
        if (err) {
          return res.status(422).json({ error: "pic canot post" });
        }
        res.json({ mydata:[result]  });
      }
    );
  });


  router.route('/alluserinfo')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
/* GET users listing. */
.get(cors.cors, (req, res, next) => {
  Userinfodb.find()
    .then((userinfodb) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({userinfo:userinfodb});
    })
    .catch((err) => next(err));
});


router.route('/')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
/* GET users listing. */
.get(cors.cors, (req, res, next) => {
  Userinfodb.find()
    .then((userinfodb) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({userinfo:userinfodb});
    })
    .catch((err) => next(err));
});

// router.route('/')
// .get(function(req, res) {
//   res.send("Yep it's working");
// });

module.exports = router;