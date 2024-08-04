var a=prompt("Enter the first number");
var b=prompt("Enter the second number");
var c= prompt("Enter the third number");

console.log(`The first number is ${a} \n The second number is ${b} \n the third number is ${c}`)

let min =a;

if(b<min){
    min=b;
}if(c<min){
    min=c;
}

console.log(`The least number is  ${min}`)