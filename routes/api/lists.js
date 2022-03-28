const router = require("express").Router();
const {
  deleteList,
  createList,
  getAllLists,
  updateList,
} = require("../../controllers/listControllers");

router.route("/").get(getAllLists).post(createList);

router.route("/:id").put(updateList).delete(deleteList);

module.exports = router;
