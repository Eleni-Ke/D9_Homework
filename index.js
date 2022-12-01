/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

function printTitle(titleString) {
    console.log(`\n---------- ${titleString} ----------\n`);
  }

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

printTitle("Exercice 1");

function area(l1, l2) {
    return l1 * l2;
}

let areaOfRectangle = area(3, 4);

console.log(`This is the area of the rectangle: ${areaOfRectangle}`);

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

printTitle("Exercice 2");

function crazySum(val1, val2) {
    if (val1 === val2) {
        return (val1 + val2) * 3;
    } else {
        return val1 + val2;
    }
}
let thisIsACrazySum = crazySum(23, 23);

console.log(`This is the crazy sum: ${thisIsACrazySum}`);

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

printTitle("Exercice 3");

function crazyDiff(int) {
    let diff = Math.abs(int - 19);
    console.log(diff)
    if (diff > 19) {
        return diff * 3;
    } else {
        return "The absolute difference is smaller than 19.";
    }
}
let thisIsACrazyDiff = crazyDiff(129);

console.log(`This is the crazy difference: ${thisIsACrazyDiff}`);

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

printTitle("Exercice 4");

function boundary(n) {
    if (n > 20 && n <= 100) {
        return true;
    } else if (n === 400) {
        return true;
    } else {
        return false;
    }
}
let ex4 = boundary(400);
console.log(`The answer of the question is: ${ex4}`);


/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

printTitle("Exercice 5");

function strivify(string1) {
    if (typeof string1 === "string") {
        if (string1.startsWith("Strive")) {
            return string1;
        } else {
            return string1 = "Strive " + string1;
        }
    } else {
        return "Parameter is not a string!";
    }
    
}
let string2 = "I am a string";
let IAmStrivified = strivify(string2);

console.log(`This is a strivified string: ${IAmStrivified}`);

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

printTitle("Exercice 6");

function check3and7(posNum) {
    if (posNum > 0) {
        if (posNum % 3 === 0) {
            return true;
        } else if (posNum % 7 === 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return "Parameter is not a positive number!";
    }
} 

let isItDividableby3or7 = 978564978;
console.log(`Can ${isItDividableby3or7} be divided by 3 or 7? ${check3and7(isItDividableby3or7)}!`);

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

printTitle("Exercice 7");

function reverseString(str) {
    if (typeof str === "string") {
        let reversedStr = "";
        for (let i = str.length - 1; i >= 0; i--) {
            reversedStr += str[i];
        }
        return reversedStr;
    } else {
        return "The parameter is not a string!"
    }
}
let string3 = "Why is the sky blue?";

console.log(`If you reverse ${string3} you get ${reverseString(string3)}.`);

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

printTitle("Exercice 8");

function upperFirst(str) {
    if (typeof str === "string") {
        let arrayOfStr = str.split(" ");
        for (let i = 1; i < arrayOfStr.length; i++) {
            for (let j = 0; j < 1; j++) {
                arrayOfStr[i][j] = arrayOfStr[i][j].toUpperCase();
                
            }
            //arrayOfStr[i][0] = arrayOfStr[i][0].toUpperCase()
            str = arrayOfStr.join();
        }
        return str;
    } else {
        return "The parameter is not a string!"
    }
}
let allWordsStartCapital = upperFirst(string3);
console.log(allWordsStartCapital);

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

printTitle("Exercice 9");

function cutString(str) {
    if (typeof str === "string") {

    } else {
        return "The parameter is not a string!"
    }
}

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
