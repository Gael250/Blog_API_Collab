const express = require("express");
const router = express.Router();
const catCtrl = require("../controller/categoryController.js");
const auth = require("../Middleware/auth");
const roleCheck = require("../Middleware/roleCheck");

router.get("/", catCtrl.getAllCategories);
router.get("/:id", catCtrl.getCategoryById);

router.post("/", auth, roleCheck("admin"), catCtrl.createCategory);
router.put("/:id", auth, roleCheck("admin"), catCtrl.updateCategory);
router.delete("/:id", auth, roleCheck("admin"), catCtrl.deleteCategory);

module.exports = router;
