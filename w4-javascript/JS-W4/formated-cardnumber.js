function formatCreditCardNumber(cardNumber) {
  const digits = String(cardNumber);
  let formatted = "";

  if (typeof cardNumber !== "number") {
    return "Error: numbers only allowed.";
  }

  for (let i = 0; i < digits.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formatted = formatted + " ";
    }
    formatted = formatted + digits[i];
  }

  return {
    original: cardNumber,
    formatted: formatted,
  };
}

console.log(formatCreditCardNumber(4568963258742358));
