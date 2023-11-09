`use.strict`;

//? variabili
const userEmail = prompt("Inserisci qui la tua email");
const emailList = [
  "ciao@gmail.com",
  "prova@gmail.com",
  "luca@gmail.com",
  "boolean@libero.it",
  "mail.gmail.com",
  "pizza@libero.it",
];

//? controllo in console dei valori inseriti
console.log({ userEmail });
console.log(emailList);

//! ciclo for
for (let i = 0; i < emailList.length; i++) {
  if (userEmail === emailList[i]) {
    console.log("Email Corretta");
    alert("Email Corretta!");
    break;
  } else if (userEmail !== emailList[i] && i === emailList.length - 1) {
    console.log("Email Errata");
    alert("Email Errata!");
    break;
  }
}
