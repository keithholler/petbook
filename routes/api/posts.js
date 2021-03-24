const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const cors = require('./cors');
const requireLogin = require("../../middleware/requireLogin");
//const Post =  mongoose.model("Post")
const Post = require("../../models/Post");

router.route("/allpost")
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, //requireLogin
   (req, res) => {
  Post.find()
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
    !pic ||
    !body
    //|| !pic
  ) {
    return res.status(422).json({ error: "Plase add all the fields" });
  }
  // req.user.password = undefined
  const post = new Post({
    pic,
    body,
    // photo:pic,

    postedBy: req.user,
    postedByPrivate: req.user,
  });
  console.log(req.user);
  post
    .save()
    .then((result) => {
      res.json({ post:result  });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/mypost", requireLogin, (req, res) => {
  Post.find({ postedBy: req.user._id })
    .populate("PostedBy", "_id name")
    .then((mypost) => {
      res.json({ mypost });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;