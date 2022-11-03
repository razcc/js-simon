let arrayNumCasuali = [];
let arrayNumUtente = [];
let i = 0;
let areaNumeriCasuali = document.getElementById("areaNumeriCasuali");
let playButtom = document.getElementById("playButtom");


playButtom.addEventListener("click", "click", function play() {

    // ^Generiamo a schermo i 5 numeri casuali
    while (arrayNumCasuali.length < 5) {
        let numCasuale = Math.floor((Math.random() * 15) + 1);
        if (arrayNumCasuali.includes(numCasuale)) {
            //Niente
        }
        else {
            arrayNumCasuali.push(numCasuale);
            areaNumeriCasuali.append(numCasuale);
        }

    }
})

