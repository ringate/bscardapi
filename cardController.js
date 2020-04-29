const cardData = require('./bsdata');

var cardController = {};

cardController.getCard = (req, res) => {
  let card = cardData['data'].find(card => card.info_1 === req.params.cardId);
  res.json(card);
};

module.exports = cardController;