const Banner = require('../models/banner.model');
const Page = require('../models/page.model')
const mongoose = require('mongoose');
const {dashLogger} = require('../logger');

exports.getAll = async (req, res) => {
    try {
        var limit = req.query?.limit ? parseInt(req.query.limit) : 10;
        var skip = req.query?.skip ? parseInt(req.query.skip) : 0;
        let slugPage = req.query.slug && req.query.slug != 'null' ? req.query.slug : null;
        let id = "";
        if(slugPage){
            let page = await Page.findOne({'page_category_slug' : slugPage}).exec();
            id = page.id;
        }
        var query = id == "" ? {} : {"pageId" : id};
        await Banner.find(query)
            .populate('userId')
            .populate('pageId', '_id page_title page_category_slug page_category_name')
            .sort({'updateAt': -1})
            .skip(skip * limit)
            .limit(limit)
            .exec((err, data) => {
                if(err){
                    dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                    return res.status(400).json({
                        message : err.message
                    })
                }
                Banner.countDocuments(query).exec((count_error, count) => {
                    if(err){
                        dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                        return res.json(count_error);
                    }
                    return res.json({
                        total: count,
                        skip: skip,
                        pageSize: data.length,
                        datas: data
                    })
                })
            }) 
    } catch (error) {
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message : error.message
        })
    }
}

exports.getById = async(req, res) => {
    let id = req.params.id ? req.params.id : "";
    try{
        await Banner.findById(id)
        //.populate('userId')
        .exec((err,result) => {
            if(err){
                dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                return res.status(400).json({
                    message : err.message
                })
            }
            res.json(result);
        })
    }catch (error){
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message : error.message
        })
    }
    
}

exports.getByPosition = async (req, res) => {
    let position = req.params.position ? req.params.position : null;
    try{
        if(position){
            await Banner.find({banner_position: position})
            //.populate('userId')
            .sort({'updateAt': -1})
            .exec((err, result) => {
                if(err){
                    dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                    return res.status(400).json({
                        message: err.message
                    })
                }
                res.json(result);
            })
        }
    }catch (error){
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message : error.message
        })
    }
    
   
}

exports.getByPage = async (req, res) => {
    let slugPage = req.params.slug ? req.params.slug : null;
    try{
        if(slugPage){
            Page.findOne({'page_category_slug' : slugPage}).exec((err,page) => {
                if(err){
                    return res.status(400).json({
                        error: 'Slug page not found'
                    })
                }
                if(page){
                    Banner.find({pageId : page.id})
                    //.populate('userId')
                    .populate('pageId', '_id page_title page_category_slug page_category_name')
                    .sort({'updateAt': -1})
                    .exec((error,result) => {
                        if(error){
                            return res.status(400).json({
                                message : err.message
                            })
                        }
                        res.json(result);
                    })
                }else{
                    return res.status(400).json({
                        message : 'Error page'
                    })
                }
            })
        }
    }catch (error){
        return res.status(400).json({
            message : error.message
        })
    }
}

exports.create = (req, res) => {
    const {name, position, userId, link, image, pageId} = req.body;
    try{
        if(!name || !name.length){
            dashLogger.error(`Error : Name is required,Request : ${req.originalUrl}`);
            return res.status(400).json({
                error: 'Name is required'
            })
        }
        if(!link || !link.length){
            dashLogger.error(`Error : Link is required,Request : ${req.originalUrl}`);
            return res.status(400).json({
                error: 'Link is required'
            })
        }
        if(!image || !image.length){
            dashLogger.error(`Error : Image is required,Request : ${req.originalUrl}`);
            return res.status(400).json({
                error: 'Image is required'
            })
        }
        if(!pageId || !pageId.length){
            dashLogger.error(`Error : Page is required,Request : ${req.originalUrl}`);
            return res.status(400).json({
                error: 'Page is required'
            })
        }
        let banner = new Banner();
        banner.name = name;
        banner.link = link;
        banner.position = position;
        banner.image = image;
        banner.userId = userId;
        banner.pageId = (pageId && pageId.length > 0) ? pageId : [];
        banner.save((err, result) => {
            if(err){
                dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                return res.status(400).json({
                    message : err.message
                })
            }
            res.json(result);
        })
    }catch(error) {
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message : error.message
        })
    }
}

exports.update = (req, res) => {
    const id = req.params.id ? mongoose.Types.ObjectId(req.params.id) : null;
    const {name, link, position, userId, image, pageId} = req.body;
    try{
        if(id){
            if(!name || !name.length){
                dashLogger.error(`Error : Name is required,Request : ${req.originalUrl}`);
                return res.status(400).json({
                    error: 'Name is required'
                })
            }
            if(!link || !link.length){
                dashLogger.error(`Error : Link is required,Request : ${req.originalUrl}`);
                return res.status(400).json({
                    error: 'Link is required'
                })
            }
            if(!image || !image.length){
                dashLogger.error(`Error : Image is required,Request : ${req.originalUrl}`);
                return res.status(400).json({
                    error: 'Image is required'
                })
            }
            if(!pageId || !pageId.length){
                dashLogger.error(`Error : Page is required,Request : ${req.originalUrl}`);
                return res.status(400).json({
                    error: 'Page is required'
                })
            }
            
            Banner.findByIdAndUpdate(id, {
                name: name,
                link: link,
                position: position,
                userId : userId,
                image : image,
                pageId : (pageId && pageId.length > 0) ? pageId : [],
            },{new: true}).exec((err, data) => {
                dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                if(err){
                    return res.status(400).json({
                        message: err.message
                    })
                }
                return res.json(data);
            })
        }else{
            dashLogger.error(`Error : 'Not found Id',Request : ${req.originalUrl}`);
            res.status(400).json({message : 'Not found Id'})
        }
    }catch (error){
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message : error.message
        })
    }
   
}
exports.remove = (req, res) => {
    const id = req.params.id ? req.params.id : null;
    try{
        if(id){
            Banner.findByIdAndRemove(id).exec((err, data) => {
                if(err){
                    dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                    return res.status(400).json({
                        message : err.message
                    })
                }
                res.json({
                    isSuccessed: true,
                    message: 'Banner deleted successfully'
                })
            })
            
        }else{
            dashLogger.error(`Error : 'Not found Id' ,Request : ${req.originalUrl}`);
            res.status(400).json({
                message : 'Not found Id'
            })
        }
    }catch (error) {
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message : error.message
        })
    }
   
}
