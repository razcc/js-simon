let arrayNumCasuali = [];
let arrayNumUtente = [];


let areaNumeriCasuali = document.getElementById("areaNumeriCasuali");
let playButtom = document.getElementById("playButtom");
let stampaNumeriUtente = document.getElementById("stampaNumeriUtente");
let numeriIndovinati = document.getElementById("numeriIndovinati");


playButtom.addEventListener("click", function play() {
    // Pulizia dell'array ad ogni gioco
    arrayNumCasuali.splice(0, 5);
    arrayNumUtente.splice(0,5);

    areaNumeriCasuali.innerHTML = "";
    stampaNumeriUtente.innerHTML= "";
    numeriIndovinati.innerHTML= "";

    let contatorePunteggio = 0;

    let i = 0;
    // ^Generiamo i 5 numeri casuali e li mettiamo nel array
    while (i < 5) {


        // Creazione numero casuale
        let numCasuale = Math.floor((Math.random() * 15) + 1);

        if (arrayNumCasuali.includes(numCasuale)) {
            //Niente
        }
        else {
            arrayNumCasuali.push(numCasuale);
            i++
        }

    }
    console.log(arrayNumCasuali);

    //^ Stampa a schermo dei numeri casuali
    for (let a = 0; a < 5; a++) {
        let div = document.createElement("div");
        div.classList.add("classNumCasuali");

        div.innerText = arrayNumCasuali[a];
        areaNumeriCasuali.append(div);
    }

    // Funzione che fa SCOMPARIRE i numei dallo schermo
    function funzioneDisplayNone() {

        let figli = document.getElementById("areaNumeriCasuali").childNodes;

        for (let k = 0; k < figli.length; k++) {
            figli[k].classList.add("displayNone");
        }

    }

    // Funzione che fa APPARIRE i numeri casuali a schermo
    function funzioneDispalyBlock() {

        let figliBlock = document.getElementById("areaNumeriCasuali").childNodes;

        for (let m = 0; m < figliBlock.length; m++) {
            figliBlock[m].classList.add("displayBlock");
        }

    }

    //* dopo il click di play faccio sparire i numeri sullo schermo dopo 2500ms
    setTimeout(function () {
        funzioneDisplayNone()
    }, 2500);


    // *Faccio apparire i 5 prompt dopo 3000ms e li metto dentro arrayNumUtente
    setTimeout(function () {

        let b = 0;
        // ^Compiliamo arrey numero Utenti con 5 valori
        while (b < 5) {
            let promptUtente = prompt("Inserisci i numeri che hai visto a schermo");

            if (promptUtente == "") {
                alert("Inserisci un numero")
            }
            else {
                arrayNumUtente[b] = promptUtente;
                b++
            }

        }

        //* Stampa a schermo dei numeri UTENTE
        for (let z = 0; z < 5; z++) {
            let divUtente = document.createElement("div");
            divUtente.classList.add("classNumUtente");

            divUtente.innerText = arrayNumUtente[z];
            stampaNumeriUtente.append(divUtente);
        }

        //* Rimettiamo aschermo i numeri casuali
        funzioneDispalyBlock();

        // ^Compariamo arrey utente con arrey numeri casulai
        for (let c = 0; c < arrayNumUtente.length; c++) {
            if (arrayNumCasuali[c] == arrayNumUtente[c]) {
                contatorePunteggio = contatorePunteggio + 1
            }
        }

        // *Stampa a schermo del totale numero azeccati
        numeriIndovinati.innerHTML = `Hai indovinato un totale di: ${contatorePunteggio} su 5`

    }, 3000);



})
