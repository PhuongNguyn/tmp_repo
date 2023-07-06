const Dealer = require('../models/dealer.model');
const formidable = require('formidable');
const _ = require('lodash');
const slugHandler = require('../helpers/slugHandler');
const {dashLogger} = require('../logger');
exports.create = (req, res) => {
    try{
        const {
            dealer_name,
            dealer_promotion,
            dealer_tag_rate,
            dealer_star_rate,
            dealer_rating,
            dealer_link,
            dealer_image,
            dealer_description,
            dealer_video,
            dealer_interview,
            dealer_slug,
            faq_id,
            dealer_rank
        } = req.body;
        if(!dealer_name || !dealer_name.length){
            dashLogger.error(`Error : Name is required, Request : ${req.originalUrl}`);
            return res.status(400).json({
                error: 'Name is required'
            })
        }

        let dealer = new Dealer();
        if(!dealer_slug || !dealer_slug.length){
            dealer.dealer_slug = slugHandler.slugify(dealer_name).toLowerCase();
        }else{
            dealer.dealer_slug = dealer_slug.toLowerCase();
        }
        
        dealer.dealer_name =  dealer_name;
        //dealer.dealer_promotion = dealer_promotion;
        //dealer.dealer_tag_rate = dealer_tag_rate;
        //dealer.dealer_star_rate = dealer_star_rate;
        //dealer.dealer_rating = dealer_rating;
        //dealer.dealer_link = dealer_link;
        dealer.dealer_image = dealer_image;
        dealer.dealer_description = dealer_description;
        dealer.dealer_video = dealer_video;
        dealer.dealer_interview = dealer_interview;
        let arrayOfFAQ = (faq_id && faq_id.split(','));
        let arrayOfPromotion = dealer_promotion && dealer_promotion.split(',');
        dealer.dealer_link = dealer_link && dealer_link.split(',');
        dealer.dealer_tag_rate = dealer_tag_rate && dealer_tag_rate.split(',');
        dealer.dealer_star_rate = dealer_star_rate && dealer_star_rate.split(',');
        dealer.dealer_rating = dealer_rating && dealer_rating.split(',');
        dealer.dealer_rank = dealer_rank;
        dealer.save((err, result) => {
            if(err){
                dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                return res.status(400).json({
                    message : err.message
                })
            }else{
                if(arrayOfFAQ){
                    Dealer.findByIdAndUpdate(result._id, {
                        $push: { faq_id : arrayOfFAQ}
                    }, {new : true}).exec((err, result) => {
                        if(err){
                            dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                            return res.status(400).json({
                                message : err.message
                            })
                        }
                        if(arrayOfPromotion){
                            Dealer.findByIdAndUpdate(result._id, {
                                $push: {dealer_promotion : arrayOfPromotion}
                            },{new: true}).exec((err, data) => {
                                if(err){
                                    return res.status(400).json({
                                        message :err.message
                                    })
                                }
                                return res.json(data);
                            })
                        }else{
                            return res.json(result);
                        }
                    })
                }else{
                    return res.json(result);
                }
            }
        })
    }catch(error){
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
    }
    
};

exports.update = (req, res) => {
    const id = req.params.id ? req.params.id : null;
    const {
        dealer_name,
        dealer_promotion,
        dealer_tag_rate,
        dealer_star_rate,
        dealer_rating,
        dealer_link,
        dealer_image,
        dealer_description,
        dealer_video,
        dealer_interview,
        dealer_slug,
        faq_id,
        dealer_rank
    } = req.body;
    try{
        if(id){
            Dealer.findById(id).exec((err, oldDealer) => {
            if(err){
                dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
               return res.status(400).json({
                    message : err.message
                })
            }
           
            if(!dealer_name || !dealer_name.length){
                dashLogger.error(`Error : Name is required, Request : ${req.originalUrl}`);
                return res.status(400).json({
                    error: 'Name is required'
                })
            };
            let arrayOfFAQ = (faq_id && faq_id !== "null") ? faq_id.split(',') : [];
            let arrayOfPromotion = (dealer_promotion && dealer_promotion !== "null") ? dealer_promotion.split(',') : [];
            let arrayOfLink = dealer_link && dealer_link.split(',');
            let arrayOfTagRate = dealer_tag_rate && dealer_tag_rate.split(',');
            let arrayOfStarRate = dealer_star_rate && dealer_star_rate.split(',');
            let arrayOfRating = dealer_rating && dealer_rating.split(',');
            oldDealer.dealer_name         = dealer_name         
            oldDealer.dealer_promotion    = arrayOfPromotion    
            oldDealer.dealer_tag_rate     = arrayOfTagRate     
            oldDealer.dealer_star_rate    = arrayOfStarRate    
            oldDealer.dealer_rating       = arrayOfRating       
            oldDealer.dealer_link         = arrayOfLink         
            oldDealer.dealer_image        = dealer_image        
            oldDealer.dealer_description  = dealer_description  
            oldDealer.dealer_video        = dealer_video        
            oldDealer.dealer_interview    = dealer_interview    
            oldDealer.dealer_slug = dealer_slug != oldDealer.dealer_slug && dealer_slug.length ? slugHandler.slugify(dealer_slug).toLowerCase() : oldDealer.dealer_slug
            oldDealer.faq_id              = arrayOfFAQ   
            oldDealer.dealer_rank         = dealer_rank
            oldDealer.save((err, result) => {
                if(err) {
                    dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                    return res.status(400).json({
                        message : err.message
                    })
                }
                res.json(result);
            })
        })
        }else{
            dashLogger.error(`Error : Not found id ,Request : ${req.originalUrl}`);
            res.status(400).json({message : 'Not id '})
        }
    }catch (error){
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return error;
    }
    
    
}

exports.list = (req, res) => {
    try{
        Dealer.find({})
        .populate('faq_id', '_id, faq_name, faq_question, faq_answer')
        .populate('dealer_promotion')
        .sort({'dealer_rank': 1})
        .select('_id dealer_name dealer_promotion dealer_tag_rate dealer_star_rate dealer_rating dealer_link dealer_image dealer_description dealer_video dealer_interview dealer_slug faq_id dealer_rank')
        .exec((err, data) => {
            if(err){
              dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
              return res.status(400).json({
                  message : err.message
              })
            }
            res.json(data);
        })
    }catch (error){
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return error;
    }
    
}

exports.listSearch = (req, res) => {
    const search = req.query.q ? req.query.q : null;
    try{
        if(search){
            Dealer.find({
                $or: [{dealer_name: {$regex: search, $options: 'i'}}, {dealer_slug: {$regex: search, $options: 'i'}}]
            }, 
                (err, dealer) => {
                    if(err){
                        dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                        return res.status(400).json({
                            message : err.message
                        })
                    }
                    res.json(dealer);
                }
            ).sort({'updatedAt': -1}).select('_id dealer_name dealer_promotion dealer_tag_rate dealer_star_rate dealer_rating dealer_link dealer_image dealer_description dealer_video dealer_interview dealer_slug faq_id dealer_rank')
        }else{
            Dealer.find({})
              .populate('faq_id')
              .populate('dealer_promotion')
              .sort({'updatedAt': -1})
              .select('_id dealer_name dealer_promotion dealer_tag_rate dealer_star_rate dealer_rating dealer_link dealer_image dealer_description dealer_video dealer_interview dealer_slug faq_id dealer_rank')
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
    }catch (error){
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return error;
    }
    
}

exports.remove = (req, res) => {
    const id = req.params.id ? req.params.id : null;
    try{
        if(id){
            Dealer.findByIdAndRemove(id).exec((err, data) => {
            if(err){
                dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                return res.status(400).json({
                    message : err.message
                })
            }
            res.json({
                isSuccessed : true,
                message: 'Dealer deleted successfully'
            })
        })
        }else{
            dashLogger.error(`Error : Not found id ,Request : ${req.originalUrl}`);
            res.status(400).json({message : 'Not id '})
        }
    }catch(error){
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return error;
    }
    
    
}

exports.read = (req, res) => {
    const id = req.params.id ? req.params.id : null;
    try{
        if(id){
            Dealer.findById(id)
            .populate('faq_id', '_id, faq_name, faq_question, faq_answer')
            .populate('dealer_promotion')
            .select('_id dealer_name dealer_promotion dealer_tag_rate dealer_star_rate dealer_rating dealer_link dealer_image dealer_description dealer_video dealer_interview dealer_slug faq_id dealer_rank')
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
            res.status(400).json({message : 'Not id '})
        }
    }catch (error){
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return error;
    }
   
    
}

