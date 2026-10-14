# JavaScript · Week 2: Functions, conditions, arrays and loops

In this file I explain how I solved each exercise, the questions that came up while I was working on them, and how I cleared them up. I also describe a few things I added on my own to better understand how each program works.

---

## 1. getFullName (Flight booking)

**What it does:** it takes a first name, a surname and a boolean `useFormalName`. It returns the full name and, if `useFormalName` is `true`, it adds "Lord" in front of it.

**Decisions I made:**

- I gave `useFormalName` a default value (`= false`). That way, if someone calls the function without that argument, it behaves as if no formal name was requested.
- If the first name or the surname is an empty string, the function returns a message asking for both instead of building an incomplete name.

**Question I had:** the function worked perfectly in VS Code, but when I pasted it into CodePen the page did nothing.
**How I solved it:** the code that came with the CodePen called the function with its name misspelled (with a different mix of upper and lower case letters). I learned that JavaScript is _case-sensitive_: `getFullName` and `getfullname` are two different names, so the page was looking for a function that did not exist.

**What if the person is a woman?**
The problem is that "Lord" is hardcoded inside the function, and a boolean only allows two answers (yes / no). I see two possible solutions:

- **Add a gender parameter** at the end (`gender`) and choose between "Lord" and "Lady". By adding it as the last parameter, the existing calls keep working the same way.
- **Make the third parameter the title itself** ("Lord", "Lady", "Dr.", etc.). This is more flexible, works for anyone, and does not require asking for the person's gender, only the form of address they prefer (which means collecting less personal data).

---

## 2. getEventWeekday (Event application)

**What it does:** it takes how many days are left until an event and returns which weekday the event will be on.

**How it works:**

- `new Date().getDay()` returns today's weekday as a number from 0 (Sunday) to 6 (Saturday).
- I add the number of days until the event and use the remainder operator `% 7` to "wrap around" the week, like the hands of a clock.
- I use that number as an index to look up the name of the day in an array.

**What I learned:** the array of days has to start on Sunday, because `getDay()` starts counting from there. If it started on Monday, every result would be off by one day. I also understood that the result depends on the day the code is run, because it uses the real date from the system.

---

## 3. Weather wear

**What it does:** it takes a temperature and returns what clothes to wear.

**What I learned:** in an `if / else if / else` chain, JavaScript checks the conditions from top to bottom and stops at the first one that is true. That is why I ordered the conditions from coldest to warmest.

**What I added on my own:** I noticed that if the function was called without a temperature, the result was "shorts and a t-shirt". This happens because, when there is no temperature, none of the comparisons (`< 0`, `< 10`, `< 18`) is true, so the program ends up in the final `else`. I added an `else if` at the beginning so that, if the temperature is not available, the function returns a message saying so instead of recommending summer clothes.

---

## 4. Student manager

**What it does:** `addStudentToClass` adds students to the class following these rules: empty names are not accepted, students cannot be added twice, there is a maximum of 6, and the Queen can always join even if the class is full. `getNumberOfStudents` returns how many students there are.

**What I learned:**

- `.push()` adds an element to the end of an array, `.includes()` tells whether an element is already there, and `.length` tells how many elements there are.
- The array is declared outside the functions (global scope) so that both functions share the same list.
- The order of the checks matters: the Queen check comes before the capacity check (so she can join even when the class is full) and after the duplicate check (so she does not appear twice).

**Questions I had:**

- **Why did the page start with a full class?** Because the test calls I had written at the end of the code ran as soon as the page loaded. I commented them out with `/* ... */` to start with an empty class and add students through the form.
- **Why was there no warning when the class was full?** Because `console.log` writes to the console, not to the page. The messages were there, but I had to open the console to see them.

**What I observed:**

- Without the Queen in the list, the system only lets me add 6 names. This matches the capacity rule: the limit of 6 applies to all students, and the only exception is the Queen, who can join as the seventh.
- When the Queen joined first, she took one of the 6 spots and I could only add 5 more students. The assignment does not say whether the Queen counts within the 6 or is an extra spot. My code counts her within the limit, but this is an ambiguity I would ask the client about in a real project.

---

## 5. Candy helper (optional)

**What it does:** `addCandy` calculates the price of each candy (grams × price per gram) and stores it in the `boughtCandyPrices` array. `canBuyMoreCandy` adds up all the prices with a `for` loop and returns `true` if the total is less than the money available (`amountToSpend`).

**Question I had:** the console said "Enough candy for you!" and I did not understand why.
**How I solved it:** `amountToSpend` is calculated with `Math.random() * 100`, so every time the program runs, the money available is a different number between 0 and 100. With the test candies the total is 17, so if the money available is less than 17, the message is "Enough candy for you!". It was not a bug, it was randomness.

**What I added on my own:** on lines 37 and 38 I added two `console.log` statements that show the money available and the total price of the candies. This way I can see the numbers the program is comparing and understand why each message appears.

**What I learned:** the accumulator pattern (a variable that starts at 0 and adds a value on each loop iteration), and that a comparison like `total < amountToSpend` already returns `true` or `false`, so it can be returned directly.

---

## General takeaways

- **`return` is not the same as `console.log`:** `return` hands back a value that can be stored and used; `console.log` only displays it.
- **JavaScript is case-sensitive** in function names, variable names and strings.
- **The console is the best debugging tool:** adding `console.log` statements with intermediate values helped me understand what was happening in each exercise.
- **Testing edge cases** (empty data, missing data, limits) helped me find behaviour I did not expect, like the one in exercise 3.

## Use of AI

I used Claude as a tutor to understand the concepts behind each exercise and to clear up specific questions. I wrote and tested the code myself in VS Code and CodePen, and the improvements in exercises 3 and 5 were my own additions.
