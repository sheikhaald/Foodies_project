const Category = require("../../models/Category");

exports.findCategory = async (CategoryId, next) => {
  try {
    const category = await Category.findById(CategoryId);
    if (category) return category;
    next({ message: "Category not found", status: 404 });
  } catch (error) {
    next(error);
  }
};

exports.getAllCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};

exports.addCategory = async (req, res, next) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (error) {
    next(error);
  }
};

exports.deleteCategory = async (req, res, next) => {
  try {
    await req.category.deleteOne();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.getOneCategory = async (req, res, next) => {
  try {
    const category = await req.category;
    res.status(200).json(category);
  } catch (error) {
    next(error);
  }
};
