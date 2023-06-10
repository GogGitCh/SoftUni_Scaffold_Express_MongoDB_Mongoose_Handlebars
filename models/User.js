const { Schema, model } = require("mongoose");

//TODO Add user properties and validation according to assigment
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: [3, "Username must be at least 3 characters long!"],
  },
  hashedPassword: { type: String, required: true },
});

const User = model("User", userSchema);

userSchema.index(
  { username: 1 },
  {
    collation: {
      locale: "en",
      strength: 2,
    },
  }
);

module.exports = User;
