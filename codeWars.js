// function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
//     let result = 0;
//     for (i = 0; i < predictAge.length; i++){
//         let power = Math.pow([i], 2);
//         result += power;
//         return result;
//         }
//     let final = Math.sqrt(result, 2)/2;
//     return final;
// }


//Sum of two lowest positive integers

// function sumTwoSmallestNumbers(numbers) {
//     var sorted = numbers.sort(function(a, b){return a - b});
//     return sorted[0] + sorted[1];
//}

// Century from year

// function century(year) {
//     let cent = Math.ceil(year/100);
//     return cent;
// }
//

//Complementary DNA (to be completed)
//function getComplements(str){
//     let
// }

//Summation (to be completed)

// function summation(num){
//     let numArr = [1, 2, ... num];
//     let sum = numArr.reduce(function(accumulator, currentValue){
//         return accumulator + currentValue}, 0);
// }
//
// summation(3);

// Opposite number

// function opposite(number){
//     var oppNum = number - 2 * number;
//     return oppNum;
// }

// Sum without highest and lowest number
//
// function sumArray(array){
//     if (array !== null && array.length >1){
//     let sortArray = array.sort(function(a, b){
//         return a - b;
//     });
//     let newArray = [];
//     for (let i = 1; i < sortArray.length - 1; i++){
//         newArray.push(sortArray[i]);
//     }
//     let sum = newArray.reduce(function(accumulator, currentValue){
//         return accumulator + currentValue
//     }, 0);
//     return sum;
// }
// else {
//         return 0;
//     }
// }


// Basic math oeprations

// function basicOp(operation, value1, value2)
// { let output = 0;
// if (operation === "+") {
//     output = value1 + value2;
// }
// else if (operation === "-"){
//     output = value1 - value2;
// }
// else if (operation === "*"){
//     output = value1 * value2;
// }
// else if (operation === "/") {
//     output = value1/value2;
// }
// return output;
// }

function basicOp(operation, value1, value2){
    switch (operation){
        case "+":
            return value1 + value2;
            break;
        case "-":
            return value1 - value2;
            break;
        case "*":
            return value1 * value2;
            break;
        case "/":
            return value1/value2;

    }
}


