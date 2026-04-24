const express = require("express");
const router = express.Router();
const {
  createNote,
  bulkCreateNotes,
  getAllNotes,
  getNoteById,
  replaceNote,
  updateNote,
  deleteNote,
  bulkDeleteNotes,
} = require("../controllers/note.controller");

// POST /api/notes — Create a single note
router.post("/", createNote);

// POST /api/notes/bulk — Create multiple notes
router.post("/bulk", bulkCreateNotes);

// GET /api/notes — Get all notes
router.get("/", getAllNotes);

// DELETE /api/notes/bulk — Delete multiple notes (MUST be before /:id)
router.delete("/bulk", bulkDeleteNotes);

// GET /api/notes/:id — Get a single note by ID
router.get("/:id", getNoteById);

// PUT /api/notes/:id — Replace a note completely
router.put("/:id", replaceNote);

// PATCH /api/notes/:id — Update specific fields only
router.patch("/:id", updateNote);

// DELETE /api/notes/:id — Delete a single note
router.delete("/:id", deleteNote);

module.exports = router;
