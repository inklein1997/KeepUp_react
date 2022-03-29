const router = require("express").Router();
const userRoutes = require("./users");
const taskRoutes = require("./tasks");
const projectRoutes = require("./projects");
const noteRoutes = require("./notes");
const listRoutes = require("./lists");


router.use("/users", userRoutes);
router.use("/tasks", taskRoutes);
router.use("/projects", projectRoutes);
router.use("/notes", noteRoutes);
router.use("/lists", listRoutes);

module.exports = router;
