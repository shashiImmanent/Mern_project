const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    minlength: 3,
  },

  phone: {
    type: Number,
    required: true,
    min: 10,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    validator(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email id");
      }
    },
  },

  message: {
    type: String,
    required: true,
  },

  date:{
      type:Date,
      default: Date.now,
  },
});


// model 
const User = new mongoose.model("User",userSchema);
module.exports = User;