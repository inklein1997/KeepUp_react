const router = require("express").Router();
const {
  linkProjectToUser,
  deleteProject,
  createProject,
} = require("../../controllers/projectControllers");

router.route("/").delete(deleteProject).post(createProject);

router.route("/UTR").post(linkProjectToUser);

module.exports = router;
