const express = require("express");
const router = express.Router();
const {
  list,
  listSearch,
  remove,
  getByName,
  read,
  update,
  create,
} = require("../controllers/linkFooter.controller");
const permissionFieldName = require("../helpers/permissionFieldName");
const permissionFunction = require("../helpers/permissionFunction");
const authorize = require("../middleware/authorize");
const Role = require("../helpers/role");

router.get("/linkFooters/getAll", list);
router.get("/linkFooters/search", listSearch);
router.get("/linkFooters/getByName/:name", getByName);
router.get("/linkFooters/getById/:id", read);
router.post(
  "/linkFooters",
  authorize(permissionFunction.LINKFOOTER, permissionFieldName.ADD),
  create
);
router.put(
  "/linkFooters/:id",
  authorize(permissionFunction.LINKFOOTER, permissionFieldName.EDIT),
  update
);
router.delete(
  "/linkFooters/remove/:id",
  authorize(permissionFunction.LINKFOOTER, permissionFieldName.DELETE),
  remove
);
module.exports = router;
