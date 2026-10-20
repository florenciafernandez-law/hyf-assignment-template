let activities = [];

const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

function addActivity(activity, duration) {
  const date = new Date().toLocaleDateString("en-US", dateOptions);
  activities.push({ date, activity, duration });
}

addActivity("Youtube", 30);
addActivity("Instagram", 45);
addActivity("Facebook", 80);

console.log(activities);

function showStatus(activities) {
  const today = new Date().toLocaleDateString("en-US", dateOptions);
  const todaysActivities = activities.filter((item) => item.date === today);

  if (todaysActivities.length === 0) {
    console.log("Add some activities before calling showStatus");
    return;
  }

  const totalDuration = todaysActivities.reduce(
    (total, item) => total + item.duration,
    0,
  );
  console.log(
    `You have added ${todaysActivities.length} activities today. They amount to ${totalDuration} min. of usage`,
  );

  if (totalDuration > 120) {
    console.log("You have reached your limit, no more smartphoning for you!");
  }
}

function getMostUsedActivity(activities) {
  if (activities.length === 0) {
    console.log("Add some activities before calculating the most used activity");
    return;
  }

  const durationByActivity = activities.reduce((totals, item) => {
    totals[item.activity] = (totals[item.activity] || 0) + item.duration;
    return totals;
  }, {});

  const [activity, duration] = Object.entries(durationByActivity).reduce(
    (mostUsed, current) => (current[1] > mostUsed[1] ? current : mostUsed),
  );

  console.log(`You spent the most time on ${activity}: ${duration} min.`);
  return { activity, duration };
}

showStatus(activities);
getMostUsedActivity(activities);
