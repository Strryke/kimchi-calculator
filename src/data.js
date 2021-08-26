const recipe = {
  keto: {
    garlic: 40,
    onion: 50,
    ginger: 8,
    chilli: 20,
    chinchalok: 7,
    fishSauce: 20,
    chilliFlakes: 25,
    radish: 50,
    carrot: 0,
    chives: 15,
    springOnion: 15,
    cabbage: 770,
  },
  original: {
    garlic: 40,
    onion: 50,
    ginger: 8,
    chilli: 20,
    chinchalok: 7,
    fishSauce: 25,
    chilliFlakes: 25,
    radish: 20,
    carrot: 30,
    chives: 10,
    springOnion: 10,
    cabbage: 610,
    sugar: 30,
    riceFlour: 25,
    water: 110,
  },
};

let calculated = [];

const calcIngredients = (type, amount) => {
  let updated = { type: type };
  //find type, multiply by amount
  for (let ingredient in recipe[type]) {
    updated[ingredient] = (recipe[type][ingredient] / amount).toFixed(2);
  }
  calculated.push(updated);
};

const calcRecipe = (props) => {
  calculated = [];
  for (let type in props) {
    calcIngredients(type, props[type]);
  }
  return calculated;
};

export { calcRecipe, recipe };
