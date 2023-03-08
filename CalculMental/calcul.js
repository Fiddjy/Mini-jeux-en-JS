/* TODO LIST

V2 
Paramétrer ma partie
Modifier le temps du compte à rebours
Les opérateurs de la partie
Meilleur temps en cookie
Gérer les divisions
*/

const reboursDiv = document.getElementById("minuteur")
const calculDiv = document.getElementById("calcul")
const propalInput = document.getElementById("resultPropal")
const messengerDiv = document.getElementById("messenger")
const showPlayingDiv = document.querySelectorAll(".showPlayingDiv")

const TempsMinuteurBase = 30
let compteurInterval = null
let TempsRestant = 0
let calculEncours = null
let cptGoodAnswer = 0
let cptBadAnswer = 0

document.getElementById("validPropal").addEventListener("click", () => {
    getInputValue()
})

propalInput.addEventListener("keyup", event => {
    if(event.key == 'Enter') {
        checkInputValue()
    }
})

function checkInputValue() {
    if(propalInput.value == calculEncours.result) {
        messengerDiv.innerText="Bravo, vous avez trouvé"
        cptGoodAnswer++
    }
    else{
        messengerDiv.innerText=`Raté, le résultat attendu était : ${calculEncours.showCalcul} = ${calculEncours.result}`
        cptBadAnswer++
    }
    propalInput.value = ""
    generateCalcul()
}

function launchGame() {
    cptGoodAnswer = 0
    cptBadAnswer = 0
    lancerMinuteur(TempsMinuteurBase)
    generateCalcul()
    displayPlaiyngDiv(true)
}

function generateCalcul() {
    calculEncours = new Calcul(20)
    calculDiv.innerText = calculEncours.showCalcul
}

function lancerMinuteur(TempsMinuteurBase) {
    clearInterval(compteurInterval)
    TempsRestant = TempsMinuteurBase
    reboursDiv.innerText = TempsRestant
    compteurInterval = setInterval(() => {
        TempsRestant--
        reboursDiv.innerText = TempsRestant
        if(TempsRestant === 0) {
            clearInterval(compteurInterval)
            displayPlaiyngDiv(false)
            messengerDiv.innerHTML = `Bonne(s) réponse(s) : ${cptGoodAnswer}<br/>`
            messengerDiv.innerHTML += `Mauvaise(s) réponse(s) : ${cptBadAnswer}`
        }
    }, 1000)
}

function displayPlaiyngDiv(show){
    let displayProperty = "none"
    if(show) {
        displayProperty = "block"
    }
    showPlayingDiv.forEach(element => {
        element.style.display = displayProperty ;
    })
}

class Calcul {
    #operators = ['*', '-', '+']
    nombre1;
    nombre2;
    operator;
    constructor(maximum) {
        this.nombre1 = this.#getRandomInt(maximum)
        this.nombre2 = this.#getRandomInt(maximum)
        this.operator = this.#operators[this.#getRandomInt(3)]
    }

    get result() {
        return eval(this.nombre1 + this.operator + this.nombre2)
    }

    get showCalcul() {
        return `${this.nombre1} ${this.operator} ${this.nombre2}`
    }

    #getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    }