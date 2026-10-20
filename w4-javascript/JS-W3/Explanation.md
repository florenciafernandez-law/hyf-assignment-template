# Exercise Explanations

## 002.js

The starting point is the following formula:

```
time in hours = destinationDistance / speed
```

The value of `speed` (50) is kept, and to get 3 hours and 34 minutes, everything is first converted to hours:

```
3 + 34 / 60 = 3.5667 hours
```

The calculation is:

```javascript
destinationDistance: 50 * (3 + 34 / 60),
```

The expression in parentheses converts everything into a single unit: hours.

I used the following formulas to convert the total time back into hours and minutes:

```javascript
const hours = Math.floor(timeInHours);
const minutes = Math.round((timeInHours - hours) * 60);
```

---

## 003.js

To calculate what percentage of an 80-year life the three series represent, divide the total time spent watching the series by the number of days in an 80-year life, and multiply by 100:

```
percentage = (days spent watching the series / days in a lifetime) × 100
```

`getSeriesPercentage` calculates the percentage for a single series. The `for...of` loop calls that function for each series and stores the resulting text in `lines`. Finally, `join("\n")` combines the lines so they can be displayed.

```javascript
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
```

---

## 005.js

Inside the `addActivity` function, we create a `date` variable using the `Date` constructor, and then use `push` to include it in the new activity object that is added to the array:

```javascript
function addActivity(activity, duration) {
  const date = new Date().toLocaleDateString("en-US", dateOptions);
  activities.push({ date, activity, duration });
}
```

### New features

- Improve the `showStatus` function so it only shows the number of activities for the current day.
- Create a function that calculates the activity the user has spent the most time on.

### How it works

#### 1. The `activities` array

`activities` starts out empty. Every time an activity is logged, it is added to this array as an object.

#### 2. Date display options

```javascript
const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
```

These options make the date appear with the day of the week and the name of the month, instead of only numbers. The same options are used both when saving the date and when comparing it with today's date.

#### 3. Saving an activity with the current date

```javascript
function addActivity(activity, duration) {
  const date = new Date().toLocaleDateString("en-US", dateOptions);
  activities.push({ date, activity, duration });
}
```

The function receives the name of the activity and its duration in minutes. `new Date()` gets the current date, and `toLocaleDateString(...)` turns it into readable text. Then `push()` adds an object containing that date, activity and duration to the array.

That's why you can call the function like this:

```javascript
addActivity("Youtube", 30);
```

#### 4. Counting today's activities and minutes

```javascript
const today = new Date().toLocaleDateString("en-US", dateOptions);
const todaysActivities = activities.filter((item) => item.date === today);
```

`today` stores today's date using the same format used when logging activities. `filter()` creates a new list that only includes the activities whose date matches today.

The following condition handles the case where there are no activities today:

```javascript
if (todaysActivities.length === 0) {
  console.log("Add some activities before calling showStatus");
  return;
}
```

`return` ends the function at that point. This avoids trying to add up or display a status when there is nothing to count.

If there are activities, this code adds up their durations:

```javascript
const totalDuration = todaysActivities.reduce(
  (total, item) => total + item.duration,
  0,
);
```

`reduce()` goes through the list and accumulates the minutes. The `0` is the starting value of the total.

Then the number of activities and the accumulated minutes are displayed:

```javascript
console.log(
  `You have added ${todaysActivities.length} activities today. They amount to ${totalDuration} min. of usage`,
);
```

#### 5. Finding the activity with the most minutes

```javascript
function getMostUsedActivity(activities) {
```

This function receives the array of activities. First, it checks that the array isn't empty; if it is, it shows a message and stops:

```javascript
if (activities.length === 0) {
  console.log("Add some activities before calculating the most used activity");
  return;
}
```

Then it adds up the minutes, grouping the entries by activity name:

```javascript
const durationByActivity = activities.reduce((totals, item) => {
  totals[item.activity] = (totals[item.activity] || 0) + item.duration;
  return totals;
}, {});
```

For example, if the array has two `"Youtube"` entries of 30 and 20 minutes, they are grouped together as 50. The `{}` is the empty object where those totals are stored.

Next, `Object.entries()` turns that object into pairs of name and minutes, like `[["Youtube", 50], ["Instagram", 45]]`. `reduce()` compares those pairs and keeps the one with the highest duration:

```javascript
const [activity, duration] = Object.entries(durationByActivity).reduce(
  (mostUsed, current) => (current[1] > mostUsed[1] ? current : mostUsed),
);
```

> **Important:** this function checks _all_ the activities it receives, not just today's. `showStatus()`, on the other hand, does filter by today's date.

---
