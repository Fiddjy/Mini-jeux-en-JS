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
    let wordToFind = generateWord()
    wordToFindDiv.innerHTML = wordToFind
}

function generateWord(){
    let indexWord = getRandomInt(allWords.length)
    console.log(indexWord)
    return allWords[indexWord]
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }