function getClothesForTemperature(temperature) {
  if (temperature < 0) {
    return "a winter coat, a hat and gloves";
  } else if (temperature < 10) {
    return "a warm jacket and a scarf";
  } else if (temperature < 18) {
    return "a light jacket and jeans";
  } else if (temperature === undefined) {
    return "no temperature available";
  } else {
    return "shorts and a t-shirt";
  }
}

const clothesToWear = getClothesForTemperature();
console.log(clothesToWear);
