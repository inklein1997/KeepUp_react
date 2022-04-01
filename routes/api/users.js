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
router.route("/:id").get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;
