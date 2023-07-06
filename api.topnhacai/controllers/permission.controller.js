const Permission = require("../models/permission.model");

const getAllPermission = async (req, res) => {
  try {
    const result = await Permission.find();
    return res.status(200).json({ permissions: result });
  } catch (error) {
    console.log(error);
    return res.status(400);
  }
};
const getPermissionByRole = async (req, res) => {
  try {
    let role = req.query.role;
    const result = await Permission.find({ role: role }).populate("role");
    // let data = result?.filter((item) => item.name !== "permission");
    return res.status(200).json({ success: true, result });
  } catch (error) {
    console.log(error);
    return res.status(400);
  }
};
const createPermission = async (req, res) => {
  try {
    const result = await Permission.findOne({
      name: req.body.name,
      role: req.body.role,
    });
    if (result) {
      return res
        .status(400)
        .json({ success: false, message: "Already have that permission" });
    }

    const permission = new Permission(req.body);

    await permission.save();

    return res.status(200).json({
      success: true,
      message: "Create permission success!",
      permission,
    });
  } catch (error) {
    console.log(error);
    return res.status(400);
  }
};

const updatePermission = async (req, res) => {
  try {
    const result = await Permission.findById(req.params.id);

    if (!result) {
      return res
        .status(400)
        .json({ success: false, message: "Permisson not found!" });
    }

    const permission = await Permission.findByIdAndUpdate(
      req.params.id,
      req.body
    );

    return res.status(200).json({
      success: true,
      message: "Update permission success!",
      permission,
    });
  } catch (error) {
    console.log(error);
    return res.status(400);
  }
};

const deletePermission = async (req, res) => {
  try {
    const result = await Permission.findById(req.params.id);

    if (!result) {
      return res
        .status(400)
        .json({ success: false, message: "Permisson not found!" });
    }

    const permission = await Permission.findByIdAndRemove(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Delete permission success!",
    });
  } catch (error) {
    console.log(error);
    return res.status(400);
  }
};

module.exports = {
  getAllPermission,
  getPermissionByRole,
  createPermission,
  updatePermission,
  deletePermission,
};
