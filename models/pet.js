const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const petSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: false,
      },

    petImage: {
      type: String,
      required: false,
      default: "edwedweded"
    }, 
 
    animalType: {
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
      type: ObjectId   ,
      ref: "User",
    },
  },
    //testing
  { timestamps: true }
);
        
mongoose.model("Pet", petSchema);
const Pet = mongoose.model("Pet", petSchema);
module.exports = Pet;