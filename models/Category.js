const { model, Schema } = require("mongoose");

const CategorySchema = new Schema({
  name: String,
  image: String,
  recipies: [{ type: Schema.Types.ObjectId, ref: "Recipe" }],
});

module.exports = model("Category", CategorySchema);
