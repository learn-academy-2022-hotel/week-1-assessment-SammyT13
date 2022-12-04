// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:
// Function Signature
// input: number
// output: string indicating allowed, denied, or error

// input: 39
// output: "Cannot ride the rollercoaster"

// input: 45
// output: "Buckle up, let's ride"

// input: "yolo"
// output: "error"

// Process
// create a function called tallEnough that takes in a number called height
// if height is less than 40 return "Cannot ride the rollercoaster"
// if height is greater than or equal to 40 return "Buckle up, let's ride"
// any other input return error

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
// Function Signature
// input: number
// output: string indication below boiling point, at boiling point, or above boling point

// input: 42
// output: "42 is below boiling point"

// input: 350
// output: "350 is above boiling point"

// input: "212"
// output: "212 is at boiling point"

// Process
// create a function called tempCheck that takes in a number (parameter) called temp1, temp2, and temp3
// if temperature is less than 212 'temp is below boiling point'
// if temperature is above 212 'temp is above boiling point'
// if temperature is the same as 212 'temp is at boiling point'

const temp1 = 42
// Expected output: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"

const temp3 = 212
// Expected output: "212 is at boiling point"

// Question 1 Solution:

const tempCheck = (temperature) => {

    // Charlean thank you for giving me this idea the other day
    // I learned that I can add multiple if/else if statments with a ternary operator
    return temperature > 212 ? `${temperature} is above boiling point` : temperature < 212 ? `${temperature} is below boiling point` : `${temperature} is at boiling point`

}

console.log(tempCheck(temp1))
console.log(tempCheck(temp2))
console.log(tempCheck(temp3))

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
// Function Signature
// input: two arrays
// output: a number with the counted elements within the combined array

// input: array1 = [2, 5, 2, 2, 4] and array2 = [6, 3, 5, 3]
// output: 9

// Process
// create a function called combineAndCountArray that takes in two arrays (2 parameters) called arr1 and arr2
// create a new variable (const) that will concat array1 and array2 creating a new array
// return the length of the new array = 9

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]

// Question 2 Solution

const combineAndCountArray = (arr1, arr2) => {
    const newArray = arr1.concat(arr2)
    
    return newArray.length
}
console.log(combineAndCountArray(padres1984WorldSeriesRuns,padres1998WorldSeriesRuns))
// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
// Function Signature
// input: string
// output: string that output is in reverse order

// Process
// create a function called reverseString that takes in a string called currentCohort
// create an empty array and empty string in the function
// for loop that will reverse the index of the string
// in the loop will have a temporary variable to hold the value of each index in the string
// push the temporary array to the new array
// join the new array as a string and assign it to a new variable

const currentCohort = "Hotel 2022"
// Expected output: "2202 letoH"

const reverseString = (strValue) => {
    let newArr = [] // empty array
    let revString = '' // empty string
    
    // taking the string and reversing it based on reversing the index
    for(let i = strValue.length - 1; i >=0; i--){        
        let temp = strValue[i] // stores the strValue
    
        newArr.push(tempArr) // push tempArr to newArr
        revString = newArr.join('') // assigned and joined the array as a string
    }
    return revString
}

console.log(reverseString(currentCohort))


// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]
