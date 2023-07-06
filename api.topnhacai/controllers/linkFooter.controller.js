const LinkFooter = require('../models/linkFooter.model');
const mongoose = require('mongoose');
const {dashLogger} = require('../logger');
exports.create = (req, res) => {
    const {name, link, status} = req.body;
    try {
        if(!name || !name.length){
            dashLogger.error(`Error : Name is required, Request : ${req.originalUrl}`);
            return res.status(400).json({
                error: 'Name is required'
            })
        }
        if(!link || !link.length){
            dashLogger.error(`Error : Link is required, Request : ${req.originalUrl}`);
            return res.status(400).json({
                error: 'Link is required'
            })
        }
        let linkFooter = new LinkFooter();
        linkFooter.name = name;
        linkFooter.link = link;
        linkFooter.status = status;
        linkFooter.save((err, result) => {
            if(err){
                dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                return res.status(400).json({
                    message : err.message
                })
            }
            res.json(result);
        })
    } catch (error) {
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message : error.message
        })
    }
}

exports.update = (req, res) => {
    const id = mongoose.Types.ObjectId(req.params.id);
    const {name, link , status} = req.body;
    try{
        if(id){
            LinkFooter.findByIdAndUpdate(id , {
                name : name,
                link : link,
                status : status
            }, {new : true }).exec((err, data) => {
                if(err){
                    dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                    return res.status(400).json({
                        message : err.message
                    })
                }
                return res.json(data);
            })
        }else{
            dashLogger.error(`Error : Not found Id,Request : ${req.originalUrl}`);
            res.status(400).json({message : 'Not found Id'})
        }
    }catch (error){
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message : error.message
        })
    }
    
}

exports.list = (req, res) => {
    try{
        LinkFooter.find({}).exec((err, data) => {
            if(err){
                dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                return res.status(400).json({
                    message: err.message
                })
            }
            res.json(data);
        })
    }catch (error) {
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message : error.message
        })
    }
    
}

exports.read = (req, res) => {
    const id = req.params.id ? req.params.id : null;
    try{
        if(id){
            LinkFooter.findById(id)
                .exec((err, data) => {
                    if(err){
                        dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                        return res.status(400).json({
                            message : err.message
                        })
                    }
                    res.json(data);
                })
    
        }else{
            dashLogger.error(`Error : Not found Id,Request : ${req.originalUrl}`);
            res.status(400).json({
                message : 'Not found Id'
            })
        }
    }catch (error){
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message : error.message
        })
    }
    
}

exports.getByName = (req, res) => {
    const name = req.params.name ? req.params.name : null;
    try{
        if(name){
            LinkFooter.findOne({"name": name})
                .exec((err, data) => {
                    if(err){
                        dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                        return res.status(400).json({
                            message: err.message
                        })
                    }
                    res.json(data);
                })
        }else{
            dashLogger.error(`Error : Name not found, Request : ${req.originalUrl}`);
            res.status(400).json({
                message : 'Name not found'
            })
        }
    }catch (error) {
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message : error.message
        })
    }
    
}
exports.listSearch = (req, res) => {
    const search = req.query.q ? req.query.q : null;
    try{
        if(search){
            LinkFooter.find({
                $or: [
                    {name : {$regex: search, $options: 'i'}},
                    {link : { $regex : search , $options : 'i'}}
                ]
            }, (err, data) => {
                if(err){
                    dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                    return res.status(400).json({
                        message: err.message
                    })
                }
                res.json(data);
            })
        }else{
            LinkFooter.find({})
                .exec((err, data) => {
                    if(err){
                        dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                        return res.status(400).json({
                            message : err.message
                        })
                    }
                    return res.json(data);
                })
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
            LinkFooter.findByIdAndRemove(id).exec((err,data) => {
                if(err){
                    dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                    return res.status(400).json({
                        message : err.message
                    })
                }
                res.json({
                    isSuccessed: true,
                    message: 'Link deleted successfully'
                })
            })
        }else{
            dashLogger.error(`Error : Not found Id, Request : ${req.originalUrl}`);
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