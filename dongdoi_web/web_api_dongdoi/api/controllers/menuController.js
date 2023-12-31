const Menus = require('../../database/entities/Menus');
const PagedModel = require('../models/PagedModel');
const ResponseModel = require('../models/ResponseModel');
const { isValidObjectId, Types } = require('mongoose');
const {dashLogger} = require('../../logger');

async function createMenu(req, res) {
    if (req.actions.includes('createMenu')) {
        try {
            if(!req.body.menuName){
                let response = new ResponseModel(2, "Name menu not found!", null);
                return res.json(response);
            }

            let menuItem = await Menus.findOne({menuName: req.body.menuName})
            if(menuItem){
                let response = new ResponseModel(2, "Menu already exists!", null);
                return res.json(response);
            }

            let menu = new Menus(req.body);
            menu.createdTime = Date.now();
            menu.user = req.userId;
            let newMenu = await menu.save();
            let response = new ResponseModel(1, 'Create menu success!', newMenu);
            res.json(response);
        } catch (error) {
            dashLogger.error(`controller: menuController; Request: ${req.originalUrl}; Error: ${error}`);
            let response = new ResponseModel(404, error.message, error);
            res.status(404).json(response);
        }
    }
    else {
        res.sendStatus(403);
    }
}

async function updateMenu(req, res) {
    if (req.actions.includes('updateMenu')) {
        try {
            let newMenu = { updatedTime: Date.now(), user: req.userId, ...req.body };
            let updatedMenu = await Menus.findOneAndUpdate({ _id: req.params.id }, newMenu);
            if (!updatedMenu) {
                let response = new ResponseModel(0, 'No item found!', null)
                res.json(response);
            }
            else {
                let response = new ResponseModel(1, 'Update menu success!', newMenu)
                res.json(response);
            }
        }
        catch (error) {
            dashLogger.error(`controller: menuController; Request: ${req.originalUrl}; Error: ${error}`);
            let response = new ResponseModel(404, error.message, error);
            res.status(404).json(response);
        }
    }
    else {
        res.sendStatus(403);
    }
}

async function deleteMenu(req, res) {
    if (req.actions.includes('deleteMenu')) {
        if (isValidObjectId(req.params.id)) {
            try {
                let menu = await Menus.findByIdAndDelete(req.params.id);
                if (!menu) {
                    let response = new ResponseModel(0, 'No item found!', null);
                    res.json(response);
                }
                else {
                    let response = new ResponseModel(1, 'Delete menu success!', null);
                    res.json(response);
                }
            } catch (error) {
                dashLogger.error(`controller: menuController; Request: ${req.originalUrl}; Error: ${error}`);
                let response = new ResponseModel(404, error.message, error)
                res.status(404).json(response);
            }
        }
        else {
            res.status(404).json(new ResponseModel(404, 'MenuId is not valid!', null));
        }
    }
    else {
        res.sendStatus(403);
    }
}

async function getPagingMenus(req, res) {
    let pageSize = req.query.pageSize || 10;
    let pageIndex = req.query.pageIndex || 1;
    console.log(req.query.search);
    let searchObj = {}
    if (req.query.search) {
        searchObj = {
            menuName: { $regex: '.*' + req.query.search + '.*' }
        }
    }

    try {
        let menus = await Menus
            .find(searchObj)
            .skip((pageSize * pageIndex) - pageSize)
            .limit(parseInt(pageSize))
            .populate("user")
            .populate("parent")
            .sort({
                createdTime: 'desc'
            });

        menus = menus.map((menu) => {
            if (menu.user != undefined && menu.user != null && menu.user != '') {
                menu.user.password = '';
                return menu;
            }
            else {
                return menu;
            }
        });

        let count = await Menus.find(searchObj).countDocuments();
        let totalPages = Math.ceil(count / pageSize);
        let pagedModel = new PagedModel(pageIndex, pageSize, totalPages, menus);

        res.json(pagedModel);
    } catch (error) {
        dashLogger.error(`controller: menuController; Request: ${req.originalUrl}; Error: ${error}`);
        let response = new ResponseModel(404, error.message, error);
        res.status(404).json(response);
    }
}

async function getMenuById(req, res) {
    if (isValidObjectId(req.params.id)) {
        try {
            let menu = await Menus.findById(req.params.id);
            res.json(menu);
        } catch (error) {
            dashLogger.error(`controller: menuController; Request: ${req.originalUrl}; Error: ${error}`);
            res.status(404).json(404, error.message, error);
        }
    }
    else {
        res.status(404).json(new ResponseModel(404, 'MenuId is not valid!', null));
    }
}

async function getAllMenus(req, res) {
    try{
        let allMenus = await Menus.find({ isShow: true }).sort({
            menuOrder: 'asc'
        });
        let newMenus = allMenus.map((menu) => {
            let children = allMenus.filter((x) => {
                if (x.parent) {
                    if (x.parent.equals(menu._id)) {
                        return true;
                    }
                }
            });
            if (children) {
                menu.children = children;
                return menu;
            }
        })
        let menus = newMenus.filter(x => x.parent === null || x.parent === '')
        res.json(menus);
    } catch (error) {
        dashLogger.error(`controller: menuController; Request: ${req.originalUrl}; Error: ${error}`);
        res.status(404).json(404, error.message, error);
    }
}

async function getMenuChildrenBySlug(req, res) {
    try{
        let menuParent = await Menus.findOne({ menuSlug: req.params.slug });
        if (menuParent) {
          let menus = await Menus.find({ parent: menuParent._id });
          res.json(menus);
        } else {
          res.status(404).json(404, "Menu was not found", null);
        }
    } catch (error) {
        dashLogger.error(`controller: menuController; Request: ${req.originalUrl}; Error: ${error}`);
        res.status(404).json(404, error.message, error);
    }
  }
  
  async function getMenuByParent(req, res) {
    try {
      let menu = await Menus.findOne({ menuSlug: req.params.slug });
      let menuParent = await Menus.find({ parent: menu._id });
      res.json(menuParent);
    } catch (error) {
      dashLogger.error(`controller: menuController; Request: ${req.originalUrl}; Error: ${error}`);
      res.status(404).json(new ResponseModel(404, error.message, error));
    }
  }
  
  async function getAllMenuChildrenBySlug(req, res) {
    try {
      let getAllMenu = await Menus.find({ isShow: true });
      let menuParent = await Menus.findOne({ menuSlug: req.params.slug });
      let menuChildren = await Menus.find({ parent: menuParent._id });
      let newMenus = [];
  
      menuChildren.map((menu) => {
        getAllMenu.filter((item) => {
          if (item.parent) {
            if (menu._id.equals(item.parent)) {
              newMenus.push(item);
            }
          }
        });
      });
  
      res.json(newMenus);
    } catch (error) {
      dashLogger.error(`controller: menuController; Request: ${req.originalUrl}; Error: ${error}`);
      res.status(404).json(404, "Menu was not found", null);
    }
  }

exports.createMenu = createMenu;
exports.updateMenu = updateMenu;
exports.deleteMenu = deleteMenu;
exports.getPagingMenus = getPagingMenus;
exports.getMenuById = getMenuById;
exports.getAllMenus = getAllMenus;
exports.getMenuChildrenBySlug = getMenuChildrenBySlug;
exports.getMenuByParent = getMenuByParent;
exports.getAllMenuChildrenBySlug = getAllMenuChildrenBySlug;