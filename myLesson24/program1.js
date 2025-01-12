//function declaration
function nameOfTheFunction(){
 
    console.log(arguments)
}

//function expression

const nameOfTheFunction  = function() {
    console.log(arguments);
}

//IIFE
(function nameOfTheFunction(){
    console.log("Hello World")
})()

//Arrow function
const add = (a, b) => {
    return a + b;
}



function printLength(){
    console.log(arguments.length)
}


function convertingNumbers(a,b,c){
    let first = a.toString();
    let second = b.toString();
    let third = c.toString();

    return(first+second+third)
}
//console.log(convertingNumbers(1,5,9))




function parameter (sideA, sideB = sideA){
    return((sideA * 2) + (sideB* 2))
}
//console.log(parameter(33,7))