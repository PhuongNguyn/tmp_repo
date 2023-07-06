const fetch = require("isomorphic-fetch")
const Cache = require('../models/cache.model');
const {dashLogger} = require('../logger');
const ISportsAPI_Key = "CegMwCscdLM1mcgM";

const paginate = (array, limit, skip) => {
    return array.slice(skip * limit, skip + 1 * limit);
}
//api isport
exports.allOdds = async (req, res) => {
   
    try {
        let bookmakerIds = req.query.bookmakerIds ? req.query.bookmakerIds : null;
        let matchIds = req.query.matchIds ? req.query.matchIds : null;
        let url = `${process.env.api_isports}/odds/all?api_key=${ISportsAPI_Key}`;
        if (matchIds) {
            url = url + `&matchIds=${matchIds}`;
        }
        if (bookmakerIds) {
            url = url + `&bookmakerIds=${bookmakerIds}`;
        }
        return fetch(url)
        .then(data => data.json())
        .then(obj => {
            return res.send(obj)
        })
    } catch (error) {
        dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message: error.message
        })
    }


}

exports.schedule = (req, res) => {
    try {
        let limit = req.query.limit ? parseInt(req.query.limit) : 10;
        let skip = req.query.skip ? parseInt(req.query.skip) : 0;
        let leagueId = req.query.leagueId ? req.query.leagueId : null;
        let matchId = req.query.matchId ? req.query.matchId : null;
        let date = req.query.date ? req.query.date : null;
        let url = `${process.env.api_isports}/schedule/basic?api_key=${ISportsAPI_Key}`;
        if (leagueId) {
            url = url + `&leagueId=${leagueId}`;
        }
        if (matchId) {
            url = url + `&matchId=${matchId}`;
        }
        if (date) {
            url = url + `&date=${date}`;
        }
        //check before call API
        Cache.findOne({key : url})
        .select('value')
        .exec((err, data) => {
            if(err){
                dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                return res.status(400).json({
                    message : err.message
                })
            } 
            if(data){
                return res.json(data.value);
            }else{
                return fetch(url)
                .then(data => data.json())
                .then(obj => {
                    if(obj.data && obj.data.length > 0){
                        var datas = paginate(obj.data, limit, skip);
                        var result = {
                            total: obj.data.length,
                            skip: skip,
                            pageSize: datas.length,
                            datas: datas
                        }
                        let cache = new Cache();
                        cache.key = url;
                        cache.value = JSON.stringify(result);
                        cache.save();
                        return res.json(cache.value);
                    }else{
                        return res.send(obj)
                    }
                })
            }

        })
   
    } catch (error) {
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message: error.message
        })
    }


}
exports.bookmaker = () => {
    try {
        let url = `${process.env.api_isports}/bookmaker?api_key=${ISportsAPI_Key}`;
        return fetch(url)
            .then(data => data.json())
            .then(obj => {
                return res.send(obj);
            })
    } catch (error) {
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message: error.message
        })
    }

}
exports.preAndInOdds = async (req, res) => {
    try {
        let matchIds = req.query.matchIds ? req.query.matchIds : null;
        let bookmakerIds = req.query.bookmakerIds ? req.query.bookmakerIds : null;
        let url = `${process.env.api_isports}/odds/all?api_key=${ISportsAPI_Key}`;
        if (matchIds) {
            url = url + `&matchIds=${matchIds}`;
        }
        if (bookmakerIds) {
            url = url + `&companyId=${bookmakerIds}`;
        }
        return fetch(url)
            .then(data => data.json())
            .then(obj => {
                return res.send(obj)
            })
    } catch (error) {
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message: error.message
        })
    }

}
exports.liveScores = (req, res) => {
    try {
        let limit = req.query.limit ? req.query.limit : null;
        let url = `${process.env.api_isports}/livescores?api_key=${ISportsAPI_Key}`;
        return fetch(url)
            .then(data => data.json())
            .then(obj => {
                var listSchedule = [];
                if(obj && obj.data){
                    obj?.data.map(item => {
                        if (limit) {
                            if (listSchedule.length < limit) {
                                if (item.status === 0) {
                                    listSchedule.push(item);
                                }
                            }
                        } else {
                            if (item.status === 0) {
                                listSchedule.push(item);
                            }
                        }
    
                    })
                }else{
                   return res.send(obj.message);
                }
                return res.send(listSchedule)
            })
    } catch (error) {
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message: error.message
        })
    }


}
//date = yyyy-mm-dd
exports.events = (req, res) => {
    try {
        let date = req.query.date ? req.query.date : null;
        if (date) {
            let url = `${process.env.api_isports}/events?api_key=${ISportsAPI_Key}&date=${date}`;
            return fetch(url)
                .then(data => data.json())
                .then(obj => {
                    return res.send(obj);
                })
        } else {
            dashLogger.error(`Error : Date is required,Request : ${req.originalUrl}`);
            return res.status(400).json({
                message: 'Date is required'
            })
        }
    } catch (error) {
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message: error.message
        })
    }


}
//thống kê số liệu, date = yyyy-mm-dd
exports.stats = (req, res) => {
    try {
        let date = req.query.date ? req.query.date : null;
        if (date) {
            let url = `${process.env.api_isports}/stats?api_key=${ISportsAPI_Key}&date=${date}`;
            return fetch(url)
                .then(data => data.json())
                .then(obj => {
                    return res.send(obj)
                })
        } else {
            dashLogger.error(`Error : Date is required,Request : ${req.originalUrl}`);
            return res.status(400).json({
                message: 'Date is required'
            })
        }
    } catch (error) {
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message: error.message
        })
    }


}
//phạt góc , date = yyyy-mm-dd
exports.corner = (req, res) => {
    try {
        let date = req.query.date ? req.query.date : null;
        if (date) {
            let url = `${process.env.api_isports}/corner?api_key=${ISportsAPI_Key}&date=${date}`;
            return fetch(url)
                .then(data => data.json())
                .then(obj => {
                    return res.send(obj)
                })
        } else {
            dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
            return res.status(400).json({
                message: 'Date is required'
            })
        }
    } catch (error) {
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message: error.message
        })
    }



}
exports.lineUps = (req, res) => {
    try {
        let matchId = req.query.matchId ? req.query.matchId : null;
        if (matchId) {
            let url = `${process.env.api_isports}/lineups?api_key=${ISportsAPI_Key}&matchId=${matchId}`;
            return fetch(url)
                .then(data => data.json())
                .then(obj => {
                    return res.send(obj)
                })
        } else {
            dashLogger.error(`Error : MatchId is required,Request : ${req.originalUrl}`);
            return res.status(400).json({
                message: 'MatchId is required'
            })
        }
    } catch (error) {
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message: error.message
        })
    }


}
//chấn thương
exports.injury = () => {
    try {
        let url = `${process.env.api_isports}/injury?api_key=${ISportsAPI_Key}`;
        return fetch(url)
            .then(data => data.json())
            .then(obj => {
                return res.send(obj)
            })
    } catch (error) {
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message: error.message
        })
    }

}
//danh sách trận đấu và text trực tiếp
exports.matchListOfLiveText = () => {
    try {
        let url = `${process.env.api_isports}/livetext/list?api_key=${ISportsAPI_Key}`;
        return fetch(url)
            .then(data => data.json())
            .then(obj => {
                return res.send(obj)
            })
    } catch (error) {
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message: error.message
        })
    }

}
exports.liveText = (req, res) => {
    try {
        let matchId = req.query.matchId ? req.query.matchId : null;
        if (matchId) {
            let url = `${process.env.api_isports}/livetext?api_key=${ISportsAPI_Key}&matchId=${matchId}`;
            return fetch(url)
                .then(data => data.json())
                .then(obj => {
                    return res.send(obj)
                })
        } else {
            dashLogger.error(`Error : MatchId is required,Request : ${req.originalUrl}`);
            return res.status(400).json({
                message: 'MatchId is required'
            })
        }
    } catch (error) {
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message: error.message
        })
    }


}
//chuyển nhượng , day = 1 
exports.transfer = (req, res) => {
    try {
        let day = req.query.day ? req.query.day : 1;
        if (day) {
            let url = `${process.env.api_isports}/transfer?api_key=${ISportsAPI_Key}&day=${day}`;
            return fetch(url)
                .then(data => data.json())
                .then(obj => {
                    return res.send(obj)
                })
        } else {
            dashLogger.error(`Error : Day is required, Request : ${req.originalUrl}`);
            return res.status(400).json({
                message: 'Day is required'
            })
        }

    } catch (error) {
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message: error.message
        })
    }

}
//phân tích trận đấu 
exports.analysis = (req, res) => {
    let matchId = req.query.matchId ? req.query.matchId : null;
    try {
        if (matchId) {
            let url = `${process.env.api_isports}/analysis?api_key=${ISportsAPI_Key}&matchId=${matchId}`;
            //check before call API
            Cache.findOne({key : url})
            .select('value')
            .exec((err, data) => {
                if(err){
                    dashLogger.error(`Error : ${err},Request : ${req.originalUrl}`);
                    return res.status(400).json({
                        message : err.message
                    })
                } 
                if(data){
                    return res.json(data.value);
                }else{
                    return fetch(url)
                    .then(data => data.json())
                    .then(obj => {
                        if(obj.data){
                            let cache = new Cache();
                            cache.key = url;
                            cache.value = JSON.stringify(obj.data);
                            cache.save();
                            return res.json(cache.value);
                        }else{
                            return res.send(obj);
                        }
                    })
                }

            })
           
        } else {
            dashLogger.error(`Error : MatchId required,Request : ${req.originalUrl}`);
            return res.status(400).json({
                message: 'MatchId required'
            })
        }
    } catch (error) {
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message: error.message
        })
    }

}
exports.listOfPlayerStats = () => {
    try {
        let url = `${process.env.api_isports}/match/list?api_key=${ISportsAPI_Key}`;
        return fetch(url)
            .then(data => data.json())
            .then(obj => {
                return res.send(obj)
            })
    } catch (error) {
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message: error.message
        })
    }

}

exports.playerStats = (req, res) => {
    let matchId = req.query.matchId ? req.query.matchId : null;
    try {
        if (match) {
            let url = `${process.env.api_isports}/match/list?api_key=${ISportsAPI_Key}&matchId=${matchId}`;
            return fetch(url)
                .then(data => data.json())
                .then(obj => {
                    return res.send(obj)
                })
        } else {
            dashLogger.error(`Error : MatchId required,Request : ${req.originalUrl}`);
            return res.status(400).json({
                message: 'MatchId required'
            })
        }
    } catch (error) {
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message: error.message
        })
    }

}
exports.leagueStanding = (req, res) => {
    let leagueId = req.query.leagueId ? req.query.leagueId : null;
    try {
        if (leagueId) {
            let url = `${process.env.api_isports}/standing/league?api_key=${ISportsAPI_Key}&leagueId=${leagueId}`;
            return fetch(url)
                .then(data => data.json())
                .then(obj => {
                    return res.send(obj)
                })
        } else {
            dashLogger.error(`Error : leagueId required, Request : ${req.originalUrl}`);
            return res.status(400).json({
                message: 'leagueId required'
            })
        }
    } catch (error) {
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message: error.message
        })
    }


}
exports.cupStanding = (req, res) => {
    let leagueId = req.query.leagueId ? req.query.leagueId : null;
    try {
        if (leagueId) {
            let url = `${process.env.api_isports}/standing/cup?api_key=${ISportsAPI_Key}&leagueId=${leagueId}`;
            return fetch(url)
                .then(data => data.json())
                .then(obj => {
                    return res.send(obj)
                })
        } else {
            dashLogger.error(`Error : leagueId required, Request : ${req.originalUrl}`);
            return res.status(400).json({
                message: 'leagueId required'
            })
        }
    } catch (error) {
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message: error.message
        })
    }


}
// leagueId là bắt buộc , season thì không eg season=2020 or 2021-2022
exports.topScorer = (req, res) => {
    try {
        let leagueId = req.query.leagueId ? req.query.leagueId : null;
        let season = req.query.season ? req.query.season : null;
        let url = `${process.env.api_isports}/topscorer?api_key=${ISportsAPI_Key}`;
        if (leagueId) {
            url = url + `&leagueId=${leagueId}`
        }
        if (season) {
            url = url + `&season=${season}`
        }
        return fetch(url)
            .then(data => data.json())
            .then(obj => {
                return res.send(obj)
            })
    } catch (error) {
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message: error.message
        })
    }

}
exports.matchModifyRecord = () => {
    try {
        let url = `${process.env.api_isports}/schedule/modify?api_key=${ISportsAPI_Key}`;
        return fetch(url)
            .then(data => data.json())
            .then(obj => {
                return res.send(obj)
            })
    } catch (error) {
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message: error.message
        })
    }

}

exports.preAndInOddsMain = (req, res) => {
    try {
        let matchIds = req.query.matchIds ? req.query.matchIds : null;
        let bookmakerIds = req.query.bookmakerIds ? req.query.bookmakerIds : null;
        let url = `${process.env.api_isports}/odds/main?api_key=${ISportsAPI_Key}`;
        if (matchIds) {
            url = url + `&matchId=${matchIds}`;
        }
        if (bookmakerIds) {
            url = url + `&companyId=${bookmakerIds}`;
        }
        return fetch(url)
            .then(data => data.json())
            .then(obj => {
                return res.send(obj)
            })
    } catch (error) {
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        return res.status(400).json({
            message: error.message
        })
    }
}
