const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const dealerServiceSchema = new mongoose.Schema({
    ds_zalo : {
        type: String,
    },
    ds_skype : {
        type: String,
    },
    ds_viber : {
        type: String,
    },
    ds_email : {
        type: String,
    },
    ds_hotline : {
        type: String,
    },
    ds_telegram : {
        type: String,
    },
    ds_time: {
        type: String
    },
    dealer_id : [
        {
            type: ObjectId, 
            ref : 'Dealer', 
            required: true
        }
    ],
    
    
}, {timestamps: true});

module.exports = mongoose.model('DealerService', dealerServiceSchema);