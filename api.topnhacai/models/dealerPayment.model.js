const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const dealerPaymentSchema = new mongoose.Schema({
    dp_deposit_min : {
        type: String,
    },
    dp_deposit_max : {
        type: String,
    },
    dp_deposit_max_day : {
        type: String,
    },
    dp_deposit_processing_time : {
        type: String,
    },
    dp_deposit_payments : {
        type: String,
    },
    dp_deposit_banks : {
        type: String,
    },
    dp_withdrawal_min : {
        type: String,
    },
    dp_withdrawal_max : {
        type: String,
    },
    dp_withdrawal_max_day : {
        type: String,
    },
    dp_withdrawal_prc_time : {
        type: String,
    },
    dp_withdrawal_payments : {
        type: String,
    },
    dp_withdrawal_banks : {
        type: String,
    },
    dealer_id :  {
        type: ObjectId, 
        ref : 'Dealer', 
        required: true
    },
    
    
}, {timestamps: true});

module.exports = mongoose.model('DealerPayment', dealerPaymentSchema);