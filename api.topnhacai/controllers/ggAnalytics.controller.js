var { google } = require("googleapis");
var key = require("../service_account_tnc.json");
const path = require('path');
const analytics = google.analytics('v3');
const scopes = [
    'https://www.googleapis.com/auth/analytics',
    'https://www.googleapis.com/auth/analytics.readonly'
    ];
const view_id = '272835559';

const jwt = new google.auth.JWT({
    email: key.client_email,
    key: key.private_key.replace(new RegExp('\\\\n'), '\n'),
    scopes
});

async function getMetric(metric, startDate, endDate, dimensions, filters) {
    await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](
        Math.trunc(1000 * Math.random()),
    );
    const res = {};
    if(filters){
        const result = await analytics.data.ga.get({
            auth: jwt,
            ids: `ga:${view_id}`,
            'start-date': startDate,
            'end-date': endDate,
            metrics: metric,
            'dimensions': null,
            'filters' : 'ga:browser==' + filters
        });
        let metricString = metric.split(':')[1];
        res[metricString] = {
            value: parseInt(result.data.totalsForAllResults[metric], 10),
            start: startDate,
            end: endDate,
            data : result.data.rows
        };
        return res;
    }else{
        const result = await analytics.data.ga.get({
            auth: jwt,
            ids: `ga:${view_id}`,
            'start-date': startDate,
            'end-date': endDate,
            metrics: metric,
            'dimensions': null,
        });
        let metricString = metric.split(':')[1];
        res[metric] = {
            value: parseInt(result.data.totalsForAllResults[metric], 10),
            start: startDate,
            end: endDate,
            data : result.data.rows
        };
        return res;
    }
    
}
function parseMetric(metric) {
    let cleanMetric = metric;
    if (!cleanMetric.startsWith('ga:')) {
        cleanMetric = `ga:${cleanMetric}`;
    }
    return cleanMetric;
}

function getData(metrics = ['ga:users'], startDate = '30daysAgo', endDate = 'today', dimensions = null, filters = null) {
    // ensure all metrics have ga:
    const results = [];
    for (let i = 0; i < metrics.length; i += 1) {
        const metric = parseMetric(metrics[i]);
        const dimension = dimensions ? parseMetric(dimensions[i]) : null;
        results.push(getMetric(metric, startDate, endDate, dimension, filters));
    }

    return results;
}


module.exports = { getData };