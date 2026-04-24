const express = require("express");
const router = express.Router();
const { createNote, bulkCreateNotes, getAllNotes } = require("../controllers/note.controller");

// POST /api/notes — Create a single note
router.post("/", createNote);

// POST /api/notes/bulk — Create multiple notes
router.post("/bulk", bulkCreateNotes);

// GET /api/notes — Get all notes
router.get("/", getAllNotes);

module.exports = router;
