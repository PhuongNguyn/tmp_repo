const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const dealerSchema = new mongoose.Schema({
    dealer_name : {
        type: String,
        trim: true,
        require: true,
    },
    dealer_promotion : [
        {
            type: ObjectId, 
            ref : 'DealerPromotion', 
        }
    ],
    dealer_tag_rate : [
        {
            type: String,
        }
    ],
    dealer_star_rate : [
        {
            type: String,
        }
    ],
    dealer_rating : [
        {
            type: String,
        }
    ],
    dealer_link : [
        {
            type: String,
        }
    ],
    dealer_image: {
        type : String
    },
    dealer_description : {
        type: {},
        max : 9999999999
    },
    dealer_video : {
        type: String
    },
    dealer_interview : {
        type: String
    },
    dealer_slug : {
        type: String,
        unique: true,
        index:true,
    },
    faq_id : [
        {
            type: ObjectId, 
            ref : 'FAQ', 
        }
    ],
    dealer_rank: {
        type: Number,
        default : 1,
    }
    
}, {timestamps: true});

module.exports = mongoose.model('Dealer', dealerSchema);