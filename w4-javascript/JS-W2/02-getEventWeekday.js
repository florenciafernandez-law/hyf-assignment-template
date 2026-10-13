function getEventWeekday(daysFromToday) {

  const weekdays = [
    "Sunday",    
    "Monday",    
    "Tuesday",   
    "Wednesday", 
    "Thursday",  
    "Friday",    
    "Saturday",  
  ];
 
  const todayIndex = new Date().getDay();
 
  const eventIndex = (todayIndex + daysFromToday) % 7;
 
  return weekdays[eventIndex];
}
 
console.log(getEventWeekday(9));
console.log(getEventWeekday(2));