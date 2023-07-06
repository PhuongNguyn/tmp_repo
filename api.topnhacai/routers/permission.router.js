const authorize = require("../middleware/authorize");
const Role = require("../helpers/role");
const express = require("express");
const router = express.Router();
const {
  getAllPermission,
  createPermission,
  updatePermission,
  deletePermission,
  getPermissionByRole,
} = require("../controllers/permission.controller");

router.get("/permission/getPermissions", getAllPermission);

const permissionFunction = require("../helpers/permissionFunction");
const permissionFieldName = require("../helpers/permissionFieldName");

router.get(
  "/permission",
  //   authorize(permissionFunction.PERMISSION, permissionFieldName.GET),
  authorize(),
  getAllPermission
);

router.get("/permission/getByRole", authorize(), getPermissionByRole);
router.post(
  "/permission",
  authorize(permissionFunction.PERMISSION, permissionFieldName.ADD),
  createPermission
);
router.put(
  "/permission/:id",
  authorize(permissionFunction.PERMISSION, permissionFieldName.EDIT),
  updatePermission
);
router.delete(
  "/permission/:id",
  authorize(permissionFunction.PERMISSION, permissionFieldName.DELETE),
  deletePermission
);

module.exports = router;
