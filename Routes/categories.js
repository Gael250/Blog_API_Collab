import express from "express";
import { 
  getAllCategories, 
  getCategoryById, 
  createCategory, 
  updateCategory, 
  deleteCategory 
} from "../controllers/categoryController.js";
import { authenticate } from "../middleware/auth.js";
import { checkRole } from "../middleware/roleCheck.js";

const router = express.Router();

router.get("/", getAllCategories);
router.get("/:id", getCategoryById);

router.post("/", authenticate, checkRole("admin"), createCategory);
router.put("/:id", authenticate, checkRole("admin"), updateCategory);
router.delete("/:id", authenticate, checkRole("admin"), deleteCategory);

export default router;