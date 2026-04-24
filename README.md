# 📝 Notes Management REST API

A clean, structured **REST API** built with **Node.js**, **Express**, and **MongoDB (Mongoose)** for full CRUD management of notes. Follows MVC architecture with proper HTTP methods, status codes, and consistent response formatting.

> 🚀 **Live API:** `https://notes-app-x8s0.onrender.com`

---

## 📌 Table of Contents

- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Reference](#-api-reference)
- [Response Format](#-response-format)
- [HTTP Status Codes](#-http-status-codes)
- [Data Model](#-data-model)

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| **Node.js** | Runtime environment |
| **Express.js** | Web framework |
| **MongoDB** | NoSQL database |
| **Mongoose** | MongoDB ODM |
| **dotenv** | Environment variable management |
| **Nodemon** | Dev auto-restart |

---

## 📁 Project Structure

```
notes-app/
│
├── src/
│   ├── config/
│   │   └── db.js               # MongoDB connection
│   │
│   ├── models/
│   │   └── note.model.js       # Mongoose schema & model
│   │
│   ├── controllers/
│   │   └── note.controller.js  # All business logic & DB queries
│   │
│   ├── routes/
│   │   └── note.routes.js      # Route definitions only
│   │
│   ├── middlewares/            # (reserved for future use)
│   │
│   ├── app.js                  # Express setup & route mounting
│   └── index.js                # Server entry point
│
├── .env                        # Environment variables (not committed)
├── .env.example                # Environment variable template
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (or local MongoDB)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/daksh006v/notes-app.git
cd notes-app
```

**2. Install dependencies**
```bash
npm install
```

**3. Set up environment variables**
```bash
cp .env.example .env
```
Then fill in your values in `.env` (see [Environment Variables](#-environment-variables)).

**4. Start the development server**
```bash
npm run dev
```

**5. Start the production server**
```bash
npm start
```

The server runs on `http://localhost:5000` by default.

---

## 🔐 Environment Variables

Create a `.env` file in the root directory based on `.env.example`:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/notes-db
PORT=5000
```

| Variable | Description |
|---|---|
| `MONGO_URI` | Your MongoDB Atlas connection string |
| `PORT` | Port the server listens on (default: 5000) |

---

## 📡 API Reference

**Base URL:** `/api/notes`

### Endpoints Overview

| # | Method | Endpoint | Description |
|---|--------|----------|-------------|
| 1 | `POST` | `/api/notes` | Create a single note |
| 2 | `POST` | `/api/notes/bulk` | Create multiple notes at once |
| 3 | `GET` | `/api/notes` | Get all notes |
| 4 | `GET` | `/api/notes/:id` | Get a single note by ID |
| 5 | `PUT` | `/api/notes/:id` | Replace a note completely |
| 6 | `PATCH` | `/api/notes/:id` | Update specific fields only |
| 7 | `DELETE` | `/api/notes/:id` | Delete a single note |
| 8 | `DELETE` | `/api/notes/bulk` | Delete multiple notes by IDs |

---

### 1. `POST /api/notes` — Create a Note

**Request Body:**
```json
{
  "title": "Team standup agenda",
  "content": "Discuss sprint blockers and deployment plan",
  "category": "work",
  "isPinned": true
}
```

**Success Response — `201 Created`:**
```json
{
  "success": true,
  "message": "Note created successfully",
  "data": { }
}
```

---

### 2. `POST /api/notes/bulk` — Create Multiple Notes

**Request Body:**
```json
{
  "notes": [
    { "title": "Note one",   "content": "Content one",   "category": "work"     },
    { "title": "Note two",   "content": "Content two",   "category": "study"    },
    { "title": "Note three", "content": "Content three", "category": "personal" }
  ]
}
```

**Success Response — `201 Created`:**
```json
{
  "success": true,
  "message": "3 notes created successfully",
  "data": [ ]
}
```

---

### 3. `GET /api/notes` — Get All Notes

**No request body required.**

**Success Response — `200 OK`:**
```json
{
  "success": true,
  "message": "Notes fetched successfully",
  "data": [ ]
}
```

---

### 4. `GET /api/notes/:id` — Get Note by ID

**No request body required.**

**Success Response — `200 OK`:**
```json
{
  "success": true,
  "message": "Note fetched successfully",
  "data": { }
}
```

---

### 5. `PUT /api/notes/:id` — Replace a Note Completely

> ⚠️ **PUT = Full replacement.** Fields not sent will reset to their schema defaults.

**Request Body:**
```json
{
  "title": "Completely new title",
  "content": "Completely new content",
  "category": "personal",
  "isPinned": false
}
```

**Success Response — `200 OK`:**
```json
{
  "success": true,
  "message": "Note replaced successfully",
  "data": { }
}
```

---

### 6. `PATCH /api/notes/:id` — Update Specific Fields Only

> ✅ **PATCH = Partial update.** Only the fields you send will change. Others remain untouched.

**Request Body:**
```json
{
  "isPinned": true
}
```

**Success Response — `200 OK`:**
```json
{
  "success": true,
  "message": "Note updated successfully",
  "data": { }
}
```

---

### 7. `DELETE /api/notes/:id` — Delete a Single Note

**No request body required.**

**Success Response — `200 OK`:**
```json
{
  "success": true,
  "message": "Note deleted successfully",
  "data": null
}
```

---

### 8. `DELETE /api/notes/bulk` — Delete Multiple Notes

**Request Body:**
```json
{
  "ids": [
    "64b1f2c3e4d5a6b7c8d9e0f1",
    "64b1f2c3e4d5a6b7c8d9e0f2"
  ]
}
```

**Success Response — `200 OK`:**
```json
{
  "success": true,
  "message": "2 notes deleted successfully",
  "data": null
}
```

---

## 📦 Response Format

Every response — success or error — follows this exact structure:

```json
{
  "success": true | false,
  "message": "Human-readable string",
  "data": { } | [ ] | null
}
```

---

## 🔢 HTTP Status Codes

| Code | When Used |
|------|-----------|
| `200` | Successful `GET`, `PUT`, `PATCH`, `DELETE` |
| `201` | Successful `POST` — note(s) created |
| `400` | Missing required fields / empty body / invalid ObjectId / empty array |
| `404` | Note not found with the given `_id` |
| `500` | Unexpected server or database error |

---

## 🗄 Data Model

**File:** `src/models/note.model.js`

| Field | Type | Required | Details |
|-------|------|----------|---------|
| `title` | `String` | ✅ Yes | Cannot be empty |
| `content` | `String` | ✅ Yes | Cannot be empty |
| `category` | `String` | ❌ No | Enum: `work` / `personal` / `study` — Default: `personal` |
| `isPinned` | `Boolean` | ❌ No | Default: `false` |
| `createdAt` | `Date` | Auto | Auto-generated by `timestamps: true` |
| `updatedAt` | `Date` | Auto | Auto-generated by `timestamps: true` |

---

## 🔍 PUT vs PATCH — Key Difference

| | `PUT` | `PATCH` |
|--|-------|---------|
| **Meaning** | Replace the entire document | Update only the fields you send |
| **Fields not sent** | Reset to schema defaults | Stay unchanged |
| **Use case** | Full form submission | Toggle `isPinned`, change one field |

---

## 📜 Scripts

```bash
npm run dev     # Start with nodemon (auto-restart on save)
npm start       # Start production server
```

---

## 👨‍💻 Author

**Daksh** — [GitHub](https://github.com/daksh006v)
