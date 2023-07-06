const express = require('express');
const router = express.Router();
const {
    //create
    getAll,
    getByLeagueId,
    getByNameLeague,
    getById,
    getByTypeLeague
} = require('../controllers/leagueProfile.controller')
router.get('/leagueProfiles/getAll', getAll); //truyen params limit , skip
router.get('/leagueProfiles/getByLeagueId/:leagueId', getByLeagueId);
router.get('/leagueProfiles/getById/:id', getById);
router.get('/leagueProfiles/getByNameLeague/:name', getByNameLeague);
router.get('/leagueProfiles/getByTypeLeague/:type', getByTypeLeague);
// router.post('/leagueProfiles', create);
module.exports = router;