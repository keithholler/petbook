const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const postSchema = new mongoose.Schema(
  {
    pic: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    // photo:{
    //     type:String,
    //    // required:true
    // },
    likes: [{ type: ObjectId, ref: "User" }],
    comments: [
      {
        text: String,
        postedBy: { type: ObjectId, ref: "User" },
      },
    ],
    postedBy: [{
      type: ObjectId,
      ref: "User",
    }],
    postedByPrivate: {
      type: ObjectId,
      ref: "User",
    },
  },

  { timestamps: true }
);

mongoose.model("Post", postSchema);
const Post = mongoose.model("Post", postSchema);
module.exports = Post;
