const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const leagueProfileSchema = new mongoose.Schema({
    leagueId : {
        type: String,
        required: true,
        uniqure: true,
        index: true
    },
    name : {
        type: String,
    },
    shortName : {
        type: String,
    },
    type : {
        type: Number,
    },
    subLeagueName : { 
        type: String,
    },
}, {timestamps: true});

module.exports = mongoose.model('LeagueProfile', leagueProfileSchema);