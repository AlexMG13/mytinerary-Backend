const { Schema, model } = require("mongoose");

const schemaUser = new Schema({
  name: {
    type: "string",
    required: true,
  },
  lastname: {
    type: "string",
<<<<<<< HEAD
=======

>>>>>>> sprint-4
  },
  email: {
    type: "string",
    required: true,
  },
  password: {
    type: "string",
    required: true,
  },
  photo: {
    type: "string",
  
  },
  country: {
    type: "string",

  },
})

const User = model("User", schemaUser);
module.exports = User;
