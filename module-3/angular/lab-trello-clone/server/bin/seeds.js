require("dotenv").config();
const mongoose = require("mongoose");
const Card = require("../api/card/card.model");
const List = require("../api/list/list.model");

const DBURL = process.env.MONGODB_URI;

mongoose
  .connect(DBURL)
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const lists = [
  {
    title: "List 1",
    position: 1
  }
];

List.create(lists, (err, listDocs) => {
  if (err) {
    throw err;
  }
  const listAdded = listDocs[0];
  console.log(`Created list`);

  const cards = [
    {
      title: "First Card",
      description: "A very cool card",
      position: 1,
      list: listAdded._id
    },
    {
      title: "Second Card",
      description: "A very cool card",
      position: 2,
      list: listAdded._id
    },
    {
      title: "Third Card",
      description: "A very cool card",
      position: 3,
      list: listAdded._id
    },
    {
      title: "Fourth Card",
      description: "A very cool card",
      position: 4,
      list: listAdded._id
    }
  ];

  Card.create(cards)
    .then(cardDocs => {
      cardDocs.forEach(e => {
        listAdded.cards.push(e._id);
      });
    })
    .then(() => {
      listAdded.save().then(() => console.log(`Created ${cards.length} cards`));
    });
});
