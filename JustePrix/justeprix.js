// Générer un chiffre en aléatoire
// L'utilisateur fera des propositions
// Continuer tant qu'il n'a pas la bonne proposition

let NumberToFind = 0;

document.getElementById("beginGame").addEventListener("click", function(){
  // Lancer la partie
  // Récupérer un chiffre aléatoire
  NumberToFind = getRandomInt(1000)
})

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}