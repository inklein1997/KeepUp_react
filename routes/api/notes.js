const router = require("express").Router();
const {
  getAllNotes,
  deleteNote,
  updateNote,
  createNote,
} = require("../../controllers/noteControllers");

router.route("/").get(getAllNotes).post(createNote);

router.route("/:id").put(updateNote).delete(deleteNote);

module.exports = router;
