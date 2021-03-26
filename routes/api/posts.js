const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const cors = require('./cors');
const requireLogin = require("../../middleware/requireLogin");
//const Post =  mongoose.model("Post")
const Post = require("../../models/Post");
const Useringodb = require("../../models/Userinfodb");

router.route("/allpost")
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, //requireLogin
   (req, res) => {
  Post.find()
 
    .populate("postedBy", "_id name")
    .populate("comments.postedBy", "_id name")
    .sort("-createdAt")
    .then((posts) => {
      console.log(posts)
      res.json({ posts });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/getsubpost", requireLogin, (req, res) => {
  // if postedBy in following
  Post.find({ postedBy: { $in: req.user.following } })
    .populate("postedBy", "_id name")
    .populate("comments.postedBy", "_id name")
    .sort("-createdAt")
    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => {
      console.log(err);
    });
});

// @route POST api/posts/createpost
router.post("/createpost", requireLogin, (req, res) => {
  const {
    pic,
    body,
    //  ,pic
  } = req.body;
  if (
  //  !pic ||
    !body
    //|| !pic
  ) {
    return res.status(422).json({ error: "Plase add  all the fields" });
  }
  // req.user.password = undefined
  const post = new Post({
    pic,
    body,

   
    postedBy: req.user,
    postedByPrivate: req.user,
  
  });
  //console.log(req.user);
  console.log("I am looking ");

  post
    .save()
    .then((result) => {
      //console.log("I am looking ");
      res.json({ post:result  });
    })
    .catch((err) => {
      console.log(err);
    });
});
 


router.get("/mypost", requireLogin,(req, res) => {
  Post.find({ postedByPrivate: req.user._id })
    .populate("postedByPrivate", "_id name")
    .then((result) => {
      //console.log(result);
      res.json({ mypost:result  });
    })
    .catch((err) => {
      console.log(err);
    });
});


// router.route("/mypost")
// .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
// .get(cors.cors,//requireLogin,
//   (req, res) => {
//   Post.find({ postedBy: req.user._id })
//     .populate("postedBy", "_id name")
//     .then((mypost) => {
//       //console.log(result);
//       res.json({ mypost });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });



module.exports = router;
