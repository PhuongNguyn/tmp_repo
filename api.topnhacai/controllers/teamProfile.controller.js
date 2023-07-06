const TeamProfile = require('../models/teamProfile.model');
const profile = require('../helpers/teamProfile');
const { jsParser } = require('swagger-autogen/src/code-parser');
const {dashLogger} = require('../logger');
// exports.create = async (req, res) => {
//     try {
//         let teamProfile = profile.Profiles();
//         let list = [];
//         TeamProfile.insertMany(teamProfile).then(function(){
//             console.log('save successfully');
//         })
//     } catch (error) {
        
//     }
// }
exports.getAll = async (req, res) => {
    var limit = req.query?.limit ? req.query.limit : 10;
    var skip = req.query?.limit ? req.query.skip : 0;
    try{
        await TeamProfile.find({})
        .limit(limit)
        .skip(skip)
        .exec((err, result) => {
            if(err){
                dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                return res.status(400).json({
                    message : err.message
                })
            }
            res.json(result);
        })
    }catch (err){
        dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message : err.message
        })
    }
    
}

exports.getByTeamId = async(req, res) => {
    let teamId = req.params.teamId ? req.params.teamId : null;
    try{
        if(teamId){
            await TeamProfile.findOne({"teamId" : teamId})
            .exec((err,result) => {
                if(err){
                    return res.status(400).json({
                        message : err.message
                    })
                }
                res.json(result);
            })
        }else{
            dashLogger.error(`Error : Team Id not found, Request : ${req.originalUrl}`);
            return res.status(400).json({
                message : 'Team Id not found'
            })
        }
        
    }catch(err){
        dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message : err.message
        })
    }
    
}

exports.getById = async (req, res) => {
    let id = req.params.id ? req.params.id : null;
    try{
        if(id){
            await TeamProfile.findById(id)
            .exec((err, result) => {
                if(err){
                    dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                    return res.status(400).json({
                        message: err.message
                    })
                }
                res.json(result);
            })
        }else{
            dashLogger.error(`Error : Id not found, Request : ${req.originalUrl}`);
            return res.status(400).json({
                message : 'Id not found'
            })
        }
        
    }catch(err){
        dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message : err.message
        })
    }
    
}

exports.getByLeagueId = async (req, res) => {
    let leagueId = req.params.leagueId ? req.params.leagueId : "";
    try{
        if(leagueId){
            await TeamProfile.find({"leagueId" : leagueId})
            .exec((err, result) => {
                if(err){
                    dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                    return res.status(400).json({
                        message : err.message
                    })
                }
                res.json(result);
            })
        }else{
            dashLogger.error(`Error : League Id not found, Request : ${req.originalUrl}`);
            return res.status(400).json({
                message : 'League Id not found'
            })
        }
    }catch (err){
        dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message : err.message
        })
    }
    
    
}

exports.getByNameTeam = async (req, res) => {
    const name = req.params.name ? req.params.name : "";
    try{
        if(name){
            await TeamProfile.find({"name" : name})
            .exec((err, result) => {
                if(err){
                    return res.status(400).json({
                        message : err.message
                    })
                }
                res.json(result);
            })
        }else{
            dashLogger.error(`Error : name not found, Request : ${req.originalUrl}`);
            return res.status(400).json({
                message : 'name not found'
            })
        }
    }catch (err){
        dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message : err.message
        })
    }
    
    
}

exports.getByTeamIds = async(req, res) => {
    let teamIds = req.body.teamIds ? req.body.teamIds : null;
    try{
        if(teamIds){
            await TeamProfile.find({'teamId': { $in: teamIds}})
            .exec((err,result) => {
                if(err){
                    return res.status(400).json({
                        message : err.message
                    })
                }
                res.json(result);
            })
        }
        else{
            dashLogger.error(`Error : TeamIds not found, Request : ${req.originalUrl}`);
                return res.status(400).json({
                    message : 'TeamIds not found'
                })
        }
    }catch (err){
        dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message : err.message
        })
    }
    
}