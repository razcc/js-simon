let arrayNumCasuali = [];
let arrayNumUtente = [];


let areaNumeriCasuali = document.getElementById("areaNumeriCasuali");
let playButtom = document.getElementById("playButtom");




playButtom.addEventListener("click", function play() {
    // Pulizia dell'array ad ogni gioco
    arrayNumCasuali.splice(0, 5);
    areaNumeriCasuali.innerHTML = "";

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

    function funzioneDisplayNone() {
        let figli = document.getElementById("areaNumeriCasuali").childNodes;
        for (let k = 0; k < figli.length; k++){
            figli[k].classList.add("displayNone");
        }
            
    }

    setTimeout (function(){
        funzioneDisplayNone()
    }, 2500);


    setTimeout(function () {
        for (let b = 0; b < 5; b++) {
            arrayNumUtente[b] = prompt("Inserisci i numeri che hai visto a schermo")
        }
    }, 3000);


})
