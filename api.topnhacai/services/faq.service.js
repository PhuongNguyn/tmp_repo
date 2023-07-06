const FAQ = require('../models/FAQ.model');
const mongoose = require('mongoose');
const Dealer = require('../models/dealer.model')

module.exports = {
    getAll,
    create,
    edit,
    search,
    removeFAQ,
    getById
}

function isValidId(id){
    return mongoose.Types.ObjectId.isValid(id);
}

async function search(search){
    if(search){
        var query = await FAQ.find({
            $or: [{faq_name : {$regex: search, $options: 'i'}}, {faq_question: {$regex: search, $options : 'i'}}]
        }).sort({'updatedAt': -1});
        return query.map(x => basicDetails(x))
    }else{
        var query = await FAQ.find({}).sort({'updatedAt': -1});
        return query.map(x => basicDetails(x));
    }
}

async function create({faq_name, faq_question, faq_answer}) {
    if(faq_name == "" && faq_question == "" && faq_answer == ""){
        return {
            message : 'Vui lòng nhập thông tin'
        }
    }else{
        let faq = new FAQ();
        faq.faq_name = faq_name;
        faq.faq_question = faq_question;
        faq.faq_answer = faq_answer;
        await faq.save((err, result) => {
            if(err){
                return {
                    message : err
                }
            }
        });
        return basicDetails(faq);
    }
    
}
async function edit ({id, faq_name, faq_question, faq_answer}) {
    if(!isValidId(id)) return {message : 'FAQ not found'};
    if(faq_name == "" && faq_question == "" && faq_answer == ""){
        return {
            message : 'Vui lòng nhập thông tin'
        }
    }else{
        const query = await FAQ.findById(id);
        query.faq_name = faq_name;
        query.faq_question = faq_question;
        query.faq_answer = faq_answer;
        query.save();
        return query;
    }
}
async function removeFAQ(id){
    if (!isValidId(id)) return {message : 'FAQ not found'};
    var query = [];
    var query = await FAQ.findByIdAndRemove(id);
    return query;
}
function getAll (){
    var query  = FAQ.find({})
        .sort({'updatedAt': -1})
        .select('_id faq_name faq_question faq_answer')
    if(!query) return {message : 'FAQ not found'};
    return query;
}
async function getById(id) {
    if (!isValidId(id)) return {message : 'FAQ not found'};
    var query = await FAQ.findOne({_id : mongoose.Types.ObjectId(id)}).exec();
    return query;
}
function basicDetails(faq){
    const {id, faq_name , faq_question, faq_answer} = faq
    return {id, faq_name , faq_question, faq_answer};
}
