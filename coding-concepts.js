// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: My answer was confirmed when the length method was called on the string: “LEARN 2022,” which returned ten as its value, which included the space between LEARN and 2022.

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer:'o'
// b) Verify and explain: The log returned ‘o’, which happens to be the fourth index value of the “Hello World!” string.  Counting always starts at zero, ‘H’ was at zero indexes, and ‘o’ is at the fourth index.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: 'Ruby'
// b) Verify and explain: The log returned ‘Ruby’ even though ‘languages[index]’ did not contain a numeric value. However, it assigned a value of 1 (a number) to the variable ‘index,’ which Javascript treats ‘index’ as a number, logging ‘Ruby.’

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase()) - returns an error

// a) Your answer: [SATURDAY, SUNDAY]
// b) Verify and explain: Once I verified the answer, Javascript through an error contradicted my answer.  For a moment, I believed the method to upper case a string would work on an array of strings.  After further thinking,  I think I would have to utilize a for loop to index the value of the array and then call the toUpperCase method to capitalize each letter in the string for the entire array.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: Error
// b) Verify and explain: So the data type returned as a number, even though I predicted an error.  After looking at the log again, I realized that the ‘dataTypes.length’ does return a data type of number since it would return the length of four on the array.
