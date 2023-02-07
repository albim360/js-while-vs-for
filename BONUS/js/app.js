let numbers = [];

for (let i = 0; i < 10; i++) {
  let userInput = prompt(`Inserisci il numero ${i + 1}:`);
  let number = parseInt(userInput);
  numbers.push(number);
}

for (let i = numbers.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
}

console.log("Numeri mescolati:", numbers);
