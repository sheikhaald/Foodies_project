const { model, Schema } = require("mongoose");

const CategorySchema = new Schema({
  name: String,
  age: String,
  movies: [{ type: Schema.Types.ObjectId, ref: "Movie" }],
});

module.exports = model("Category", CategorySchema);
