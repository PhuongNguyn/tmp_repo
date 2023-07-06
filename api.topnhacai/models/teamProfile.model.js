const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const teamProfileSchema = new mongoose.Schema({
    teamId : {
        type: String,
        trim: true,
        required: true,
        uniqure: true,
        index: true
    },
    leagueId : {
        type: String,
        required: true,
    },
    name : {
        type: String,
    },
    logo : {
        type: String,
    },
    foundingDate : { 
        type: String,
    },
    address : {
        type: String,
    },
    area : {
        type: String,
    },
    venue : {
        type: String,
    },
    capacity : {
        type: String,
    },
    coach : {
        type: String,
    },
    website : {
        type: String,
    },
    
    
}, {timestamps: true});

module.exports = mongoose.model('TeamProfile', teamProfileSchema);