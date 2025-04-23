const User = require("../models/User");

exports.getAllUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};

exports.getUserById = async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
};

exports.updateUser = async (req, res) => {
  if (req.user.id !== req.params.id && req.user.role !== "admin") {
    return res.status(403).json({ error: "Not authorized" });
  }

  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).select("-password");
  res.json(updatedUser);
};

exports.deleteUser = async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "Only admin can delete users" });
  }

  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
};
