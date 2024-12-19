const interstForYear = 5;
let deposit= Number(prompt('Type your doposit for two months.'));
let interestForTwoMonths = deposit * (interstForYear / 100) * (2 / 12);
let finalSum = interestForTwoMonths + deposit;
console.log(finalSum.toFixed(2));
