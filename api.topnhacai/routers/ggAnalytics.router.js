const express = require('express');
const router = express.Router();
const {
    getData
} = require('../controllers/ggAnalytics.controller');
router.get('/ggAnalytics', (req, res) => {
    const { metrics, startDate, endDate, dimensions } = req.query;
    console.log(`Requested metrics: ${metrics}`);
    console.log(`Requested start-date: ${startDate}`);
    console.log(`Requested end-date: ${endDate}`);

    Promise.all(getData(metrics ? metrics.split(',') : metrics, startDate, endDate, dimensions ? dimensions.split(',') : dimensions))
        .then((data) => {
            // flatten list of objects into one object
            const body = {};
            Object.values(data).forEach((value) => {
                Object.keys(value).forEach((key) => {
                    body[key] = value[key];
                });
            });
            res.send({ data: body });
            console.log('Done');
        })
        .catch((err) => {
            console.log('Error:');
            console.log(err);
            res.send({ status: 'Error getting a metric', message: `${err}` });
            console.log('Done');
        });
});
router.get('/ggAnalytics/graph', (req, res) => {
    const { metric } = req.query;
    console.log(`Requested graph of metric: ${metric}`);
    // 1 week time frame
    let promises = [];
    for (let i = 7; i >= 0; i -= 1) {
        promises.push(getData([metric], `${i}daysAgo`, `${i}daysAgo`));
    }
    promises = [].concat(...promises);
    Promise.all(promises)
        .then((data) => {
            // flatten list of objects into one object
            const body = {};
            body[metric] = [];
            Object.values(data).forEach((value) => {
                body[metric].push(value[metric.startsWith('ga:') ? metric : `ga:${metric}`]);
            });
            console.log(body);
            res.send({ data: body });
            console.log('Done');
        })
        .catch((err) => {
            console.log('Error:');
            console.log(err);
            res.send({ status: 'Error', message: `${err}` });
            console.log('Done');
        });
});
module.exports = router;