const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const petSchema = new mongoose.Schema(
  {
    naem: {
        type: String,
        required: false,
      },

    petImage: {
      type: String,
      required: false,
      default: "edwedweded"
    }, 
 
    anamilType: {
        type: String,
        required: false,
      },

      breed: {
        type: String,
        required: false,
      },

      mainColor: {
        type: String,
        required: false,
      },

      secondaryColor: {
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
  },

  { timestamps: true }
);

mongoose.model("Pet", petSchema);
const Pet = mongoose.model("Pet", petSchema);
module.exports = Userinfodb;