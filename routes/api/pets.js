const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const cors = require('./cors');
const requireLogin = require("../../middleware/requireLogin");
//const Post =  mongoose.model("Post")
const Pet = require("../../models/Pet");





// @route POST api/pets/createpet
router.post("/createpet", requireLogin, (req, res) => {
    const {
        name,
        petImage,
        animalType,
        breed,
        mainColor,
        secondaryColor,
        about
      //  ,pic
    } = req.body;
    if ( 
        !name||
        !animalType ||
        !breed ||
        !mainColor
    ) {
      return res.status(422).json({ error: "Plase add all the fields" });
    }
    // req.user.password = undefined
    const pet = new Pet({ 
        name,
        petImage,
        animalType,
        breed,
        mainColor,
        secondaryColor,
        about,

      userIdentity: req.user,
    });
    console.log(req.user);

   pet
      .save()
      .then((result) => {
        res.json({ mydata:[result]  });
      })
      .catch((err) => {
        console.log(err);
      });
  });


  router.get("/mypets", requireLogin, (req, res) => {
    Pet.find({ userIdentity: req.user._id })
      .populate("UserIdentity", "_id name")
      .then((result) => {
        console.log(result);
        res.json({ mydata:result  });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  router.put("/updatepet", requireLogin, (req, res) => {
    Pet.findOneAndUpdate(
      { userIdentity: req.user._id },

      { $set: {
        name : req.body.name,
        petImage  : req.body.petImage,
        anamilType : req.body.anamilType,
        breed : req.body.breed,
        mainColor : req.body.mainColor,
        secondaryColor : req.body.secondaryColor,
        about : req.body.about
       
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

  router.route('/')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
/* GET users listing. */
.get(cors.cors, (req, res, next) => {
  Pet.find()
    .then((result) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({pet:result});
    })
    .catch((err) => next(err));
});

  module.exports = router;