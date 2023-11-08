const { model, Schema } = require("mongoose");

const ingredientSchema = new Schema({
  name: String,
  image: String,
  recipes: [{ type: Schema.Types.ObjectId, ref: "recipe" }],
});

module.exports = model("ingredient", ingredientSchema);
