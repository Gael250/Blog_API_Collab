const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  
  content: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },

  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

module.exports = mongoose.model("Blog", blogSchema);
