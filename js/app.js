let oddNumbers = [];
let count = 0;

while (count < 10) {
  let userInput = prompt("Inserisci un numero:");
  let number = parseInt(userInput);
  if (number % 2 !== 0 && !isNaN(number)) {
    oddNumbers.push(number);
    count++;
  }
}

console.log("I numeri dispari sono:");
for (let i = 0; i < oddNumbers.length; i++) {
  console.log(oddNumbers[i]);
}

