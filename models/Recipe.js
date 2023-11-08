const { model, Schema } = require("mongoose");

const RecipeSchema = new Schema({
  name: String,
  description: String,
  cookTime: String,
  image: String,
  category: [{ type: Schema.Types.ObjectId, ref: "Category" }],
  user: [{ type: Schema.Types.ObjectId, ref: "User" }],
  ingredient: [{ type: Schema.Types.ObjectId, ref: "Ingredient" }],
});

module.exports = model("Recipe", RecipeSchema);
