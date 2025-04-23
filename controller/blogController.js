const Blogs = require("../Models/blog.js");

exports.getAllBlogs = async (req, res) => {
  const blogs = await Blog.find().populate("author", "username").populate("category", "name");
  res.json(blogs);

};

exports.getBlogById = async (req, res) => {
  const blog = await Blog.findById(req.params.id).populate("author", "username").populate("category", "name");
  if (!blog) return res.status(404).json({ error: "Blog not found" });
  res.json(blog);
};

exports.createBlog = async (req, res) => {
  const blog = new Blog({ ...req.body, author: req.user.id });
  await blog.save();
  
  res.status(201).json(blog);
};

exports.updateBlog = async (req, res) => {
  const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedBlog);
};

exports.deleteBlog = async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ message: "Blog deleted" });
};

exports.getBlogsByCategory = async (req, res) => {
  const blogs = await Blog.find({ category: req.params.categoryId });
  res.json(blogs);
};
