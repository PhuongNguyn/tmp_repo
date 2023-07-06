const jwt = require("express-jwt");
const { secret } = require("../config/auth.config");
// const db = require('_helpers/db');
const User = require("../models/user.model");
const RefreshToken = require("../models/refreshToken.model");
const Permission = require("../models/permission.model");
const Role = require("../models/role.model");

module.exports = authorize;

function authorize(func = "", permission = "") {
  return [
    // authenticate JWT token and attach user to request object (req.user)
    jwt({ secret, algorithms: ["HS256"] }),

    // authorize based on user role
    async (req, res, next) => {
      try {
        const user = await User.findById(req.user.id);

        if (!user) {
          // user no longer exists or role not authorized
          return res.status(401).json({ message: "Unauthorized" });
        }

        if (func && permission) {
          const permissionField = await Permission.findOne({
            name: func,
            role: user.role,
          });
          if (!permissionField)
            return res.status(401).json({ message: "Can not access " + func });
          checkFlag = permissionField[permission] ? true : false;
          if (!checkFlag)
            return res
              .status(401)
              .json({ message: "Can not access" + func + "by" + permission });
        }

        // if(permission){
        //     const permissionField = roles.permission.find(item => item.fieldName == func)
        //     if(!permissionField)
        //         return res.status(401).json({ message: 'Unauthorized' });
        //     checkFlag = permissionField[permission]?true:false
        //     if(!checkFlag)
        //         return res.status(401).json({ message: 'Unauthorized' });

        // }

        req.user.role = user.role;
        const refreshTokens = await RefreshToken.find({ user: user.id });
        req.user.ownsToken = (token) =>
          !!refreshTokens.find((x) => x.token === token);
        next();
      } catch (error) {
        console.log(error);
        return res.status(500);
      }

      // authentication and authorization successful
    },
  ];
}
