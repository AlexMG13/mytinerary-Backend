const { Schema, model } = require("mongoose");

const schemaUser = new Schema({
  name: {
    type: "string",
    required: true,
  },
  lastname: {
    type: "string",
    required: true,
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
    required: true,
  },
  country: {
    type: "string",
    required: true,
  },
})

const User = model("User", schemaUser);
module.exports = User;
