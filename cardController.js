const cardData = require('./bsdata');

var cardController = {};

cardController.getCard = (req, res) => {
  let card = cardData['data'].find(card => card.info_1 === req.params.cardId);
  Object.assign(card, {
    card_image_small: 'http://hk.battlespirits.com/image/card_serch/card/' + card.info_1 + '.jpg'
  });
  res.json(card);
};

module.exports = cardController;