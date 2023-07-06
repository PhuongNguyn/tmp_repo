const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const faqSchema = new mongoose.Schema({
    faq_name : {
        type: String,
    },
    faq_question : {
        type: String,
    },
    faq_answer : {
        type: String,
    },
}, {timestamps: true});

module.exports = mongoose.model('FAQ', faqSchema);