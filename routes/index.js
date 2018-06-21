var express = require('express');
var router = express.Router();
const gamesController = require('../controllers/gameController')
/* GET page according by calling corresponding function in the controller. */
router.get('/', gamesController.home);
router.get('/games', gamesController.getGames);
router.get('/admin', gamesController.admin);
router.get('/playGame', gamesController.playGame);
router.get('/add', gamesController.addGame);
router.post('/add', gamesController.createGame); //req.body.title/publisher/..

module.exports = router;
