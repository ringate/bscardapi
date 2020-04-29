const express = require('express');
const cardController = require('./cardController');
const router = express.Router();

router.get('/id/:cardId', cardController.getCard);

module.exports = router;
