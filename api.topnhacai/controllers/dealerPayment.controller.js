const DealerPayment = require('../models/dealerPayment.model');
const slugHandler = require('../helpers/slugHandler');
const mongoose = require('mongoose');
const {dashLogger} = require('../logger');
exports.create = (req, res) => {
    const {
        dp_deposit_min,
        dp_deposit_max,
        dp_deposit_max_day,
        dp_deposit_processing_time,
        dp_deposit_payments,
        dp_deposit_banks,
        dp_withdrawal_min,
        dp_withdrawal_max,
        dp_withdrawal_max_day,
        dp_withdrawal_prc_time,
        dp_withdrawal_payments,
        dp_withdrawal_banks,
        dealer_id,
    } = req.body;
    try {
        let dealerPay = new DealerPayment();

        dealerPay.dp_deposit_min = dp_deposit_min
        dealerPay.dp_deposit_max = dp_deposit_max
        dealerPay.dp_deposit_max_day = dp_deposit_max_day
        dealerPay.dp_deposit_processing_time = dp_deposit_processing_time
        dealerPay.dp_deposit_payments = dp_deposit_payments
        dealerPay.dp_deposit_banks = dp_deposit_banks
        dealerPay.dp_withdrawal_min = dp_withdrawal_min
        dealerPay.dp_withdrawal_max = dp_withdrawal_max
        dealerPay.dp_withdrawal_max_day = dp_withdrawal_max_day
        dealerPay.dp_withdrawal_prc_time = dp_withdrawal_prc_time
        dealerPay.dp_withdrawal_payments = dp_withdrawal_payments
        dealerPay.dp_withdrawal_banks = dp_withdrawal_banks

        dealerPay.dealer_id = dealer_id && dealer_id != "" ? dealer_id : mongoose.Types.ObjectId();
        dealerPay.save((err, data) => {
            if (err) {
                dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                return res.status(400).json({
                    message : err.message
                })
            }
            return res.json(data);
        })
    } catch (err) {
        dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message : err.message
        })
    }
}

exports.update = (req, res) => {
    const {
        dp_deposit_min,
        dp_deposit_max,
        dp_deposit_max_day,
        dp_deposit_processing_time,
        dp_deposit_payments,
        dp_deposit_banks,
        dp_withdrawal_min,
        dp_withdrawal_max,
        dp_withdrawal_max_day,
        dp_withdrawal_prc_time,
        dp_withdrawal_payments,
        dp_withdrawal_banks,
        dealer_id
    } = req.body;
    var id = mongoose.Types.ObjectId(req.params?.id);
    try{
        if(id){
            DealerPayment.findByIdAndUpdate(id, {
                dp_deposit_min: dp_deposit_min,
                dp_deposit_max: dp_deposit_max,
                dp_deposit_max_day: dp_deposit_max_day,
                dp_deposit_processing_time: dp_deposit_processing_time,
                dp_deposit_payments: dp_deposit_payments,
                dp_deposit_banks: dp_deposit_banks,
                dp_withdrawal_min: dp_withdrawal_min,
                dp_withdrawal_max: dp_withdrawal_max,
                dp_withdrawal_max_day: dp_withdrawal_max_day,
                dp_withdrawal_prc_time: dp_withdrawal_prc_time,
                dp_withdrawal_payments: dp_withdrawal_payments,
                dp_withdrawal_banks: dp_withdrawal_banks,
                dealer_id: dealer_id && dealer_id != "" ? dealer_id : mongoose.Types.ObjectId(),
            }, { new: true }).exec((err, data) => {
                if (err) {
                    dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                    return res.status(400).json({
                        message : err.message
                    })
                }
                return res.json(data);
            })
        }else{
            res.status(400).json({message : 'Not id'})
        }
    }catch (err){
        dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message : err.message
        })
    }
    
    
}

exports.list = (req, res) => {
    try{
        DealerPayment.find({})
        .populate('dealer_id', '_id dealer_name dealer_promotion dealer_tag_rate dealer_star_rate dealer_rating dealer_link dealer_image dealer_description dealer_video dealer_interview dealer_slug faq_id')
        .select('_id dp_deposit_min dp_deposit_max dp_deposit_max_day dp_deposit_processing_time dp_deposit_payments dp_deposit_banks dp_withdrawal_min dp_withdrawal_max dp_withdrawal_max_day dp_withdrawal_prc_time dp_withdrawal_payments dp_withdrawal_banks dealer_id')
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
    }catch (err){
        dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message : err.message
        })
    }
    
}

exports.listSearch = (req, res) => {
    const search = req.query.q ? req.query : null;
    if (search) {
        DealerPayment.find({
            $or: [{ dp_deposit_min: { $regex: search, $options: 'i' } }]
        },
            (err, dealerPay) => {
                if (err) {
                    dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                    return res.status(400).json({
                        message : err.message
                    })
                }
                res.json(dealerPay)
            })
            .sort({'updatedAt': -1})
            .select('_id dp_deposit_min dp_deposit_max dp_deposit_max_day dp_deposit_processing_time dp_deposit_payments dp_deposit_banks dp_withdrawal_min dp_withdrawal_max dp_withdrawal_max_day dp_withdrawal_prc_time dp_withdrawal_payments dp_withdrawal_banks dealer_id')
    } else {
        DealerPayment.find({})
            .populate('dealer_id', '_id dealer_name dealer_promotion dealer_tag_rate dealer_star_rate dealer_rating dealer_link dealer_image dealer_description dealer_video dealer_interview dealer_slug faq_id')
            .select('_id dp_deposit_min dp_deposit_max dp_deposit_max_day dp_deposit_processing_time dp_deposit_payments dp_deposit_banks dp_withdrawal_min dp_withdrawal_max dp_withdrawal_max_day dp_withdrawal_prc_time dp_withdrawal_payments dp_withdrawal_banks dealer_id')
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
}

exports.remove = (req, res) => {
    const id = req.params?.id;
    if(id){
        DealerPayment.findByIdAndRemove(id).exec((err, data) => {
            if (err) {
                dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                return res.status(400).json({
                    message : err.message
                })
            }
            res.json({
                isSuccessed: true,
                message: 'DealerPayment deleted successfully'
            })
        })
    }
    else{
        dashLogger.error(`Error : Not found id,Request : ${req.originalUrl}`);
        res.status(400).json({message : 'Not id'})
    }

}

exports.read = (req, res) => {
    const id = req.params?.id;
    if(id){
        DealerPayment.findById(id)
        .populate('dealer_id', '_id dealer_name dealer_promotion dealer_tag_rate dealer_star_rate dealer_rating dealer_link dealer_image dealer_description dealer_video dealer_interview dealer_slug faq_id')
        .select('_id dp_deposit_min dp_deposit_max dp_deposit_max_day dp_deposit_processing_time dp_deposit_payments dp_deposit_banks dp_withdrawal_min dp_withdrawal_max dp_withdrawal_max_day dp_withdrawal_prc_time dp_withdrawal_payments dp_withdrawal_banks dealer_id')
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
    
}

exports.getByDealerId = (req, res) => {
    const id = req.params.id ? req.params.id : null;
    if(id){
        DealerPayment.findOne({'dealer_id': mongoose.Types.ObjectId(id)})
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
}