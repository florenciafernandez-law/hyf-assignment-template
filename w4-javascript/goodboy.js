const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const dogYear = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = true;
console.log(
  "Your dog will be " +
    (shouldShowResultInDogYears ? dogYear * 7 : dogYear) +
    " years old in " +
    dogYearFuture,
);
