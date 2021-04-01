const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const userinfodbSchema = new mongoose.Schema(
  {
    profileImage: {
      type: String,
      required: false,
      default: "edwedweded"
    }, 
    firstName: {
      type: String,
      required: false,
    },
    lastName: {
        type: String,
        required: false,
      },
      about: {
        type: String,
        required: false,
      },

    userIdentity: {
      type: ObjectId,
      ref: "User",
    },
    userEmail: {
      type: String,
     
    },
  },
       
  { timestamps: true }
);

mongoose.model("Userinfodb", userinfodbSchema);
const Userinfodb = mongoose.model("Userinfodb", userinfodbSchema);
module.exports = Userinfodb;
