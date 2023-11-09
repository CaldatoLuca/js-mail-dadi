`use strict`;

//? variabili
const userNumber = Math.floor(Math.random() * 6) + 1;
const computerNumber = Math.floor(Math.random() * 6) + 1;

//? stampa in console
console.log({ userNumber });
console.log({ computerNumber });

//! condizione
if (userNumber > computerNumber) {
  console.log("Hai vinto!");
  console.log(userNumber + " > " + computerNumber);
  alert("Hai vinto!");
  alert(
    "Il tuo numero: " +
      userNumber +
      " è maggiore di quello del computer: " +
      computerNumber
  );
} else if (userNumber < computerNumber) {
  console.log("Hai perso!");
  console.log(userNumber + " < " + computerNumber);
  alert("Hai perso!");
  alert(
    "Il tuo numero: " +
      userNumber +
      " è minore di quello del computer: " +
      computerNumber
  );
} else {
  console.log("Hai pareggiato!");
  console.log(userNumber + " = " + computerNumber);
  alert("Hai pareggiato!");
  alert(
    "Il tuo numero: " +
      userNumber +
      " è pari a quello del computer: " +
      computerNumber
  );
}
