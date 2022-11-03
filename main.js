let arrayNumCasuali = [];
let arrayNumUtente = [];


let areaNumeriCasuali = document.getElementById("areaNumeriCasuali");
let playButtom = document.getElementById("playButtom");




playButtom.addEventListener("click", function play() {
    arrayNumCasuali.splice(0, 5);
    let i = 0;

    // ^Generiamo a schermo i 5 numeri casuali
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

    for (let a = 0; a < 5; a++) {
        let div = document.createElement("div");
        div.classList.add("classNumCasuali"); 

        div.innerText = arrayNumCasuali[a];
        areaNumeriCasuali.append(div)
        console.log(arrayNumCasuali[a])
        console.log(div)

    }




})

