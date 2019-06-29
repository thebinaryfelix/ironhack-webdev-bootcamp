const express           = require('express');
const router            = express.Router();

const dishes            = require('./dishes');
const ingredients       = require('./ingredients');
const dishIngredients   = require('./dish-ingredients');

router.use('/dishes', dishes);
router.use('/ingredients', ingredients);
router.use('/', dishIngredients);

module.exports = router;
