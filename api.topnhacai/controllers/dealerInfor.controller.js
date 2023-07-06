const DealerInfor = require('../models/dealerInfor.model');
const slugHandler = require('../helpers/slugHandler');
const mongoose = require('mongoose');
const {dashLogger} = require('../logger');
exports.create = (req, res) => {
    const {
        di_name ,
        di_slug, 
        di_score1, 
        di_score2, 
        di_score3, 
        di_score4, 
        di_score5,
        di_reason,
        di_advantages,
        di_weakness,
        di_eveluate,
        di_website,
        di_host,
        di_headquarters,
        di_license,
        di_founded_year,
        di_partner,
        di_languages,
        di_mobile_applications,
        di_web_applications,
        di_live_soccer,
        di_game_system,
        di_odds,
        di_bets,
        di_currency,
        di_lowest_bet,
        di_highest_bet,
        dealer_id
    } = req.body;
    try{
        let dealerInfor = new DealerInfor();
        if(!di_slug && !di_slug){
            dealerInfor.di_slug = slugHandler.slugify(di_name).toLowerCase();
        }else{
            dealerInfor.di_slug = di_slug.toLowerCase();
        }
        dealerInfor.di_name         = di_name
        dealerInfor.di_score1       = di_score1
        dealerInfor.di_score2       = di_score2
        dealerInfor.di_score3       = di_score3
        dealerInfor.di_score4       = di_score4
        dealerInfor.di_score5       = di_score5
        dealerInfor.di_reason       = di_reason
        //dealerInfor.di_advantages   = di_advantages
        //dealerInfor.di_weakness     = di_weakness
        dealerInfor.di_eveluate     = di_eveluate
        dealerInfor.di_website      = di_website
        dealerInfor.di_host         = di_host
        dealerInfor.di_headquarters = di_headquarters
        dealerInfor.di_license      = di_license
        dealerInfor.di_founded_year = di_founded_year
        //dealerInfor.di_partner      = di_partner
        //dealerInfor.di_languages    = di_languages
        // dealerInfor.di_mobile_applications = di_mobile_applications
        dealerInfor.di_web_applications = di_web_applications
        dealerInfor.di_live_soccer = di_live_soccer
        //dealerInfor.di_game_system = di_game_system
        dealerInfor.di_odds = di_odds
        dealerInfor.di_bets = di_bets
        //dealerInfor.di_currency = di_currency
        dealerInfor.di_lowest_bet = di_lowest_bet
        dealerInfor.di_highest_bet = di_highest_bet
        dealerInfor.dealer_id = dealer_id && dealer_id != "" ? dealer_id : mongoose.Types.ObjectId();
        dealerInfor.di_mobile_applications = di_mobile_applications;
        dealerInfor.di_advantages = di_advantages;
        dealerInfor.di_weakness = di_weakness;
        dealerInfor.di_partner = di_partner;
        dealerInfor.di_languages = di_languages;
        dealerInfor.di_game_system = di_game_system;
        dealerInfor.di_currency = di_currency;
        dealerInfor.save((err, result) => {
            if(err){
                dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                return res.status(400).json({
                    message : err.message
                })
            }
            
            return res.json(result);
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
        di_name ,
        di_slug, 
        di_score1, 
        di_score2, 
        di_score3, 
        di_score4, 
        di_score5,
        di_reason,
        di_advantages,
        di_weakness,
        di_eveluate,
        di_website,
        di_host,
        di_headquarters,
        di_license,
        di_founded_year,
        di_partner,
        di_languages,
        di_mobile_applications,
        di_web_applications,
        di_live_soccer,
        di_game_system,
        di_odds,
        di_bets,
        di_currency,
        di_lowest_bet,
        di_highest_bet,
        dealer_id
    } = req.body;
    var id = mongoose.Types.ObjectId(req.params?.id);
    try{
        var slug = "";
        if(!di_slug && !di_slug){
            slug = slugHandler.slugify(di_name).toLowerCase();
        }else{
            slug = di_slug.toLowerCase();
        }
        let arrayOfAdvantages = di_advantages;
        let arrayOfMobileApp = di_mobile_applications;
        let arrayOfWeakness = di_weakness;
        let arrayOfPartner = di_partner;
        let arrayOfLanguages = di_languages ;
        let arrayOfGameSystem = di_game_system;
        let arrayOfCurency = di_currency;
        if(id){
            DealerInfor.findByIdAndUpdate(id, {
                di_name         : di_name,
                di_slug         : slug,
                di_score1       : di_score1,
                di_score2       : di_score2,
                di_score3       : di_score3,
                di_score4       : di_score4,
                di_score5       : di_score5,
                di_reason       : di_reason,
                di_advantages   : arrayOfAdvantages,
                di_weakness     : arrayOfWeakness,
                di_eveluate     : di_eveluate,
                di_website      : di_website,
                di_host         : di_host,
                di_headquarters : di_headquarters,
                di_license      : di_license,
                di_founded_year : di_founded_year,
                di_partner      : arrayOfPartner,
                di_languages    : arrayOfLanguages,
                di_mobile_applications : arrayOfMobileApp,
                di_web_applications : di_web_applications,
                di_live_soccer : di_live_soccer,
                di_game_system : arrayOfGameSystem,
                di_odds : di_odds,
                di_bets : di_bets,
                di_currency : arrayOfCurency,
                di_lowest_bet : di_lowest_bet,
                di_highest_bet : di_highest_bet,
                dealer_id : dealer_id && dealer_id != "" ? dealer_id : mongoose.Types.ObjectId(),
            },{new: true}).exec((err,data) => {
                if(err){
                    dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                    return res.status(400).json({
                        message : err.message
                    })
                }
                return res.json(data);
            })
        }else{
            dashLogger.error(`Error : Not id ,Request : ${req.originalUrl}`);
            res.status(400).json({message : 'Not id'})
        }
    }catch (error) {
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message : error.message
        })
    }
    
}

exports.list = (req, res) => {
    try{
        DealerInfor.find({})
        .populate('dealer_id', '_id dealer_name dealer_promotion dealer_tag_rate dealer_star_rate dealer_rating dealer_link dealer_image dealer_description dealer_video dealer_interview dealer_slug faq_id')
        .select('_id di_name di_slug di_score1 di_score2 di_score3 di_score4 di_score5 di_reason di_advantages di_weakness di_eveluate di_website di_host di_headquarters di_license di_founded_year di_partner di_languages di_mobile_applications di_web_applications di_live_soccer di_game_system di_odds di_bets di_currency di_lowest_bet di_highest_bet dealer_id')
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
            DealerInfor.find({
                $or: [{di_name : {$regex:search, $options:'i'}}]
            },
            (err, dealerInfor) => {
                if(err){
                    dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                    return res.status(400).json({
                        message : err.message
                    })
                }
                res.json(dealerInfor)
            })
            .sort({'updatedAt': -1})
            .select('_id di_name di_slug di_score1 di_score2 di_score3 di_score4 di_score5 di_reason di_advantages di_weakness di_eveluate di_website di_host di_headquarters di_license di_founded_year di_partner di_languages di_mobile_applications di_web_applications di_live_soccer di_game_system di_odds di_bets di_currency di_lowest_bet di_highest_bet dealer_id')
        }else{
            DealerInfor.find({})
                .populate('dealer_id', '_id dealer_name dealer_promotion dealer_tag_rate dealer_star_rate dealer_rating dealer_link dealer_image dealer_description dealer_video dealer_interview dealer_slug faq_id')
                .select('_id di_name di_slug di_score1 di_score2 di_score3 di_score4 di_score5 di_reason di_advantages di_weakness di_eveluate di_website di_host di_headquarters di_license di_founded_year di_partner di_languages di_mobile_applications di_web_applications di_live_soccer di_game_system di_odds di_bets di_currency di_lowest_bet di_highest_bet dealer_id')
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
        }
    }catch (error) {
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message : error.message
        })
    }
    
}

exports.remove = (req,res) => {
    const id = req.params.id ? req.params.id : null;
    try{
        if(id){
            DealerInfor.findByIdAndRemove(id).exec((err, data) => {
                if(err){
                    dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                    return res.status(400).json({
                        message : err.message
                    })
                }
                res.json({
                    isSuccessed : true,
                    message: 'DealerInfor deleted successfully'
                })
            })
        
        }else{
            dashLogger.error(`Error : Not id ,Request : ${req.originalUrl}`);
            res.status(400).json({message : 'Not id'})
        }
    }catch (error){
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
            DealerInfor.findById(id)
            .populate('dealer_id', '_id dealer_name dealer_promotion dealer_tag_rate dealer_star_rate dealer_rating dealer_link dealer_image dealer_description dealer_video dealer_interview dealer_slug faq_id')
            .select('_id di_name di_slug di_score1 di_score2 di_score3 di_score4 di_score5 di_reason di_advantages di_weakness di_eveluate di_website di_host di_headquarters di_license di_founded_year di_partner di_languages di_mobile_applications di_web_applications di_live_soccer di_game_system di_odds di_bets di_currency di_lowest_bet di_highest_bet dealer_id')
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
            dashLogger.error(`Error : Not id ,Request : ${req.originalUrl}`);
            res.status(400).json({message : 'Not id'})
        }
    }catch (error){
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message : error.message
        })
    }
    
    
}
exports.getByDealerId = (req, res) => {
    const id = req.params.id ? req.params.id : null;
    try{
        if(id){
            DealerInfor.findOne({'dealer_id': mongoose.Types.ObjectId(id)})
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
    }catch (error) {
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message : error.message
        })
    }
    
}