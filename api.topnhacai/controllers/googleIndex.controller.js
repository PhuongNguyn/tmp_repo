var request = require("request");
var { google } = require("googleapis");
var key = require("../service_account_tnc.json");
const path = require('path');
const analytics = google.analytics('v3');
const {dashLogger} = require('../logger');

const scopes = ['https://www.googleapis.com/auth/analytics.readonly'];
const view_id = '272283889';

const jwtClient = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  ["https://www.googleapis.com/auth/indexing"],
  null
);
const jwt = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  scopes,
  null
);

//Use jwtClient to call Post method


exports.indexGG = (req, res) => {
  let link = req.params.link ? req.params.link : null;
  try{
    if(link){
      jwtClient.authorize(function(err, tokens) {
        if (err) {
          dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
          console.log(err);
          return;
        }
        let options = {
          url: "https://indexing.googleapis.com/v3/urlNotifications:publish",
          method: "POST",
          // Your options, which must include the Content-Type and auth headers
          headers: {
            "Content-Type": "application/json"
          },
          auth: { "bearer": tokens.access_token },
          // Define contents here. The structure of the content is described in the next step.
          json: {
            "url": link,
            "type": "URL_UPDATED"
          }
        };
        request(options, function (error, response, body) {
          if(response.statusCode == 200){
            return res.json({
              "code" : 200,
              "message" : "Index Successfully !!!"
            })
          }else{
            return res.json(body)
          }
        });
      });
    }else{
      dashLogger.error(`Error : Link not found,Request : ${req.originalUrl}`);
      return res.status(400).json({
        message: 'Link not found'
      })
    }
  }catch (err){
    dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
      return res.status(400).json({
        message: err.message
      })
  }
  
}

exports.indexBatchGG = (req, res) => {
  var listLinks = req.body.links ? req.body.links : null;
  try {
    if(listLinks && listLinks != null && listLinks.length > 0){
      jwtClient.authorize(function(err, tokens){
        if(err){
          dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
          console.log(err);
          return;
        }
        const items = listLinks.map(line => {
          return {
            'Content-Type': 'application/http',
            'Content-ID': '',
            body:
              'POST /v3/urlNotifications:publish HTTP/1.1\n' +
              'Content-Type: application/json\n\n' +
              JSON.stringify({
                url: line,
                type: 'URL_UPDATED'
              })
          };
        });
        const options = {
          url: 'https://indexing.googleapis.com/batch',
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/mixed'
          },
          auth: { bearer: tokens.access_token },
          multipart: items
        };
        request(options, (err, response, body) => {
          if(response.statusCode == 200){
            return res.json({
              "code" : 200,
              "message" : "Index Successfully !!!"
            })
          }else{
            return res.json(body)
          }
        });
      })
    }else{
      dashLogger.error(`Error : Links not found,Request : ${req.originalUrl}`);
      return res.status(400).json({
        message: 'Links not found'
      })
    }
  } catch (error) {
    dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
    return res.status(400).json({
      message: error.message
    })
  }
}
