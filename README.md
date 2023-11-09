# Mail

_HTML+css(bootstrap)+js_

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

## Indice

- [Scomposizone del problema](#scomposizione-del-problema)
- [Soluzione](#soluzione)

### Scomposizione del problema

1. Richiedere l'email dell'utente e salvarla in una variabile (tramite `prompt`);
2. Creare un `array` di mail fittizzie;
3. Controllare se l'email è presente o meno nell'array (tramite ciclo `for`)
4. Stampare un messaggio di conferma o di negazione a seconda del caso (tramete `if`)

### Soluzione

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

_HTML+css(bootstrap)+js_

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

## Indice

- [Scomposizone del problema](#scomposizione-del-problema)
- [Soluzione](#soluzione)

### Scomposizione del problema

1. Genero numero random per computer
2. Genero numero random per utente
3. Verifico quale dei due punteggi è più alto (tramite `if`)
4. Stampare il vincitore (tramite `alert`)
