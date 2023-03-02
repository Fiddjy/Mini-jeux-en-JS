/* TODO LIST: 
    V Générer un mot aléatoire
    V afficher le mot en masqué _ _ _ _ _
    V Pouvoir proposer des lettres
    O Masquer les lettres proposées
    O Afficher les lettres trouvées
    O Gérer le nombre d'erreurs max
*/

const buttonPlay = document.getElementById("beginGame");
const allWords = ['ministre', 'congolais','constitution', 'corompre', 'petrole', 'dictateur', 'sapeur', 'prisonnier', 'chomage', 'economie'];
const wordToFindDiv = document.getElementById("wordToFindDiv")
const KeyBoardDiv = document.getElementById("KeyBoard")

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

    generateKeyBoard()
}

function generateKeyBoard(){
    KeyBoardDiv.innerHTML = ''
    let Alphabet = generateAlphabet()
    Alphabet.forEach(letter => {
        let lettreDiv = document.createElement("div")
        lettreDiv.innerHTML = letter
        lettreDiv.classList.add("letterKeyBoard")
        KeyBoardDiv.appendChild(lettreDiv)
    })
}

function generateAlphabet(capital = false) {
    return[...Array(26)].map((_, i) => String.fromCharCode(i + (capital ? 65 : 97)))
    /* ci-dessous, tout pareil, mais écrit autrement :
    let tab = []; 
    for(i=0; i<26; i++) {
        if(capital) {
            tab.push(String.fromCharCode(i + 65))
        }
        else {
            tab.push(String.fromCharCode(i + 97))
        }
    }
    return tab */
}

function generateWord(){
    let indexWord = getRandomInt(allWords.length)
    return allWords[indexWord]
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }