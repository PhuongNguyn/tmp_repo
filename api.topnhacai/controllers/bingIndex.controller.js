const fetch = require("isomorphic-fetch")

const API_KEY = "5eb246dc3d6b446ca8e7224c7073bf1c";
const siteUrl = "https://topnhacai.today"
const {dashLogger} = require('../logger');
exports.bingIndex = async (req, res) => {
    var listLinks = req.body.links ? req.body.links : null;
    
    try {
        if(listLinks && listLinks != null && listLinks.length > 0){
            var data = {
                "siteUrl": siteUrl,
                "urlList": listLinks
            }
            return await fetch(`https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlBatch?apikey=${API_KEY}`, {
                method : "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify(data)
            })
            .then(res => res?.json())
            .then(data => {
                if(data.d == null){
                    return res.send({
                        "code" : 200,
                        "message" : "Index Successfully !!!"
                      })
                }else{
                    dashLogger.error(`Error : ${data},Request : ${req.originalUrl}`);
                    return res.send(data);
                }
                
            })
            .catch(e => {
                dashLogger.error(`Error : ${e},Request : ${req.originalUrl}`);
                console.log(e);
                return e;
            });
        }
    } catch (error) {
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
    }
}