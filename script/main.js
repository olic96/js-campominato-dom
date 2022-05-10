// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50

/* ---- FUNCTIONS ----*/ 

// 1. creo una funzione che generi 16 numeri casuali tra 1 e 100 che non si possono ripetere;
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 2. chiedo all'utente 100 - 64 volte di inserire un numero tra 1 e 100 che non può ripetere;
// 3. SE il numero che inserisce è presente nella lista dei 16 numeri scelti randomicamente la partita termina, ALTRIMENTI richiedo un altro numero;
// 4. SE viene inserito un numero vietato la partita termina o SE raggiunge il numero massimo di numeri disponibili;
// 5. a fine partita viene comunicato il punteggio, ovvero numero di volte dei numeri consetiti che sono stati inseriti.

/* ------ MAIN ------*/ 

// BONUS:
// stabilisco delle variaili di difficoltà che verrà calcolata in base al numero di numeri e bombe
let mod;
let easy = 0;
let medium = 1;
let hard = 2;
let difficulty;
// chiedo all'utente di scegliere una difficoltà fino a quando non sceglie un numero tra 0 e 2
do {
   mod = Number(prompt("Choose a mod"))
} while (isNaN(mod) || mod < 0 || mod > 2);

if (mod === easy) {
    difficulty = 100;
} else if (mod === medium) {
    difficulty = 80;
} else {
    difficulty = 50;
}

// 1.
const bombs = [];
while (bombs.length < 16) {
    let bomb = randomNumber(1, 100);
    if (bombs.includes(bomb) === false) {
        bombs.push(bomb);
    }
}
console.log(bombs);

// 2. 3. 4. creo un array dove verranno salvati i tentativi dell'utente
let attemps = [];
// . creo un variaile che mi verificherà se il numero scelto è una boma
let bombExploded = false;
// . FINO A CHE bombExploded === true && attemps < num chiedo all'user di inserire un numero che non può ripetere. SE userNumer è incluso in bombs bombExploded === true, ALTRIMENTI SE attemps include userNumber, il numero è gia stato inserito, ALTRIMENTI push in numbersUser

while (!bombExploded && attemps.length < difficulty) {
    let userNumber;
    do {
        userNumber = Number(prompt("Insert a number"));
    } while (isNaN(userNumber) || userNumber < 1 || userNumber > 100);
    if(bombs.includes(userNumber)) {
        bombExploded = true;
    } else if (attemps.includes(userNumber)) {
        alert("no valid number");
    } else {
        attemps.push(userNumber);
    }
}
// .5
if (bombExploded === true) {
    alert(`Game Over! Your score is: ${attemps.length}`);
} else {
    alert(`Game Over! You Won! Your score is: ${attemps.length}`);
}

