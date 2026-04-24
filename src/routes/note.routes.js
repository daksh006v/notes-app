const express = require("express");
const router = express.Router();
const { createNote, bulkCreateNotes, getAllNotes, getNoteById } = require("../controllers/note.controller");

// POST /api/notes — Create a single note
router.post("/", createNote);

// POST /api/notes/bulk — Create multiple notes
router.post("/bulk", bulkCreateNotes);

// GET /api/notes — Get all notes
router.get("/", getAllNotes);

// GET /api/notes/:id — Get a single note by ID
router.get("/:id", getNoteById);

module.exports = router;
