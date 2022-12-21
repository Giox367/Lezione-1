// variabili

let a; // Dichiaro una variabile
a = 1; // Assegno un valore di tipo number alla mia variabile
a = 'Rosario'; // Assegno un valore di tipo stringa alla mia variabile
a = null; // Assegno un valore di tipo null alla mia variabile
a = undefined; // Assegno un valore di tipo undefined alla mia variabile, questo valore è particolare
a = true;// Assegno un valore di tipo boolean alla mia variabile
a = ['giovanni','rosario', 'luca'];// Assegno un valore di tipo object, e in particolare di topo Array alla mia variabile
a = document.getElementsByTagName('body');// Questo valore sarà sempre uno dei precedenti ma studieremo successivamente
a = {nome : 'giovanni',cognome : 'urso',eta : 30}; // Assegno un valore di tipo object alla mia variabile, questo valore è un oggetto letterale, in particolare un'oggetto in uno stato molto basico

let b = 'Ciao sono una variabile' // Dichiaro una variabile e assegno un valore subito. In questo caso la definizione è INIZIALIZZAZIONE di una variabile

const c = 50; // INIZIALIZZO una costante. L'unica differenza con una variabile è che non posso riassegnarla successivamente (assegno solo una volta)

c = 'rosario' // Ricevo ERRORE! Non posso farlo!


// Struttura di controllo
let h = 99;

if(h<100){
    console.log(h);
    h++;
    console.log(h);
}else{
    h--;
}


// Cicli

// Posso avere tipi diversi di ciclo con keywords diverse con lo stesso risultato
// Il ciclo for
let d = 0;

for(let i=0; i<10; i++){   // Dichiaro una varibile che chiamo i, sarà un contatore. Verifico la condizione. Vado avanti di uno.

    console.log(d);        // In questo ciclo ci entrerò 10 volte  
    d++;
    
}


// Il ciclo while

let j = 0;

while(j<10){
    console.log(d);   // Finchè la condizione all'interno delle parentesi è verificata eseguo il blocco
    d++
}

