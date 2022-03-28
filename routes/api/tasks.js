const router = require("express").Router();
const {
  updateTask,
  addTask,
  getTasks,
  deleteTask,
} = require("../../controllers/taskControllers");

router.route("/").get(getTasks).post(addTask);

router.route("/:id").put(updateTask).delete(deleteTask);

module.exports = router;
