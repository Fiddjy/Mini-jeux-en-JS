/* TODO LIST

V Lancer un minuteur de x minute(s) => réutiliser celui du pendu => Set interval
V Générer un calcul (deux chiffres aléatoires, (+ - *) en aléatoire)
O Laisser l'utilisateur faire des propositions

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

const TempsMinuteurBase = 30
let compteurInterval = null
let TempsRestant = 0
let calculEncours = null

document.getElementById("validPropal").addEventListener("click", () => {
    if(propalInput.value == calculEncours.result) {
        alert("Bravo")
    }
    else{
        alert("Pas ça")
    }
})

function launchGame() {
    lancerMinuteur(TempsMinuteurBase)
}

function generateCalcul() {
    calculEncours = new Calcul(500)
    calculDiv.innerText = calculEncours.showCalcul
}

function lancerMinuteur(TempsMinuteurBase) {
    TempsRestant = TempsMinuteurBase
    compteurInterval = setInterval(() => {
        reboursDiv.innerText = TempsRestant
        TempsRestant--
        
        if(TempsRestant == 0) {
            clearInterval(compteurInterval)
                alert("fini")
        }
    }, 1000)
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