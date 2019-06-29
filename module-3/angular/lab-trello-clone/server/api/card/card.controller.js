const _ = require("lodash");
mongoose = require("mongoose");
cardModel = require("./card.model");
listModel = require("../list/list.model");

exports.createCard = function(req, res, next) {
  const newCard = new cardModel({
    title: req.body.title,
    description: req.body.description,
    dueDate: req.body.dueDate,
    list: req.body.list,
    position: req.body.position
  });

  newCard.save((err, card) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "Unable to update card", error: err });
    } else {
      listModel
        .findById(card.list)
        .then(list => {
          list.cards.push(newCard);
          list.save();
          res.status(200).json({ message: "Card created" });
        })
        .catch(err => {
          res.status(500).json({ message: "Unable to find list", error: err });
        });
    }
  });
};

exports.editCard = function(req, res, next) {
  const cardId = req.params.id;

  cardModel.findByIdAndUpdate(cardId, { $set: req.body }, function(err, card) {
    if (err) {
      return res
        .status(400)
        .json({ message: "Unable to update card", error: err });
    }

    res.json({ message: "card successfully updated", card: card });
  });
};

exports.transferCard = function(req, res, next) {
  const cardId = req.params.id;
  let card = req.body.card;
  const sourceList = req.body.from;
  const targetList = req.body.to;
  card.list = targetList;

  cardModel.findByIdAndUpdate({ _id: cardId }, { $set: card }, function(
    err,
    card
  ) {
    if (err) {
      return res
        .status(400)
        .json({ message: "unable to update card", error: err });
    }

    return Promise.all([
      listModel
        .findByIdAndUpdate({ _id: sourceList }, { $pull: { cards: cardId } })
        .exec(),
      listModel
        .findByIdAndUpdate({ _id: targetList }, { $push: { cards: cardId } })
        .exec()
    ]).then(
      list => {
        return res.json({ message: "card successfully updated", list: list });
      },
      err => {
        return res
          .status(400)
          .json({ message: "unable to update refs", error: err });
      }
    );
  });
};

exports.removeCard = function(req, res) {
  cardModel.findByIdAndRemove(req.params.id, function(err, card) {
    if (err) {
      res.json({ message: "impossible to remove the card", error: err });
    }
    listModel
      .findByIdAndUpdate(card.list, { $pull: { cards: req.params.id } })
      .exec()
      .then(() => {
        return res.json({ message: "card successfully updated", list: list });
      })
      .catch(err => {
        res.status(400).json({ message: "Unable to remove card from list" });
      });
    res.json({ message: "card removed successfully" });
  });
};

/* {
	"card":{
    	"title": "Prueba 3333",
    	"description": "prueba333333333",
    	"list":"5af01de9312f6b3b36aa90ab"
	},
	"from":"5af01de9312f6b3b36aa90ab",
	"to":"5af020e4369fcc27b7bcc95e"
} */