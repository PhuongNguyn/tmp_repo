const express = require('express');
const router = express.Router();
const {
    allOdds,
    schedule,
    bookmaker,
    preAndInOdds,
    liveScores,
    events,
    stats,
    corner,
    lineUps,
    injury,
    matchListOfLiveText,
    liveText,
    transfer,
    analysis,
    listOfPlayerStats,
    playerStats,
    leagueStanding,
    cupStanding,
    topScorer,
    matchModifyRecord,
    preAndInOddsMain
} = require('../controllers/isport.controller');

router.get('/isports/allOdds', allOdds);
router.get('/isports/schedule', schedule);
router.get('/isports/bookmaker', bookmaker);
router.get('/isports/preAndInOdds', preAndInOdds);
router.get('/isports/liveScores', liveScores);
router.get('/isports/events', events);
router.get('/isports/stats', stats);
router.get('/isports/corner', corner);
router.get('/isports/lineUps', lineUps);
router.get('/isports/injury', injury);
router.get('/isports/matchListOfLiveText', matchListOfLiveText);
router.get('/isports/liveText', liveText);
router.get('/isports/transfer', transfer);
router.get('/isports/analysis', analysis);
router.get('/isports/listOfPlayerStats', listOfPlayerStats);
router.get('/isports/playerStats', playerStats);
router.get('/isports/leagueStanding', leagueStanding);
router.get('/isports/cupStanding', cupStanding);
router.get('/isports/topScorer', topScorer);
router.get('/isports/matchModifyRecord', matchModifyRecord);
router.get('/isports/preAndInMainOdds', preAndInOddsMain)
module.exports = router;