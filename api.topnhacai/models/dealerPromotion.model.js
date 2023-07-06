const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const dealerPromotionSchema = new mongoose.Schema({
    dp_name : {
        type: String,
    },
    dp_detail : [
        {
            type: String,
        }
    ],
    dp_link : {
        type: String,
    },
    dealer_id : [
        {
            type: ObjectId, 
            ref : 'Dealer', 
        }
    ],
    
    
}, {timestamps: true});

module.exports = mongoose.model('DealerPromotion', dealerPromotionSchema);