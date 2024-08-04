// Write a program to print the given 3 numbers in descending orders?

var a=parseInt(prompt("Enter the first number"));
var b=parseInt(prompt("Enter the second number"));
var c=parseInt(prompt("Enter the third number"));

console.log(`The first number is ${a} \n The second number is ${b} \n The third number is ${c}`);

if(a>=b && a>=c){
    first=a;
    if(b>=c){
        second=b;
        third=c;
    }else{
        second=c;
        third=b;
    }
}else if(b>=c && b>=a){
    first=b;
    if(c>=a){
        second=c;
        third=a;
    }else{
        second=a;
        third=b;
    }
}else if( c>=a && c>=b){
    first=c;
    if(b>=a){
        second=b;
        third=a;
    }else{
        second=a;
        third=b;
    }
}

console.log(`The descending order is - ${first}, ${second}, ${third}`);