`use strict`;

//? variabili
const userNumber = [];
const computerNumber = [];

const randomNumber = Math.floor(Math.random() * 6);

//! ciclo for che genera array casuali
for (let i = 0; i < 6; i++) {
  userNumber.push(Math.floor(Math.random() * 6) + 1);
  computerNumber.push(Math.floor(Math.random() * 6) + 1);
}

//? stampa in console
console.log({ userNumber });
console.log({ computerNumber });
console.log({ randomNumber });

//! condizione
if (userNumber[randomNumber] > computerNumber[randomNumber]) {
  console.log("Hai vinto!");
  console.log(userNumber[randomNumber] + " > " + computerNumber[randomNumber]);
} else if (userNumber[randomNumber] < computerNumber[randomNumber]) {
  console.log("Hai perso!");
  console.log(userNumber[randomNumber] + " < " + computerNumber[randomNumber]);
} else {
  console.log("Hai pareggiato!");
  console.log(userNumber[randomNumber] + " = " + computerNumber[randomNumber]);
}
