const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;


const domainSchema = new mongoose.Schema({
    host : {
        type : String,
    },
    
}, {timestamps: true});

const Domain = mongoose.model('Domain', domainSchema);

module.exports = Domain;