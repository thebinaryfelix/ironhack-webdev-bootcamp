const express    = require('express');
const router     = express.Router();
const Dish      = require('../../models/dish');

router.get('/', (req, res, next) => {
  Dish.find({}, (err, dishes) => {
    if (err) { return res.json(err).status(500); }

    return res.json(dishes);
  });
});

router.get('/:id', (req, res, next) => {
  Dish.findById(req.params.id)
    .populate('ingredients.ingredientId')
    .exec((err, dish) => {
      if (err)         { return res.status(500).json(err); }
      if (!dish)      { return res.status(404).json(new Error("404")) }

      return res.json(dish);
    });
});

router.post('/', (req, res, next) => {
  const newDish = new Dish({
    name: req.body.name,
    description: req.body.description,
    image: req.body.image
  });

  newDish.save( (err) => {
    if (err) { return res.status(500).json(err); }

    return res.status(200).json(newDish);
  });
});

module.exports = router;
