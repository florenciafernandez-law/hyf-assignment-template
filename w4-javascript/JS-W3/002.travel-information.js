const travelInformation = {
  speed: 50,
  destinationDistance: 178,
};

const travelTime = notThisFunctionName(travelInformation);
console.log(travelTime);

function notThisFunctionName(travelInformation) {
  const timeInHours =
    travelInformation.destinationDistance / travelInformation.speed;
  const hours = Math.floor(timeInHours);
  const minutes = Math.round((timeInHours - hours) * 60);
  return `${hours} hours and ${minutes} minutes`;
}
