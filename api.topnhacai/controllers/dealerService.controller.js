const DealerService = require('../models/dealerService.model');
const Dealer = require('../models/dealer.model')
const slugHandler = require('../helpers/slugHandler');
const {dashLogger} = require('../logger');
const mongoose = require('mongoose');

exports.create = (req, res) => {
    const {
        ds_zalo,
        ds_skype,
        ds_viber,
        ds_email,
        dealer_id,
        ds_telegram,
        ds_hotline,
        ds_time
    } = req.body;
    try {
        if(ds_zalo == '' && ds_skype == "" && ds_viber == "" && ds_email == "" && ds_telegram == "" && ds_hotline == "" && ds_time == "" ){
            dashLogger.error(`Error : Vui lòng điền thông tin,Request : ${req.originalUrl}`);
            return res.status(400).json({
                message : 'Vui lòng điền thông tin'
            })
        }else{
            let dealerService = new DealerService();
            let arrayOfDealer = dealer_id && dealer_id != "" ? dealer_id.split(',') : [];
            dealerService.ds_zalo = ds_zalo;
            dealerService.ds_skype = ds_skype;
            dealerService.ds_viber = ds_viber;
            dealerService.ds_email = ds_email;
            dealerService.ds_telegram = ds_telegram;
            dealerService.ds_hotline = ds_hotline;
            dealerService.ds_time = ds_time;
            dealerService.save((err, result) => {
                if (err) {
                    dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                    return res.status(400).json({
                        message : err.message
                    })
                }
                if(arrayOfDealer){
                    DealerService.findByIdAndUpdate(result._id, {
                        $push: { dealer_id: arrayOfDealer }
                    }, { new: true }).exec((err, result) => {
                        if (err) {
                            dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                            return res.status(400).json({
                                message : err.message
                            })
                        }
                        res.json(result);
                    })
                }
                
            })
        }
    } catch (err) {
        dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message : err.message
        })
    }
}

exports.update = (req, res) => {
    const {
        ds_zalo,
        ds_skype,
        ds_viber,
        ds_email,
        dealer_id,
        ds_telegram,
        ds_hotline,
        ds_time
    } = req.body;
    var id = mongoose.Types.ObjectId(req.params?.id);
    try{
        if(id){
            if(ds_zalo == '' && ds_skype == "" && ds_viber == "" && ds_email == "" && ds_telegram == "" && ds_hotline == "" && ds_time == "" ){
                dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                return res.status(400).json({
                    message : 'Vui lòng điền thông tin'
                })
            }else{
                DealerService.findByIdAndUpdate(id, {
                    ds_zalo: ds_zalo,
                    ds_skype: ds_skype,
                    ds_viber: ds_viber,
                    ds_email: ds_email,
                    ds_telegram: ds_telegram,
                    ds_hotline: ds_hotline,
                    ds_time : ds_time,
                    dealer_id: dealer_id && dealer_id.split(','),
                }, { new: true }).exec((err, data) => {
                    if (err) {
                        dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                        return res.status(400).json({
                            message : err.message
                        })
                    }
            
                    return res.json(data);
                })
            }
        }else{
            dashLogger.error(`Error : Not found id,Request : ${req.originalUrl}`);
            res.status(400).json({message : 'Not id'})
        }
    }catch (err) {
        dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
        res.status(400).json({message : err})
    }
    
    
}

exports.list = (req, res) => {
    try{
        DealerService.find({})
        .populate('dealer_id', '_id dealer_name dealer_promotion dealer_tag_rate dealer_star_rate dealer_rating dealer_link dealer_image dealer_description dealer_video dealer_interview dealer_slug faq_id')
        .select('_id ds_zalo ds_skype ds_viber ds_email ds_hotline ds_telegram ds_time dealer_id')
        .sort({'updatedAt': -1})
        .exec((err, data) => {
            if (err) {
                dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                return res.status(400).json({
                    message : err.message
                })
            }
            res.json(data);
        })
    }catch (err) {
        dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message : err.message
        })
    }
    
}

exports.listSearch = (req, res) => {
    const search = req.query.q ? req.query.q : null;
    try{
        if (search) {
            DealerService.find({
                $or: [
                        { ds_zalo: { $regex: search, $options: 'i' } }, 
                        { ds_skype: { $regex: search, $options: 'i' } },
                        { ds_email: { $regex: search, $options: 'i' } }, 
                        { ds_viber: { $regex: search, $options: 'i' } }, 
                        { ds_hotline: { $regex: search, $options: 'i' } },
                        { ds_telegram: { $regex: search, $options: 'i' } },
                        { ds_time: { $regex: search, $options: 'i' } }
                    ]
            },
                (err, dealerPro) => {
                    if (err) {
                        dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                        return res.status(400).json({
                            message : err.message
                        })
                    }
                    res.json(dealerPro)
                })
                .sort({'updatedAt': -1})
                .populate('dealer_id', '_id dealer_name dealer_promotion dealer_tag_rate dealer_star_rate dealer_rating dealer_link dealer_image dealer_description dealer_video dealer_interview dealer_slug faq_id')
                .select('_id ds_zalo ds_skype ds_viber ds_email ds_hotline ds_telegram ds_time dealer_id')
        } else {
            DealerService.find({})
                .populate('dealer_id', '_id dealer_name dealer_promotion dealer_tag_rate dealer_star_rate dealer_rating dealer_link dealer_image dealer_description dealer_video dealer_interview dealer_slug faq_id')
                .select('_id ds_zalo ds_skype ds_viber ds_email ds_hotline ds_telegram ds_time dealer_id')
                .sort({'updatedAt': -1})
                .exec((err, data) => {
                    if (err) {
                        dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                        return res.status(400).json({
                            message : err.message
                        })
                    }
                    res.json(data);
                })
        }
    }catch (err){
        dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message : err.message
        })
    }
    
}

exports.remove = (req, res) => {
    const id = req.params.id ? req.params.id : null;
    try{
        if(id){
            DealerService.findByIdAndRemove(id).exec((err, data) => {
                if (err) {
                    dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                    return res.status(400).json({
                        message : err.message
                    })
                }
                res.json({
                    isSuccessed: true,
                    message: 'DealerPromotion deleted successfully'
                })
            })
        }else{
            dashLogger.error(`Error : Not found id,Request : ${req.originalUrl}`);
            res.status(400).json({message : 'Not id'})
        }
    }catch (err){
        dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
        res.status(400).json({message : err.message})
    }
    
    

}

exports.read = (req, res) => {
    const id = req.params.id ? req.params.id : null;
    try{
        if(id){
            DealerService.findById(id)
            .populate('dealer_id', '_id dealer_name dealer_promotion dealer_tag_rate dealer_star_rate dealer_rating dealer_link dealer_image dealer_description dealer_video dealer_interview dealer_slug faq_id')
            .select('_id ds_zalo ds_skype ds_viber ds_email ds_hotline ds_telegram ds_time dealer_id')
            .exec((err, data) => {
                if (err) {
                    dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                    return res.status(400).json({
                        message : err.message
                    })
                }
                res.json(data);
            })
        }else{
            dashLogger.error(`Error : Not found id,Request : ${req.originalUrl}`);
            res.status(400).json({message : 'Not id'})
        }
    }catch (err){
        dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
        res.status(400).json({message : err.message})
    }
    
}
exports.getByDealerId = (req, res) => {
    try{
        const id = req.params.id ? req.params.id : null;
        if(id){
            DealerService.find({'dealer_id': mongoose.Types.ObjectId(id)})
            .populate('dealer_id')
            .exec((err, data) => {
                if(err){
                    dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                    return res.status(400).json({
                        message : err.message
                    })
                }
                return res.json(data);
            })
        }else{
            dashLogger.error(`Error : Not found id,Request : ${req.originalUrl}`);
            res.status(400).json({message : 'Not found id'})
        }
    }catch (err) {
        dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
        res.status(400).json({message : err.message})
    }
    
}