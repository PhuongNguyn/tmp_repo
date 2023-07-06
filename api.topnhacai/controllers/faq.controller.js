const faqService = require('../services/faq.service');

function getAll(req, res, next) {
    faqService.getAll()
        .then(faq => res.json(faq))
        .catch(next);
}

async function create(req, res, next) {
    const {id, faq_name , faq_question, faq_answer} = req.body;
    var query  = await faqService.create({id, faq_name , faq_question, faq_answer});
    return res.json(query);    
}

async function edit (req, res, next) {
    const id = req.params?.id;
    const {faq_name , faq_question, faq_answer} = req.body;
    var query = await faqService.edit({id, faq_name , faq_question, faq_answer});
    return res.json(query);
}
async function search (req, res, next) {
    const search = req.query?.q;
    var query = await faqService.search(search);
    return res.json(query);
}
async function getById(req, res, next) {
    const id = req.params?.id;
    var query = await faqService.getById(id);
    return res.json(query)
}
async function remove (req, res){
    const id = req.params?.id;
    var query = await faqService.removeFAQ(id);
    if(query){
        return res.status(200).json(
            {
                isSuccess : true,
                message : 'Successfully'
            }
        )
    }else{
        return res.status(400).json(
            {
                isSuccess : false,
                message: 'FAQ not found'
            }
        )
    }
}
module.exports = {
    getAll,
    create,
    edit,
    search,
    remove,
    getById
}