const interstForYear = 5;
let deposit= Number(prompt('Type your doposit for two months.'));
let interestForTwoMonths = deposit * (interstForYear / 100) * (2 / 12);
let result = interestForTwoMonths + deposit;
console.log(result.toFixed(2));
