/* TODO LIST: 
    V Générer un mot aléatoire
    O afficher le mot en masqué _ _ _ _ _
    O Pouvoir proposer des lettres
    O Afficher les lettres trouvées
    O Gérer le nombre d'erreurs max
*/

const buttonPlay = document.getElementById("beginGame");
const allWords = ['ministre', 'congolais','constitution', 'corompre', 'petrole', 'dictateur', 'sapeur', 'prisonnier', 'chomage', 'economie'];
const wordToFindDiv = document.getElementById("wordToFindDiv")

buttonPlay.addEventListener("click", function(){
    beginGame()
})

function beginGame(){
    // Générer un mot au hasard
    wordToFindDiv.innerHTML = ''
    let wordToFind = generateWord()
    let wordToFindArray = Array.from(wordToFind)

    let table = document.createElement("table")
    let line = document.createElement("tr")
    wordToFindArray.forEach(letter => {
        //Créer un TD (case du tableau) par lettre
        let td = document.createElement("td")
        td.dataset.letter = letter
        td.innerText = "_"
        line.appendChild(td)
    })
    table.appendChild(line)
    wordToFindDiv.appendChild(table)
}

function generateWord(){
    let indexWord = getRandomInt(allWords.length)
    return allWords[indexWord]
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }