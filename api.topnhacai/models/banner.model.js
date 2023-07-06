const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;


const bannerSchema = new mongoose.Schema({
    name : {
        type : String,
    },
    userId : {
        type : ObjectId,
        ref : 'User'
    },
    position : {
        type : String,
    },
    link : {
        type: String
    },
    image :{
        type : String
    },
    pageId : [{
        type: ObjectId,
        ref : 'Page'
    }]
}, {timestamps: true});

const Banner = mongoose.model('Banner', bannerSchema);

module.exports = Banner;