import express from "express";
import { 
  getAllBlogs, 
  getBlogById, 
  createBlog, 
  updateBlog, 
  deleteBlog, 
  getBlogsByCategory 
} from "../controllers/blogController.js";
import { authenticate } from "../middleware/auth.js";
import { checkOwner } from "../middleware/ownerCheck.js";

const router = express.Router();

router.get("/", getAllBlogs);
router.get("/:id", getBlogById);
router.get("/category/:categoryId", getBlogsByCategory);

router.post("/", authenticate, createBlog);
router.put("/:id", authenticate, checkOwner, updateBlog);
router.delete("/:id", authenticate, checkOwner, deleteBlog);

export default router;