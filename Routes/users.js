import express from "express";
import { 
  getAllUsers, 
  getUserById, 
  updateUser, 
  deleteUser 
} from "../controllers/userController.js";
import { authenticate } from "../middleware/auth.js";
import { checkRole } from "../middleware/roleCheck.js";

const router = express.Router();

router.get("/", authenticate, checkRole("admin"), getAllUsers);
router.get("/:id", authenticate, getUserById);
router.put("/:id", authenticate, updateUser);
router.delete("/:id", authenticate, checkRole("admin"), deleteUser);

export default router;