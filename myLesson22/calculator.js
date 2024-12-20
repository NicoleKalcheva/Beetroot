

let result;
let num1 = parseFloat(prompt("Input your first number."));
while(Number.isNaN(num1)){
    
    num1 = parseFloat(prompt("That's not a number. Please input a valid number."));
}
let num2 = parseFloat(prompt("Input  your second number."));

while(Number.isNaN(num2)){

    num2 = parseFloat(prompt("That's not a number. Please input a valid number."));
} 


let action = prompt("Choose action");
while(action !== '+' && action !== '-' && action !== '*' && action !== '/' ) {
    
     action = prompt("Choose action");
}

if(action == "+"){

    result = num1 + num2;

}else if (action == "-"){

    result = num1 - num2;
}else if (action == "*"){

    result = num1 * num2;
}else if (action == "/"){
    if(num2 == 0){

        console.log( "Division by zero is not allowed!")
    }else{
    result = num1 / num2;
    }
}
console.log(result)