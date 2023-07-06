const authorize = require("../middleware/authorize");
const Role = require("../helpers/role");
const express = require("express");
const permissionFieldName = require("../helpers/permissionFieldName");
const permissionFunction = require("../helpers/permissionFunction");
const router = express.Router();
const {
  update,
  create,
  list,
  listSearch,
  remove,
  read,
  listRelated,
  filterByStatus,
  filterByStatusAndSlug,
  getPostByTax,
  getAllByLimit,
  getAllByTax,
  getPostByTaxNew,
  updateView,
  getAllByTaxDate,
  getAllByDate,
  getMax,
  getMin,
  getListView,
  statisticsStaff,
  getMaxUser,
  getMinUser,
  updateUser,
  getPostXML,
  getAllSlug,
  checkKeyword,
} = require("../controllers/post.controller");
router.get("/posts/getAllSlug", getAllSlug);
router.get("/posts/getListView", getListView);
router.put("/posts/updateView/:id", updateView);
router.get("/posts/getAllByTax", getAllByTax);
router.get("/posts/getAllByLimit", getAllByLimit);
router.get("/posts", list);

router.get("/posts/getAllByTaxDate", getAllByTaxDate);
router.get("/posts/getAllByDate", getAllByDate);
router.get("/posts/getMin", getMin);
router.get("/posts/getMax", getMax);

router.get("/posts/getPostByTax", getPostByTax);
router.get("/posts/getPostByTaxNew", getPostByTaxNew);

router.get("/posts/:slug", read);
router.get("/posts/getByStatus/:status", filterByStatus);
router.get("/posts/getBy/StatusAndSlug", filterByStatusAndSlug);
router.get("/posts/post/search", listSearch);
router.get("/posts/related", listRelated);
router.post(
  "/posts/",
  authorize(permissionFunction.POST, permissionFieldName.ADD),
  create
); // // thiếu permission
router.put(
  "/posts/:id",
  authorize(permissionFunction.POST, permissionFieldName.EDIT),
  update
); // thiếu permission
router.delete(
  "/posts/remove/:slug",
  authorize(permissionFunction.POST, permissionFieldName.DELETE),
  remove
); // // thiếu permission

router.get("/posts/getStatictis/staff", statisticsStaff);
router.get("/posts/getMin/user", getMinUser);
router.get("/posts/getMax/user", getMaxUser);
// router.get('/posts/update/user', updateUser);
router.get("/posts/getPosts/sitemap", getPostXML);
router.get("/posts/getAllSlug", getAllSlug);
router.post("/posts/checkKeyfocus", authorize(), checkKeyword);

module.exports = router;
