const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;


const cacheSchema = new mongoose.Schema({
    key : {
        type : String,
        unique: true,
    },
    value : {
        type : String,
        unique: false,
    },
    
}, {timestamps: true});

const Cache = mongoose.model('Caches', cacheSchema);

module.exports = Cache;