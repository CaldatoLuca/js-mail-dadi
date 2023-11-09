`use.strict`;

//? variabili
const userEmail = prompt("Inserisci qui la tua email");
const emailList = ["ciao@gmail.com", "prova@gmail.com", "luca@gmail.com"];

//? controllo in console dei valori inseriti
console.log({ userEmail });
console.log(emailList);

//! ciclo for
for (let i = 0; i < emailList.length; i++) {
  console.log(emailList[i]);
}
