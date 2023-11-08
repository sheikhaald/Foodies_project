const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  username: String,
  password: String,
  email: String,
  recipies: [{ type: Schema.Types.ObjectId, ref: "Recipe" }],
});

module.exports = model("User", UserSchema);
