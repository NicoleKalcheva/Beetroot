let user = prompt(" Think about number between 0 and 100 and I'll try to guess it. Click <OK> when you're done. ");
let low = 0;
let high = 100;
let n = (low + high) / 2;

while(low <= high){
    let n = Math.floor((low + high) / 2);


let useranswer =  prompt(`Is your number greater than, less than, or equal to ${n}?`);

if(useranswer === "equal"){
    console.log("I guessed your number.")
}else if(useranswer === "greater"){
    low = n + 1;
}else if(useranswer === "less"){
    high = n -1;
}else{
    console.log("Something went wrong.")
}
}