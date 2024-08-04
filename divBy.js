// . Write a program to check if a number is divisible by 7 or not?
function isDivisibleBy7(number) {
    // Check if the number is a remainder of 0 when divided by 7
    return number % 7 === 0;
  }
  
  // Get a number from the user (optional)
   //let number = parseInt(prompt("Enter a number:"));
  
  // Example usage
    var num1 = 20;
    var num2 = 49;
  
  console.log(num1 + " is divisible by 7: " + isDivisibleBy7(num1));
  console.log(num2 + " is divisible by 7: " + isDivisibleBy7(num2));
  