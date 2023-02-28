// Générer un chiffre en aléatoire
// L'utilisateur fera des propositions
// Continuer tant qu'il n'a pas la bonne proposition

let NumberToFind = 0;
const resultDiv = document.getElementById("resultDiv");

document.getElementById("beginGame")
  .addEventListener("click", function(){
  // Lancer la partie
  // Récupérer un chiffre aléatoire
  NumberToFind = getRandomInt(1000);
  console.log(NumberToFind)
});

document.getElementById("checkPropalButton")
  .addEventListener("click", function(){
    checkPropal()
  })

document.getElementById("userPropalInput")
  .addEventListener("keyup", function(event){
    if(event.key == 'Enter'){
      checkPropal()
    }
  })

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function checkPropal() {
  let numberPropal = document.getElementById("userPropalInput").value
    if(NumberToFind > numberPropal) {
      resultDiv.innerHTML = "C'est plus ! "
    }
    else if (NumberToFind < numberPropal) {
      resultDiv.innerHTML = "C'est moins ! "
    }
    else if (NumberToFind == numberPropal) {
      resultDiv.innerHTML = "C'est gagné ! "
    }
}