const Note = require("../models/note.model");
const mongoose = require("mongoose");

// Helper: validate ObjectId
const isValidId = (id) => mongoose.Types.ObjectId.isValid(id);

// Placeholder — controllers will be added per endpoint
module.exports = {};
