import Blog from "../models/Blog.js";

export const checkOwner = async (req, res, next) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) return res.status(404).json({ error: "Blog not found" });

  if (blog.author.toString() !== req.user.id && req.user.role !== "admin") {
    return res.status(403).json({ error: "Not authorized" });
  }

  next();
};