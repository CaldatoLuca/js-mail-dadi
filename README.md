# Mail e Dadi

Asseganzione di due esercizi con l' introduzione degli array.

_HTML+js_

## Indice

- [Mail](#mail)
- [Dadi](#dadi)

# Mail

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

## Indice

- [Scomposizione del problema mail ](#scomposizione-del-problema-mail)
- [Soluzione mail](#soluzione-mail)

### Scomposizione del problema-mail

1. Richiedere l'email dell'utente e salvarla in una variabile (tramite `prompt`);
2. Creare un `array` di mail fittizzie;
3. Controllare se l'email è presente o meno nell'array (tramite ciclo `for`)
4. Stampare un messaggio di conferma o di negazione a seconda del caso (tramete `if`)

### Soluzione-mail

**_Richiedere l'email dell'utente e salvarla in una variabile (tramite `prompt`);_**

```js
const userEmail = prompt("Inserisci qui la tua email");
```

**_Creare un `array` di mail fittizzie;_**

```js
const emailList = [
  "ciao@gmail.com",
  "prova@gmail.com",
  "luca@gmail.com",
  "boolean@libero.it",
  "mail@gmail.com",
  "pizza@libero.it",
];
```

> **_Controllare se l'email è presente o meno nell'array (tramite ciclo `for`)_**
>
> > **_Stampare un messaggio di conferma o di negazione a seconda del caso (tramete `if`)_**

```js
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
```

- creo un ciclo for che si fermerà quando il contatore `i` non sarà minore della lunghezza dell' `array` (6 nel mio caso), uso `nomeArray.lenght`

- la prima condizione controlla se ciò che ha scritto l' utente nel prompt sia uguale all' elemento dell' `array` (uso `nomeArray[i]` per selezionare il singolo elemnto), se la condizione si verifica stampo il risultato e fermo il ciclo `break;`

NB i parte da 0 e arriva fino a 5 perchè il primo elemnto dell' `array` è in posizione 0 (lunghezza != posizione)

- se la prima condizione non si verifica il ciclo prosegue

- nel caso l' email sia errata entra in gioco la seconda condizione (si verifica se l' email utente è errata e se i è al suo ultimo valore)

- ponendo `i === emailList.length - 1` faccio si che il messaggio di errore venga stampato solo una volta e non a ogni ripetizione del ciclo

- fermo lo stesso il ciclo per essere sicuro che al risultato errato ci sia comunque un interruzione

# Dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

## Indice

- [Scomposizione del problema dadi ](#scomposizione-del-problema-dadi)
- [Soluzione dadi-base](#soluzione-dadi-base)
- [Soluzione dadi-array](#soluzione-dadi-array)

### Scomposizione del problema-dadi

1. Genero numero random per computer
2. Genero numero random per utente
3. Verifico quale dei due punteggi è più alto (tramite `if`)
4. Stampare il vincitore (tramite `alert`)

### Soluzione-dadi base

> **_Genero numero random per computer_**
>
> > **_Genero numero random per utente_**

```js
const userNumber = Math.floor(Math.random() * 6) + 1;
const computerNumber = Math.floor(Math.random() * 6) + 1;
```

> **_Verifico quale dei due punteggi è più alto (tramite `if`)_**
>
> > **_Stampare il vincitore (tramite `alert`)_**

```js
if (userNumber > computerNumber) {
  console.log("Hai vinto!");
} else if (userNumber < computerNumber) {
  console.log("Hai perso!");
} else {
  console.log("Hai pareggiato!");
}
```

- Nella prima condizione controllo se il numero utente è maggiore di quello del computer
- Nella seconda se il numero utente è minore di quello del computer
- `else` serve nel caso ci sia un pareggio
- in tutti e tre i casi stampo il messaggio di output

  NB altri `console.log` e eventuali `alert` sono stati rimossi per avere una miglire lettura dell' esempio

### Soluzione-dadi array

In questa soluzione il processo logico è identico ma vado a creare due array che contengono 6 numeri (ogni numero è un numero random tra 1 e 6)

Confronto, come fatto prima, due elementi dell' array random `userNumber[randomNumber] `

```js
const userNumber = [];
const computerNumber = [];

const randomNumber = Math.floor(Math.random() * 6);

//! ciclo for che genera array casuali
for (let i = 0; i < 6; i++) {
  userNumber.push(Math.floor(Math.random() * 6) + 1);
  computerNumber.push(Math.floor(Math.random() * 6) + 1);
}

if (userNumber[randomNumber] > computerNumber[randomNumber]) {
  console.log("Hai vinto!");
} else if (userNumber[randomNumber] < computerNumber[randomNumber]) {
  console.log("Hai perso!");
} else {
  console.log("Hai pareggiato!");
}
```
