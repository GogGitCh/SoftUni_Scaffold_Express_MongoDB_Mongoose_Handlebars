const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const JWT_SECRET =
  "KJBkj7bkjB4BkbH4jvJG74GJ43G34JV3754y5988776824G4735g7LJG45312412j45g3j3g7J3v7jg3j77VJsagasgad3VJ457VJ4373JLK34";

async function register(username, password) {
  const existing = await User.findOne({ username }).collation({
    locale: "en",
    strength: 2,
  });

  if (existing) {
    throw new Error("Username is taken!");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    hashedPassword,
  });

  // TODO see assigment if registration creates user session
  const token = createSession(user);

  return token;
}

async function login(username, password) {
  const user = await User.findOne({ username }).collation({
    locale: "en",
    strength: 2,
  });

  if (!user){
    throw new Error('Incorrect user or password');
}

const hasMatch = await bcrypt.compare(password, user.hashedPassword);

if (hasMatch == false) {
    throw new Error('Incorrect user or password');
  }

  return createSession(user);
   
}

async function createSession({ _id, username }) {
  const payload = {
    _id,
    username,
  };

  return jwt.sign(payload, JWT_SECRET);
  
}

async function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET);   
}

module.exports = {
  register,
  login,
  verifyToken,
};
