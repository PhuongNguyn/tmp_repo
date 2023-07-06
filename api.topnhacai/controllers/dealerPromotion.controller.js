const DealerPromotion = require('../models/dealerPromotion.model');
const slugHandler = require('../helpers/slugHandler');
const mongoose = require('mongoose');
const {dashLogger} = require('../logger');
exports.create = (req, res) => {
    const {
        dp_name ,
        dp_detail, 
        dp_link, 
        dealer_id, 
    } = req.body;
    try{
        let dealerPro = new DealerPromotion();
        let arrayOfDealer = dealer_id && dealer_id != "" ? dealer_id.split(',') : [];
        dealerPro.dp_name = dp_name;
        dealerPro.dp_detail = dp_detail && dp_detail != "" ? dp_detail.split(',') : [];
        dealerPro.dp_link = dp_link;

        dealerPro.save((err, result) => {
            if(err){
                dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                return res.status(400).json({
                    message : err.message
                })
            }
            if(arrayOfDealer){
                DealerPromotion.findByIdAndUpdate(result._id, {
                    $push: {dealer_id : arrayOfDealer}
                }, {new: true}).exec((err, result) => {
                    if(err){
                        dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                        return res.status(400).json({
                            message : err.message
                        })
                    }
                    res.json(result);
                })
            }
            
        })
    }catch(err){
        dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message : err.message
        })
    }
}

exports.update =(req, res) => {
    const {
        dp_name ,
        dp_detail, 
        dp_link, 
        dealer_id, 
    } = req.body;
    var id = mongoose.Types.ObjectId(req.params?.id);
    try{
        let arrayOfDealer = dealer_id && dealer_id.split(',');
        let arrayOfDetail = dp_detail && dp_detail.split(',');
        if(id){
            DealerPromotion.findByIdAndUpdate(id, {
                dp_name         : dp_name,
                dp_detail       : arrayOfDetail,
                dp_link       : dp_link,
                dealer_id : arrayOfDealer,
            },{new: true}).exec((err,data) => {
                if(err){
                    dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                    return res.status(400).json({
                        message : err.message
                    })
                }
        
                return res.json(data);
            })
        }
        else{
            dashLogger.error(`Error : Not found id,Request : ${req.originalUrl}`);
            res.status(400).json({message : 'Not id'})
        }
    }catch (err) {
        dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message : err.message
        })
    }
    
}

exports.list = (req, res) => {
    try{
        DealerPromotion.find({})
        .populate('dealer_id', '_id dealer_name dealer_promotion dealer_tag_rate dealer_star_rate dealer_rating dealer_link dealer_image dealer_description dealer_video dealer_interview dealer_slug faq_id')
        .select('_id dp_name dp_detail dp_link dealer_id')
        .sort({'updatedAt': -1})
        .exec((err, data) => {
            if(err){
                dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                return res.status(400).json({
                    message : err.message
                })
            }
            res.json(data);
        })
    }catch (err){
        dashLogger.error(`Error : ${err} : ${req.originalUrl}`);
        res.status(400).json({message : err})
    }
    
}

exports.listSearch = (req, res) => {
    const search = req.query.q;
    try{
        if(search){
            DealerPromotion.find({
                $or: [{dp_name : {$regex:search, $options:'i'}}]
            },
            (err, dealerPro) => {
                if(err){
                    dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                    return res.status(400).json({
                        message : err.message
                    })
                }
                res.json(dealerPro)
            })
            .populate('dealer_id')
            .sort({'updatedAt': -1})
            .select('_id dp_name dp_detail dp_link dealer_id')
        }else{
            DealerPromotion.find({})
            .populate('dealer_id')
            .sort({'updatedAt': -1})
            .select('_id dp_name dp_detail dp_link dealer_id')
                .exec((err, data) => {
                    if(err){
                        dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                        return res.status(400).json({
                            message : err.message
                        })
                    }
                    res.json(data);
                })
        }
    }catch (err) {
        dashLogger.error(`Error : ${err} : ${req.originalUrl}`);
        res.status(400).json({message : err})
    }
   
}

exports.remove = (req,res) => {
    const id = req.params?.id;
    try{
        if(id){
            DealerPromotion.findByIdAndRemove(id).exec((err, data) => {
                if(err){
                    dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                    return res.status(400).json({
                        message : err.message
                    })
                }
                res.json({
                    isSuccessed : true,
                    message: 'DealerPromotion deleted successfully'
                })
            })
        }else{
            dashLogger.error(`Error : Not found id,Request : ${req.originalUrl}`);
            res.status(400).json({message : 'Not id'})
        }
    }catch (err){
        dashLogger.error(`Error : ${err} : ${req.originalUrl}`);
        res.status(400).json({message : err})
    }
    
    

}

exports.read = (req, res) => {
    const id = req.params?.id;
    if(id){
        DealerPromotion.findById(id)
        .populate('dealer_id', '_id dealer_name dealer_promotion dealer_tag_rate dealer_star_rate dealer_rating dealer_link dealer_image dealer_description dealer_video dealer_interview dealer_slug faq_id')
        .select('_id dp_name dp_detail dp_link dealer_id')
        .exec((err, data) => {
            if(err){
                return res.status(400).json({
                    message : err.message
                })
            }
            res.json(data);
        })
    }else{
        res.status(400).json({message : 'Not id'})
    }
    
}

exports.getByDealerId = (req, res) => {
    const id = req.params.id ? req.params.id : null;
    if(id){
        DealerPromotion.find({'dealer_id': mongoose.Types.ObjectId(id)})
        .populate('dealer_id')
        .exec((err, data) => {
            if(err){
                return res.status(400).json({
                    message : err.message
                })
            }
            return res.json(data);
        })
    }else{
        res.status(400).json({message : 'Not found id'})
    }
}