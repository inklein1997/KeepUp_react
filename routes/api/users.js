const router = require("express").Router();
const {
  updateUser,
  createUser,
  getSingleUser,
  loginUser,
  deleteUser,
  logoutUser,
  getProjects,
} = require("../../controllers/userControllers");

router.route("/").post(createUser);
router.route("/login").post(loginUser);
router.route("/logout").post(logoutUser);
router.route("/projects").get(getProjects)
router.route("/:id").put(updateUser).delete(deleteUser);
router.route("/:email").get(getSingleUser);

module.exports = router;
