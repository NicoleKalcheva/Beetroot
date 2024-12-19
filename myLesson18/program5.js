let moneyInWallet = prompt('I am a thief. How much money will I have if I steal your wallet?');
let priceOfChocolateBar = prompt('What is the price of your favorite chocolate bar?');
let howManyYouCanAfford = Math.round(moneyInWallet / priceOfChocolateBar);
let change = moneyInWallet - (priceOfChocolateBar * howManyYouCanAfford).toFixed(2);

if(change === 0 ){
    console.log (`You can afford ${howManyYouCanAfford} chocolate bars. There is no change. Shame on you!You will spend all of your money for chocolate bars.`)
}else{
console.log(`With this money you can afford ${howManyYouCanAfford} a cholate bar(s). You'r change will be ${(change).toFixed(2)}`)
}

