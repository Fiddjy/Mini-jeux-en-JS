/* TODO LIST
Corriger le bug du undefined si pas de valeur rentrées

V2 
Gérer les divisions
Meilleur temps en cookie

*/

const reboursDiv = document.getElementById("minuteur")
const calculDiv = document.getElementById("calcul")
const propalInput = document.getElementById("resultPropal")
const messengerDiv = document.getElementById("messenger")
const showPlayingDiv = document.querySelectorAll(".showPlayingDiv")
const nbScondsGameInput = document.getElementById("nbSecondsGame")
const maxNumberCalcInput = document.getElementById("maxNumberCalc")

let TempsMinuteurBase = 30
let maxCalculNumber = 20
let compteurInterval = null
let TempsRestant = 0
let calculEncours = null
let cptGoodAnswer = 0
let cptBadAnswer = 0
let allCalculRecap = ''

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
        allCalculRecap += `${calculEncours.showCalculwithResult} | <span class="goodAnswer">${propalInput.value}</span><br/>`
    }
    else{
        messengerDiv.innerText=`Raté, le résultat attendu était : ${calculEncours.showCalculwithResult}`
        cptBadAnswer++
        allCalculRecap += `${calculEncours.showCalculwithResult} | <span class="badAnswer">${propalInput.value}</span><br/>`
    }
    propalInput.value = ""
    generateCalcul()
}

function launchGame() {
    console.log(nbScondsGameInput.value)
    if(nbScondsGameInput.value != undefined) {
        TempsMinuteurBase = nbScondsGameInput.value
    }

    if(maxNumberCalcInput.value != undefined) {
        maxCalculNumber = maxNumberCalcInput.value
    }

    allCalculRecap=""
    cptGoodAnswer = 0
    cptBadAnswer = 0
    messengerDiv.innerHTML=""
    lancerMinuteur(TempsMinuteurBase)
    generateCalcul()
    displayPlaiyngDiv(true)
}

function generateCalcul() {
    calculEncours = new Calcul(maxCalculNumber)
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
            messengerDiv.innerHTML += `Mauvaise(s) réponse(s) : ${cptBadAnswer}<br/>`

            let totalQuestions = cptBadAnswer + cptGoodAnswer
            let pourcentageGoodAnswer = 100 * (cptGoodAnswer/totalQuestions)

            messengerDiv.innerHTML += `Ratio de bonnes réponses : ${pourcentageGoodAnswer}%<br/>`
            messengerDiv.innerHTML += allCalculRecap
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

    get showCalculwithResult() {
        return `${this.showCalcul} = ${this.result}`
    }

    #getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    }