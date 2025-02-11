//console.log('hello World');
// Snack 1

// Crea una funzione che somma due numeri.

function somma(num1, num2) {

    return num1 + num2
}
//console.log(somma(2, 2));

// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.


function somma(num1, num2) {
    const result = num1 + num2
    return result
}
//console.log(somma(8, 2));

//Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile


const funzioneAnonima = function (num1, num2) {
    const somma = num1 + num2

    return somma
}

//console.log(funzioneAnonima(2, 3));


//Snack 2
//Crea una arrow function che calcola il quadrato di un numero.

const quadratoDiUnNumero = (num) => Math.pow(num, 2)

//console.log(quadratoDiUnNumero(8));



//Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga. 


function quadrato(num) { return Math.pow(num, 2) }

//console.log(quadrato(2));



/* Snack 3
Crea una funzione eseguiOperazione
Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri. */


function eseguiOperazione(num1, num2, operatore) {


    return operatore(num1, num2)
}


const somma2 = (a, b) => a + b;

//console.log(eseguiOperazione(1, 2, somma));


// Snack 4
//Crea un generatore di funzioni creaTimer
//Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".
function creaTimer(ms) {
    return function () {
        setTimeout(() => {
            console.log("Tempo scaduto!");
        }, ms);
    };
}

const time = creaTimer(2000)

//time()





//Snack 5
//Crea una funzione stampaOgniSecondo con setInterval.
//Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.


function stampaOgniSecondo(messaggio) {
    const messaggi = setInterval(() => {
        console.log(messaggio);
        clearInterval(messaggi)
    }, 3000)

    return messaggi

}

stampaOgniSecondo('hello')







//Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script. 


/* Snack 6
Crea un contatore automatico con setInterval
Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo. */



/* Snack 7
Crea una funzione che ferma un timer dopo un certo tempo
Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.
 */


/* Snack 8 (Bonus)
Crea una funzione che simula un conto alla rovescia
Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer. */



/* Snack 9 (Bonus)
Creare una funzione che esegue una sequenza di operazioni con ritardi
Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.

Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo. */


/* Snack 10 (Bonus)
Creare un throttler per limitare l’esecuzione di una funzione
Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.

Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi. */