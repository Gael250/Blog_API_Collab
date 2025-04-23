const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/userController");
const auth = require("../Middleware/auth");
const roleCheck = require("../Middleware/roleCheck");


router.get("/", auth, roleCheck("admin"), userCtrl.getAllUsers);
router.get("/:id", auth, userCtrl.getUserById);
router.put("/:id", auth, userCtrl.updateUser);
router.delete("/:id", auth, roleCheck("admin"), userCtrl.deleteUser);

module.exports = router;