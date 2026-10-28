let userName = "";
let todos = [];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function textStartsWith(text, start) {
  if (text.length < start.length) {
    return false;
  }

  for (let i = 0; i < start.length; i = i + 1) {
    if (text[i] !== start[i]) {
      return false;
    }
  }

  return true;
}

function textEndsWith(text, end) {
  if (text.length < end.length) {
    return false;
  }

  const offset = text.length - end.length;

  for (let i = 0; i < end.length; i = i + 1) {
    if (text[offset + i] !== end[i]) {
      return false;
    }
  }

  return true;
}

function cutText(text, from, to) {
  let piece = "";

  for (let i = from; i < to; i = i + 1) {
    piece = piece + text[i];
  }

  return piece;
}

function splitBySpaces(text) {
  const words = [];
  let word = "";

  for (let i = 0; i < text.length; i = i + 1) {
    if (text[i] === " ") {
      if (word !== "") {
        words.push(word);
      }
      word = "";
    } else {
      word = word + text[i];
    }
  }

  if (word !== "") {
    words.push(word);
  }

  return words;
}

function joinWithAnd(items) {
  let list = "";

  for (let i = 0; i < items.length; i = i + 1) {
    if (i === 0) {
      list = items[i];
    } else {
      list = list + " and " + items[i];
    }
  }

  return list;
}

function getReply(command) {
  let text = command.toLowerCase();

  if (textEndsWith(text, "?")) {
    text = cutText(text, 0, text.length - 1);
  }

  const namePrefix = "hello my name is ";

  if (textStartsWith(text, namePrefix)) {
    const newName = cutText(command, namePrefix.length, command.length);

    if (newName === "") {
      return "Sorry, I didn't catch your name";
    }

    if (newName.toLowerCase() === userName.toLowerCase()) {
      return "I already know you, " + userName + "!";
    }

    userName = newName;
    return "Nice to meet you " + userName;
  }

  if (text === "what is my name") {
    if (userName === "") {
      return "I don't know your name yet. Tell me: Hello my name is ...";
    }

    return "Your name is " + userName;
  }

  const addPrefix = "add ";
  const addSuffix = " to my to do";

  if (textStartsWith(text, addPrefix) && textEndsWith(text, addSuffix)) {
    const task = cutText(
      text,
      addPrefix.length,
      text.length - addSuffix.length,
    );

    if (todos.includes(task)) {
      return task + " is already on your to do";
    }

    todos.push(task);
    return task + " added to your to do";
  }

  const removePrefix = "remove ";
  const removeSuffix = " from my to do";

  if (textStartsWith(text, removePrefix) && textEndsWith(text, removeSuffix)) {
    const task = cutText(
      text,
      removePrefix.length,
      text.length - removeSuffix.length,
    );

    if (todos.includes(task) === false) {
      return task + " is not on your to do";
    }

    const newTodos = [];

    for (let i = 0; i < todos.length; i = i + 1) {
      if (todos[i] !== task) {
        newTodos.push(todos[i]);
      }
    }

    todos = newTodos;
    return "Removed " + task + " from your to do";
  }

  if (text === "what is on my to do") {
    if (todos.length === 0) {
      return "Your to do is empty";
    }

    if (todos.length === 1) {
      return "You have 1 to do - " + todos[0];
    }

    return "You have " + todos.length + " to dos - " + joinWithAnd(todos);
  }

  if (text === "what day is it today") {
    const today = new Date();
    const day = today.getDate();
    const monthName = months[today.getMonth()];
    const year = today.getFullYear();

    return day + ". of " + monthName + " " + year;
  }

  if (textStartsWith(text, "what is ")) {
    const words = splitBySpaces(text);

    if (words.length === 5) {
      const firstNumber = Number(words[2]);
      const operator = words[3];
      const secondNumber = Number(words[4]);
      let result = 0;

      if (operator === "+" || operator === "plus") {
        result = firstNumber + secondNumber;
      } else if (operator === "-" || operator === "minus") {
        result = firstNumber - secondNumber;
      } else if (operator === "*" || operator === "times") {
        result = firstNumber * secondNumber;
      } else if (operator === "/") {
        if (secondNumber === 0) {
          return "I can't divide by zero";
        }
        result = firstNumber / secondNumber;
      } else {
        return "Sorry, I don't know the operator " + operator;
      }

      return "" + result;
    }

    return "Sorry, I can only do simple math, like: what is 3 plus 3";
  }

  if (textStartsWith(text, "set a timer for ")) {
    const words = splitBySpaces(text);
    const minutes = Number(words[4]);

    if (minutes > 0) {
      setTimeout(
        function () {
          artyom.say("Timer done");
        },
        minutes * 60 * 1000,
      );

      return "Timer set for " + minutes + " minutes";
    }

    return "Please tell me a number of minutes, like: set a timer for 4 minutes";
  }

  if (text === "flip a coin") {
    if (Math.random() < 0.5) {
      return "Heads!";
    }

    return "Tails!";
  }

  return "Sorry, I don't understand that command";
}
