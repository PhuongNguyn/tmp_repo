const express = require('express');
const router = express.Router();

const {getAll, getByTeamId, getById, getByLeagueId, getByNameTeam, getByTeamIds} = require('../controllers/teamProfile.controller');

//router.post('/teamProfiles', create);
router.get('/teamProfiles/getAll', getAll); //truyen params limit , skip
router.get('/teamProfiles/getByTeamId/:teamId', getByTeamId);
router.get('/teamProfiles/getById/:id', getById);
router.get('/teamProfiles/getByLeagueId/:leagueId', getByLeagueId);
router.get('/teamProfiles/getByNameTeam/:name', getByNameTeam);
router.post('/teamProfiles/getByTeamIds/', getByTeamIds);
module.exports = router;