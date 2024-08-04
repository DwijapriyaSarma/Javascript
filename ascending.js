// Write a program to print the given 3 numbers in ascending orders?

var a=parseInt(prompt("Enter first number"));
var b=parseInt(prompt("Enter second number"));
var c=parseInt(prompt("Enter third number"));

console.log(`The first number is ${a} \nThe second number is ${b} \n The  third number is ${c}`);

if(a<=b && a<=c){
    first=a;
if( b<=c){
    second=b;
    third=c
}else{
    second=c;
    third=b;
}
}
else if(b<=a && b<=c){
    first=b;

    if(c<=a){
        second=c
        third=a
    }else{
        second=a;
        third=c;
    }
}else if(c<=a && c<=b){
    first=a;
    if(b<=c){
        second=b;
        third=c;
    }else{
        second=c;
        third=b;
    }

    }
    

    console.log(`The assending order is ${first} , ${second}, ${third}`);

