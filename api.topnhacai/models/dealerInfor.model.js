const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const dealerInforSchema = new mongoose.Schema({
    di_name : {
        type: String,
    },
    di_slug : {
        type: String
    },
    di_score1 : {
        type: String,
    },
    di_score2 : {
        type: String,
    },
    di_score3 : {
        type: String,
    },
    di_score4 : {
        type: String,
    },
    di_score5 : {
        type: String,
    },
    di_reason: {
        type: String,
    },
    di_advantages : [
        {
            type: String,
        }
    ],
    di_weakness : [
        {
            type: String,
        }
    ],
    di_eveluate : {
        type: String
    },
    di_website :{
        type: String,
    },
    di_host : {
        type: String
    },
    di_headquarters : {
        type: String
    },
    di_license : {
        type: String
    },
    di_founded_year : {
        type: String
    },
    di_partner : [
        {
            type: String,
        }
    ],
    di_languages : [
        {
            type: String,
        }
    ],
    di_mobile_applications : [{
        type: String
    }],
    di_web_applications : {
        type: String
    },
    di_live_soccer : {
        type: String
    },
    di_game_system : [
        {
            type: String,
        }
    ],
    di_odds : {
        type: String
    },
    di_bets : {
        type: String
    },
    di_currency : [
        {
            type: String,
        }
    ],
    di_lowest_bet : {
        type: String
    },
    di_highest_bet : {
        type: String
    },
    dealer_id : {
        type: ObjectId, 
        ref : 'Dealer', 
    },
    
    
}, {timestamps: true});

module.exports = mongoose.model('DealerInfor', dealerInforSchema);