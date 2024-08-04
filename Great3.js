//. Write a program to print the greatest number in given three numbers?

var a=prompt("Enter the first number");
var b=prompt("Enter the second number");
var c= prompt("Enter the thirs number ");

console.log(`The first number is ${a} \nThe second number is  ${b}\n The third number is ${c}`)

var max=a;

if(b>max){
    max=b;
}
if(c>max){
  max=c;}


console.log(`The greatest number is ${max}`)