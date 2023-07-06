const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const postSchema = new mongoose.Schema({
    post_type : {
        type: String,
    },
    post_title : {
        type: String,
        required: true
    },
    post_taxid : [
        {
            type: ObjectId, 
            ref : 'Taxonomy', 
            required: true
        }
    ],
    post_views : {
        type: Number,
        default: 0
    },
    post_status : {
        type: String,
    },
    post_userid : {
        type: ObjectId,
        ref: 'User'
    },
    post_image : {
        type: String,
    },
    post_content : {
        type: {},
        max : 9999999999
    },
    post_slug : {
        type: String,
    },
    post_description : {
        type: {},
        max : 9999999999
    },
    post_schemaid : [
        {
            type: ObjectId, 
            ref : 'Schema', 
        }
    ],
    post_keyfocus : [
        {
            type : String
        }
    ]

    
    
}, {timestamps: true});

module.exports = mongoose.model('Post', postSchema);