const seriesDurations = [
  {
    title: "Attack on Titan",
    days: 1,
    hours: 13,
    minutes: 14,
  },
  {
    title: "Black Mirror",
    days: 1,
    hours: 8,
    minutes: 48,
  },
  {
    title: "Solo Leveling",
    days: 0,
    hours: 9,
    minutes: 35,
  },
];

function getSeriesPercentage(series) {
  const days = series.days + series.hours / 24 + series.minutes / 1440;
  return (days / (80 * 365)) * 100;
}

function logOutSeriesText() {
  const lines = [];

  for (const series of seriesDurations) {
    const percentage = getSeriesPercentage(series);
    lines.push(`${series.title} took ${percentage.toFixed(3)}% of my life`);
  }

  return lines.join("\n");
}

console.log(logOutSeriesText());
