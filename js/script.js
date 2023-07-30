//Reminder for using VAR/LET/CONSTS in js.

//Use const when you have a value that should not change throughout the program. 
//This provides better readability and makes it clear that the value should remain constant.

//Use let when you have a variable that needs to be reassigned during the execution of the program
//or when you need block-scoping for the variable.

//Avoid using var in modern JavaScript development as it has some drawbacks, such as hoisting and function scope
//which can lead to unexpected behavior. Instead, prefer let and const for better code maintainability and clarity.

/*Precedence Grouping: ()
Exponentiation: **
Multiplication, Division, Modulus: *, /, %
Addition and Subtraction: +, -
Comparison: <, >, <=, >=, ==, !=, ===, !==
Logical AND: &&
Logical OR: ||
Ternary (Conditional) Operator: ? :
Assignment: =, +=, -=, *=, /=, etc.
*/

// Open console in browser press F12 to open CONSOLE.

// "+" The unary plus operator in JavaScript converts a string representation of an integer into an actual numeric value.
/*function fizzBuzz() {
    for(let i = 1; i <= 100; i++) {
        if(i % 3 === 0){
            console.log("Fizz");
         }
         else if( i % 5 === 0){
            console.log("Buzz")
         }
         else {
            console.log(i)
         }
    }
}
*/
//test 
function fizzBuzz(n) {
   const result = [];
 
   for (let i = 1; i <= n; i++) {
     if (i % 3 === 0 && i % 5 === 0) {
       result.push("FizzBuzz");
     } else if (i % 3 === 0) {
       result.push("Fizz");
     } else if (i % 5 === 0) {
       result.push("Buzz");
     } else {
       result.push(i.toString()); // Convert the number to a string before pushing
     }
   }
 
   return result;
 }
// If u want to use console, type fizzBuzz(3) 3 is the number for iteration.
const n = 3;
const output = fizzBuzz(n);
console.log(output); // Output: ["1", "2", "Fizz"]
 