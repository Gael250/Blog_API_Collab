const express = require("express");
const router = express.Router();
const blogCtrl = require("../controller/blogController.js");
const auth = require("../Middleware/auth");
const ownerCheck = require("../Middleware/ownerCheck");

router.get("/", blogCtrl.getAllBlogs);
router.get("/:id", blogCtrl.getBlogById);
router.get("/category/:categoryId", blogCtrl.getBlogsByCategory);

router.post("/", auth, blogCtrl.createBlog);
router.put("/:id", auth, ownerCheck, blogCtrl.updateBlog);
router.delete("/:id", auth, ownerCheck, blogCtrl.deleteBlog);

module.exports = router;