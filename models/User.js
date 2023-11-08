const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  recipes: [{ type: Schema.Types.ObjectId, ref: "recipe" }],
});

module.exports = model("user", recipeSchema);
