const User = require("../models/User");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const LocalStrategy = require("passport-local").Strategy;
const JWTStrategy = require("passport-jwt").Strategy;
const { fromAuthHeaderAsBearerToken } = require("passport-jwt").ExtractJwt;
const localStrategy = new LocalStrategy(
  {
    usernameField: "username",
  },
  async (username, password, done) => {
    try {
      const user = await User.findOne({ username: username });
      if (!user) return done({ message: "username or password is wrong" });
      const checkPass = await bcrypt.compare(password, user.password);
      if (!checkPass) return done({ message: "username or password is wrong" });
      return done(null, user);
    } catch (error) {
      done(error);
    }
  }
);

const jwtStrategy = new JWTStrategy(
  {
    jwtFromRequest: fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.PRIVATE_KEY,
  },
  async (payload, done) => {
    try {
      // this is not the best way to do it
      const user = await User.findById(payload._id);
      done(null, user);
    } catch (error) {
      done(error);
    }
  }
);

module.exports = { localStrategy, jwtStrategy };
