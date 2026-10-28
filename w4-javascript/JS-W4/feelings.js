function getSentimentScore(sentence) {
  const positiveList = [
    "happy",
    "awesome",
    "super",
    "great",
    "love",
    "good",
    "fun",
  ];
  const negativeList = ["hate", "boring", "sad", "bad", "awful", "terrible"];

  const words = sentence.toLowerCase().split(" ");

  const positiveWords = [];
  const negativeWords = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (positiveList.includes(word)) {
      positiveWords.push(word);
    } else if (negativeList.includes(word)) {
      negativeWords.push(word);
    }
  }

  return {
    score: positiveWords.length - negativeWords.length,
    positiveWords: positiveWords,
    negativeWords: negativeWords,
  };
}

console.log("Feeling");
console.log(getSentimentScore("I am mega super awesome happy"));
console.log(getSentimentScore("I hate doing boring stuff"));
