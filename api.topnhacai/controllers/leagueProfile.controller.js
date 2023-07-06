const LeagueProfile = require('../models/leagueProfile.model');
// const profile = require('../helpers/leagueProfile');
// exports.create = async (req, res) => {
//     try {
//         let leagueProfile = profile.LeagueProfiles();
//         let list = [];
//         LeagueProfile.insertMany(leagueProfile).then(function(){
//             console.log('save successfully');
//         })
//     } catch (error) {
        
//     }
// }
exports.getAll = async (req, res) => {
    try{
        var limit = req.query?.limit ? req.query.limit : 10;
        var skip = req.query?.limit ? req.query.skip : 0;
        await LeagueProfile.find({})
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
    }catch (error){
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message : err.message
        })
    }
    
}

exports.getByLeagueId = async(req, res) => {
    try{
        let leagueId = req.params.leagueId ? req.params.leagueId : "";
        await LeagueProfile.findOne({"leagueId" : leagueId})
            .exec((err,result) => {
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

exports.getById = async (req, res) => {
    let id = req.params.id ? req.params.id : null;
    try{
        if(id){
            await LeagueProfile.findById(id)
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
            dashLogger.error(`Error : Not found id,Request : ${req.originalUrl}`);
            return res.status(400).json({
                message : 'Not found id'
            })
        }
    }catch (err){
        dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message : err.message
        })
    }
    
    
}

exports.getByNameLeague = async (req, res) => {
    let name = req.params.name ? req.params.name : null;
    try{
        if(name){
            await LeagueProfile.find({"name" : name})
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
            dashLogger.error(`Error : Not found name, Request : ${req.originalUrl}`);
            return res.status(400).json({
                message : 'Not found name'
            })
        }
    }catch (err) {
        dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message : err.message
        })
    } 
    
    
}

exports.getByTypeLeague = async (req, res) => {
    let type = req.params.type ? parseInt(req.params.type) : 0;
    try{
        await LeagueProfile.find({"type" : type})
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
