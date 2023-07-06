const express = require("express");
const router = express.Router();
const authorize = require("../middleware/authorize");
const {
  create,
  getById,
  remove,
  update,
  getAll,
} = require("../controllers/domain.controller");
const Role = require("../helpers/role");
const permissionFunction = require("../helpers/permissionFunction");
const permissionFieldName = require("../helpers/permissionFieldName");

router.get("/domains", getAll);
router.get("/domains/getById/:id", getById);
router.post(
  "/domains",
  authorize(permissionFunction.DOMAIN, permissionFieldName.ADD),
  create
);
router.put(
  "/domains/:id",
  authorize(permissionFunction.DOMAIN, permissionFieldName.EDIT),
  update
);
router.delete(
  "/domains/remove/:id",
  authorize(permissionFunction.DOMAIN, permissionFieldName.DELETE),
  remove
);

module.exports = router;
