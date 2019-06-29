const mongoose = require('mongoose');
const Ingredient = require('../models/ingredient');

const dbName = 'recipe-app';
mongoose.connect(`mongodb://localhost/${dbName}`);

const ingredients = [
    {
      name: "Flour",
      image: "http://i0.wp.com/www.farmersbag.com/wp-content/uploads/2016/10/fresh-wheat-atta.jpg?zoom=0.8999999761581421&resize=408%2C306"
    },
    {
      name: "Eggs",
      image: "http://img.timesnownews.com/story/1511260245-1507534229-eggs.PNG"
    },
    {
      name: "Lettuce",
      image: "https://www.rareseeds.com/assets/1/14/DimRegular/Iceburg-Web.jpg"
    },
    {
      name: "Tomatoes",
      image: "http://2.bp.blogspot.com/_nmO0yJXWrQY/TB9Lv9hpIkI/AAAAAAAAA_s/fK6HdVThH6Q/s400/TomatoSandDCITALIAN+Fest+004.JPG"
    },
    {
      name: "Garlic",
      image: "https://cdn-bewellbuzz.pressidium.com/wp-content/uploads/2012/08/garlic-antibiotic7.jpg"
    },
    {
      name: "Onions",
      image: "http://www.chennellsfarms.co.uk/Content/images/onion.png"
    }
   ]
   Ingredient.create(ingredients, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${ingredients.length} ingredients`)
  });
  