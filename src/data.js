const recipe = {
  Original: {
    weight: 1,
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
  Keto: {
    weight: 1,
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
  "Strict Keto": {
    weight: 0.5,
    ginger: 12,
    chilli: 3,
    fishSauce: 4,
    chilliFlakes: 15,
    radish: 15,
    carrot: 25,
    cabbage: 340,
    sesame: 8,
    salt: 5,
    pumpkin: 80,
  },
  Strict: {
    weight: 0.5,
    ginger: 12,
    chilli: 3,
    fishSauce: 4,
    chilliFlakes: 15,
    radish: 15,
    carrot: 25,
    cabbage: 260,
    sesame: 8,
    salt: 5,
    sugar: 15,
    riceFlour: 10,
    water: 60,
    pumpkin: 80,
  },
  Vegan: {
    weight: 0.5,
    garlic: 10,
    ginger: 5,
    chilli: 3,
    fishSauce: 4,
    chilliFlakes: 12,
    radish: 10,
    carrot: 25,
    chives: 10,
    springOnion: 5,
    cabbage: 260,
    salt: 3,
    sugar: 15,
    riceFlour: 10,
    water: 60,
    pumpkin: 80,
  },
  "Vegan Keto": {
    weight: 0.5,
    garlic: 10,
    ginger: 5,
    chilli: 3,
    fishSauce: 4,
    chilliFlakes: 12,
    radish: 10,
    carrot: 25,
    chives: 10,
    springOnion: 5,
    cabbage: 340,
    salt: 3,
    pumpkin: 80,
  },
  "Radish Keto": {
    weight: 0.3,
    garlic: 10,
    ginger: 5,
    chilli: 5,
    chinchalok: 5,
    fishSauce: 5,
    chilliFlakes: 15,
    radish: 280,
    springOnion: 10,
    salt: 5,
  },
  "Radish Original": {
    weight: 0.3,
    garlic: 10,
    ginger: 5,
    chilli: 5,
    chinchalok: 5,
    fishSauce: 5,
    chilliFlakes: 15,
    radish: 230,
    springOnion: 10,
    riceFlour: 10,
    sugar: 15,
    water: 30,
    salt: 5,
  },
  Chives: {
    weight: 0.3,
    onion: 80,
    ginger: 15,
    fishSauce: 20,
    chilliFlakes: 15,
    chives: 200,
  },
};

let calculated = [];

const calcIngredients = (type, amount) => {
  console.log(type + amount);
  let updated = { type: type };
  //find type, multiply by amount
  for (let ingredient in recipe[type]) {
    console.log(recipe[type]["weight"]);
    updated[ingredient] = (
      (recipe[type][ingredient] / recipe[type]["weight"]) *
      amount
    ).toFixed(1);
  }
  calculated.push(updated);
};

const calcRecipe = (props) => {
  calculated = [];
  for (let type in props) {
    calcIngredients(type, props[type]);
  }
  console.log(calculated);
  return calculated;
};

export { calcRecipe, recipe };
