let userAge = parseInt(prompt("Input your age."));

while(Number.isNaN(userAge)){
    
    userAge = parseFloat(prompt("invalid character."));
}

if(userAge >= 0 && userAge <= 11){
    console.log("You're a child.")
}else if(userAge >= 12 && userAge <= 17){
    console.log("You're a teenager.")
}else if(userAge >= 18 && userAge <= 59){
    console.log("You're an adult.")
}else{
    console.log("You're an pensioner")
}