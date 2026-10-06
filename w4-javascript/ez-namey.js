const firstWords = [
  "Easy",
  "Awesome",
  "Smart",
  "Happy",
  "Quick",
  "Bright",
  "Bold",
  "Super",
  "Clever",
  "Green",
];
const secondWords = [
  "Corporation",
  "Labs",
  "Solutions",
  "Systems",
  "Hub",
  "Studio",
  "Ventures",
  "Works",
  "Group",
  "Factory",
];

const randomIndex1 = Math.floor(Math.random() * 10);
const randomIndex2 = Math.floor(Math.random() * 10);

const startupName = firstWords[randomIndex1] + " " + secondWords[randomIndex2];

console.log(
  'The startup: "' +
    startupName +
    '" contains ' +
    startupName.length +
    " characters",
);
