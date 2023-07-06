const { handleLogTelegram } = require("../helpers/telegram");
const Log = require("../models/log.model");
const PagedModel = require("../models/PagedModel");
const moment = require("moment");
const userModel = require("../models/user.model");
const getAll = async () => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error });
  }
};
const getPaging = async (req, res) => {
  try {
    let pageSize = req.query.pageSize || 10;
    let pageIndex = req.query.pageIndex || 1;
    let search = req.query.search || "";
    let user = req.query.user || "";
    let listId = null;
    if (user) {
      const listUsers = await userModel
        .find({ username: { $regex: ".*" + user + ".*" } })
        .select("_id");
      listId = listUsers?.map((item) => item?._id);
    }

    let action = req.query.action || "";
    let startDate = req.query.startDate;
    let endDate = req.query.endDate;
    let searchObject = {};

    if (search) {
      searchObject.message = { $regex: ".*" + search + ".*" };
    }
    if (listId) {
      searchObject.user = { $in: listId };
    }
    if (action) {
      searchObject.action = action;
    }
    if (startDate && endDate) {
      searchObject.updatedAt = {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      };
    }

    let result;
    if (pageSize === "max") {
      result = await Log.find(searchObject)
        .sort({ createdAt: -1 })
        .populate("user");
    } else {
      result = await Log.find(searchObject)

        .limit(pageSize)
        .skip(pageSize * (pageIndex - 1))
        .sort({ createdAt: -1 })
        .populate("user");
    }

    const count = await Log.countDocuments(searchObject);

    const totalPages = Math.ceil(count / pageSize);

    const responsePageModel = new PagedModel(
      pageIndex,
      pageSize,
      totalPages,
      result,
      count
    );

    res.json(responsePageModel);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error });
  }
};

const createLog = async (message, action, req) => {
  try {
    let log = {
      message,
      action,
      user: req.user.id || req.user,
      fp: req.fingerprint,
      route: req.originalUrl,
      ip: req.ip,
      data: action !== "login" ? JSON.stringify(req.body) : "",
    };
    let logNew = new Log(log);

    await logNew.save();

    return;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const deleteLog = async () => {};

module.exports = {
  createLog,
  getPaging,
  getAll,
};
