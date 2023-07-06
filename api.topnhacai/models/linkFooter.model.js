const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const linkFooterSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    link : {
        type: String,
        required: true
    },
    status : {
        type : Boolean,
        default : true,
    }
    
}, {timestamps: true});

module.exports = mongoose.model('linkFooter', linkFooterSchema);