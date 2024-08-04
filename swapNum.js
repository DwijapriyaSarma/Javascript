var num1=prompt("Enter frist number");
var num2=prompt("Enter second number");

console.log(`The first number is ${num1} \n The second number is ${num2} `)

var temp;

temp=num1;
num1=num2;
num2=temp;

console.log(`After swapping \n The first number is ${num1} \n The second number is ${num2}`);