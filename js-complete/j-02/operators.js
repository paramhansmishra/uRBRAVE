// here we learn about types, basics and working of operators used in js ◘

/*types1(Binary Ops){
    "+add"; "-sub"; "/div"; "*mul"; "%mod"
}*/
// lets make a simple calculator

var num1, num2;
num1 = 7;
num2 = 6;

console.log(num1+num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1-num2);
// console.log(num1num2); is invalid we use + for cancatenation of strings 

/*type2(comparative ops){
    "<"; ">"; "="; "<<"; "<=";...etc,.
}*/

var isLess = num1 < num2;

console.log(isLess);

//Real project use case senario
//calculating discount

var maximumPrice, discountedPrice;
maximumPrice=1799;
discountedPrice=499;
var discountInPercent;
discountInPercent = ((maximumPrice-discountedPrice)/maximumPrice)*100;
var roundedOfDiscount = Math.round(discountInPercent);

console.log("Discount :"+ roundedOfDiscount); 

// to know type of var we can use "typeof"

console.log(typeof roundedOfDiscount);