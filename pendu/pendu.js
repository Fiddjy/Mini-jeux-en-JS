/* TODO LIST: 
    V Générer un mot aléatoire
    V afficher le mot en masqué _ _ _ _ _
    V Pouvoir proposer des lettres
    V Masquer les lettres proposées
    V Afficher les lettres trouvées
    V Gérer le nombre d'erreurs max
    X Gérer la fin de partie
*/

const buttonPlay = document.getElementById("beginGame");
const allWords = ['ministre', 'congolais','constitution', 'corompre', 'petrole', 'dictateur', 'sapeur', 'prisonnier', 'chomage', 'economie'];
const wordToFindDiv = document.getElementById("wordToFindDiv")
const KeyBoardDiv = document.getElementById("KeyBoard")
let wordToFind = '';
let wordToFindArray;
let cptErreur = 0

buttonPlay.addEventListener("click", function(){
    initGame()
})

function initGame(){
    // Générer un mot au hasard
    cptErreur = 0
    wordToFindDiv.innerHTML = ''
    wordToFind  = generateWord()
    wordToFindArray = Array.from(wordToFind)

    let table = document.createElement("table")

    let line = document.createElement("tr")
    line.id="LineOfWord";

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

        lettreDiv.addEventListener("click", () => {
            if(checkLetterInWord(letter)) { 
                // TODO afficher la lettre dans le mot masqué
                let lineWord = document.getElementById("LineOfWord") 
                let allTdOfWord = lineWord.children

                Array.from(allTdOfWord).forEach(td => {
                    if(td.dataset.letter == letter){
                        td.innerHTML = letter;
                    }
                })
            }
            else{
                cptErreur++
                document.getElementById("cptErreur").innerHTML = cptErreur
                if(cptErreur >= 5) {
                    document.getElementById("cptErreur").innerHTML = "Perdu, vous avez fait plus de 5 erreurs."
                    let lineWord = document.getElementById("LineOfWord")
                    let allTdOfWord = lineWord.children
                    Array.from(allTdOfWord).forEach(td => {
                        td.innerHTML = td.dataset.letter
                    })
                }
            }
            lettreDiv.style.visibility = "hidden"
        })
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

// retourne true si la lettre est présente dans le mot, retourn false si la lettre est absente du mot
function checkLetterInWord(letter){
    let findLetter = false
    wordToFindArray.forEach(letterOfWord => {
        if (letter == letterOfWord){
                findLetter = true
        }
    })
    return findLetter
  }