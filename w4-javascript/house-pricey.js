const wide = 8;
const deep = 10;
const high = 10;
const gardenSizeInM2 = 100;
const volumeInMeters = wide * deep * high;
const actualPrice = 2500000;
const housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
console.log("The price of the Peter's house is: " + housePrice);
if (actualPrice > housePrice) {
  console.log("Peter is paying too much. Estimated price: " + housePrice);
} else {
  console.log("Peter is paying too little. Estimated price: " + housePrice);
}

const wide2 = 5;
const deep2 = 11;
const high2 = 8;
const secondGardenSizeInM2 = 70;
const volumeInMeters2 = wide2 * deep2 * high2;
const actualPrice2 = 1000000;
const housePrice2 = volumeInMeters2 * 2.5 * 1000 + secondGardenSizeInM2 * 300;
console.log("The price of the Julia's house is: " + housePrice2);
if (actualPrice2 > housePrice2) {
  console.log("Julia is paying too much. Estimated price: " + housePrice2);
} else {
  console.log("Julia is paying too little. Estimated price: " + housePrice2);
}
