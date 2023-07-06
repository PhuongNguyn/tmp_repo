const express = require("express");
const router = express.Router();
const authorize = require("../middleware/authorize");
const {
  create,
  getByPosition,
  getById,
  remove,
  update,
  getAll,
  getByPage,
} = require("../controllers/banner.controller");
const Role = require("../helpers/role");
const { DELETE, ADD, EDIT, VIEW } = require("../helpers/permissionFieldName");
const permissionFunction = require("../helpers/permissionFunction");

router.get("/banners/getByPage/:slug", getByPage);
router.get("/banners/", getAll);
router.get("/banners/getById/:id", getById);
router.get("/banners/getByPosition/:position", getByPosition);
router.post("/banners", authorize(), create);
router.put("/banners/:id", authorize(), update);
router.delete("/banners/remove/:id", authorize(authorize(Role.Admin)), remove);
router.post("/banners", authorize(permissionFunction.BANNER, ADD), create);
router.put("/banners/:id", authorize(permissionFunction.BANNER, EDIT), update);
router.delete(
  "/banners/remove/:id",
  authorize(permissionFunction.BANNER, DELETE),
  remove
);

module.exports = router;
