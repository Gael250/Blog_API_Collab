import Blog from "../models/Blog.js";

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find()
      .populate("author", "username")
      .populate("category", "name");
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id)
      .populate("author", "username")
      .populate("category", "name");
    if (!blog) return res.status(404).json({ error: "Blog not found" });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch blog" });
  }
};

export const createBlog = async (req, res) => {
  try {
    const { title, content, category } = req.body;
    
    if (!title || !content) {
      return res.status(400).json({ error: "Title and content are required" });
    }

    const blog = new Blog({ 
      title, 
      content, 
      category,
      author: req.user.id 
    });
    
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const { title, content, category } = req.body;
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, content, category },
      { new: true }
    );
    
    if (!updatedBlog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    
    res.json(updatedBlog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete blog" });
  }
};

export const getBlogsByCategory = async (req, res) => {
  try {
    const blogs = await Blog.find({ category: req.params.categoryId })
      .populate("author", "username");
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch blogs by category" });
  }
};