let userMemory = prompt('Enter the memory of your flash drive in GB');
let userMemoryConverted = userMemory*1000
const memory = 820;
let howMany = (userMemoryConverted / 820);
console.log(Math.round( howMany));