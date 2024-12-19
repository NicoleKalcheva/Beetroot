const currency = prompt('Add currency');
const val = prompt('Add value');

if(currency === 'EUR'){
    console.log(val*  0.9);

}else if(currency === 'SEK'){
    console.log(val * 12);

}else if(currency === ' AUD'){
    console.log(val * 0.64)

}else{

    console.log('There is something wrong. Try again!')
}