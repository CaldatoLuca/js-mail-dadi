`use.strict`;

//? variabili
const userEmail = prompt("Inserisci qui la tua email");
const emailList = [
  "ciao@gmail.com",
  "prova@gmail.com",
  "luca@gmail.com",
  "boolean@libero.it",
  "mail@gmail.com",
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
    alert(
      "Le mail corrette sono, in ordine: - ciao@gmail.com - prova@gmail.com - luca@gmail.com - boolean@libero.it - mail@gmail.com - pizza@libero.it"
    );
    break;
  }
}

/*
!Correzione
!creazione di una variabile di controllo che parte da false e diventa true se trova l' email corretta (stampo dopo il messaggio a seconda del suo valore)
!non uso else e non ho per forza bisogno del break; (lo metto giusto per non vederle tutte se trovo quella corretta) 
const userEmail = prompt("Inserisci qui la tua email");
const emailList = [
  "ciao@gmail.com",
  "prova@gmail.com",
  "luca@gmail.com",
  "boolean@libero.it",
  "mail@gmail.com",
  "pizza@libero.it",
];
! let canAccess = false;

for (let i = 0; i < emailList.length; i++) {
  if (userEmail === emailList[i]) {
    ! canAccess = true;
    break;
  } 
  ! debugger; segnalibro che ti da lo stato del programma in quel momento (a ogni valore di i mi aggiorna su che varianìbili ho e il loro valore)
}


! if(canAccess === true){
!   console.log('puoi accedere');
!   alert("Email Corretta!");
! }else{
!   console.log('non puoi accedere');
!   alert("Email Errata!");
!   alert(
!     "Le mail corrette sono, in ordine: - ciao@gmail.com - prova@gmail.com - luca@gmail.com - boolean@libero.it - mail@gmail.com - pizza@libero.it"
!   );
! }
*/
