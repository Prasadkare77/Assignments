function seasonalFruits() {
  const arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
  console.log("Array is: ",arrayFruits);
  console.log(``);

  let lengthOfArray = arrayFruits.length;
  console.log(`Length of array is: ${lengthOfArray} `);

  let firstElement = arrayFruits[0];
  let lastElement = arrayFruits[lengthOfArray-1];
  console.log(`First Element is: ${firstElement}`);
  console.log(`Last Element is: ${lastElement}`);
  console.log(``);

  console.log(`Adding "Papaya" before "Banana"`);
  arrayFruits.unshift("Papaya");
  console.log("Array is: ",arrayFruits);
  console.log(``);

  console.log(`Remove "Mango" from array`);
  arrayFruits.splice(4,1);
  console.log("Array is: ",arrayFruits);
  console.log(``);

  console.log(`Add "Pineapple" at the last position`);
  arrayFruits.push("PineApple");
  console.log("Array is: ",arrayFruits);
  console.log(``);

  console.log(`Insert "Dragon Fruit" before "WaterMelon`);
  arrayFruits.splice(4,0, "Dragon Fruit");
  console.log("Array is: ",arrayFruits);
  console.log(``);

  console.log(`Replace "Orange" with "Kiwi"`);
  arrayFruits.splice(2,1, "Kiwi");
  console.log("Array is: ",arrayFruits);
  console.log(``);

  console.log(`Element from index 1 to 4`);
  let sliced = arrayFruits.slice(1,5);
  console.log("Array is: ",sliced);
  console.log(``);

  console.log(`Last Three Element`);
  let lastThree = arrayFruits.slice(4,7);
  console.log("Array is: ",lastThree);
  console.log(``);

  



}
seasonalFruits();
