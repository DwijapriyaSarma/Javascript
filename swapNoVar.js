var a=parseInt(prompt("Enter first number"));
var b=parseInt(prompt("Enter second number"));

console.log(`The first number is ${a} \n The second number is ${b}`);


//a=5, b=6
a=a+b; //a=11
b=a-b;  //b=11-6=5;
a=a-b;   //a=11-5=6

console.log(`After swapping \n The first number is ${a} \n The second number is ${b}`)
