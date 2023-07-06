const Domain = require('../models/domain.model');
const mongoose = require('mongoose');
const {dashLogger} = require('../logger');

exports.getAll = async (req, res) => {
    try {
        var limit = req.query?.limit ? req.query.limit : 10;
        var skip = req.query?.limit ? req.query.skip : 0;
        var query = {};
        await Domain.find(query)
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
                Domain.countDocuments(query).exec((count_error, count) => {
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
        await Domain.findById(id)
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

exports.create = (req, res) => {
    const {host} = req.body;
    try{
        if(!host || !host.length){
            dashLogger.error(`Error : Name is required,Request : ${req.originalUrl}`);
            return res.status(400).json({
                error: 'Domain is required'
            })
        }
        let domain = new Domain();
        domain.host = host;
        domain.save((err, result) => {
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
    const {host} = req.body;
    try{
        if(id){
            if(!host || !host.length){
                dashLogger.error(`Error : Name is required,Request : ${req.originalUrl}`);
                return res.status(400).json({
                    error: 'Name is required'
                })
            }
            
            Domain.findByIdAndUpdate(id, {
                host: host
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
            Domain.findByIdAndRemove(id).exec((err, data) => {
                if(err){
                    dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                    return res.status(400).json({
                        message : err.message
                    })
                }
                res.json({
                    isSuccessed: true,
                    message: 'Domain deleted successfully'
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
