const boughtCandyPrices = [];

function addCandy(candyType, weight) {
  let pricePerGram;

  if (candyType === "sweet") {
    pricePerGram = 0.5;
  } else if (candyType === "chocolate") {
    pricePerGram = 0.7;
  } else if (candyType === "toffee") {
    pricePerGram = 1.1;
  } else if (candyType === "chewing-gum") {
    pricePerGram = 0.03;
  } else {
    console.log("We don't sell " + candyType);
    return;
  }

  boughtCandyPrices.push(pricePerGram * weight);
}

const amountToSpend = Math.random() * 100;

function canBuyMoreCandy() {
  let total = 0;

  for (let i = 0; i < boughtCandyPrices.length; i++) {
    total = total + boughtCandyPrices[i];
  }

  return total < amountToSpend;
}

addCandy("sweet", 20);
addCandy("chocolate", 10);

console.log("Ticket:", boughtCandyPrices);
console.log("Money in the wallet:", amountToSpend);

if (canBuyMoreCandy()) {
  console.log("You can buy more, so please do!");
} else {
  console.log("Enough candy for you!");
}

function canBuyMoreCandyWithWhile() {
  let total = 0;
  let i = 0;
  while (i < boughtCandyPrices.length) {
    total = total + boughtCandyPrices[i];
    i++;
  }
  return total < amountToSpend;
}
