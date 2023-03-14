/* TODO LIST
- Générer la combinaison secrète de 4 couleurs => DONE
- Pouvoir proposer une combinaison => DONE
- Gérer début et fin de partie (importer les confettis)
*/
import { Utils } from "../lib/Utils/utils.js";
import { Confetti } from "../lib/confetti.js";

const allSelectDiv = document.getElementById("allSelect")
const colors = ["red", "blue", "yellow", "pink"]
let colorTabToFind = null
const nbColorToFind = 4

document.getElementById("startButton").addEventListener("click", () => {
    launchGame() 
})

function launchGame() {
    allSelectDiv.innerHTML = ""
    setAleaColorTab()
    generateLineSelect()
    console.log(colorTabToFind)
}

function checkProposition() {
    let allSelect = allSelectDiv.querySelectorAll("select")
    let propal = Array.from(allSelect, select => select.value).slice(0-nbColorToFind)
    console.log(propal)

    let cptGoodPlace = 0
    let cptBadPlace = 0
    let colorToFindCopy = [...colorTabToFind]

    for(let i = 0; i<propal.length; i++) {
        if(propal[i] == colorToFindCopy[i]) {
            cptGoodPlace++
            colorToFindCopy[i] = "Trouvé"
            propal[i] = "trouvéCotePropal"
        }
    }
    for(let i = 0; i<propal.length; i++) {
        if(propal[i] != "trouvéCotePropal"[i]){
            let finded = false
            colorToFindCopy.forEach((color,index)=>{
                if(!finded) {
                    if(propal[i]==color) {
                        cptBadPlace++
                        propal[i] = "trouvéCotePropal"
                        colorToFindCopy[index] = "trouvé"
                        finded = true
                    }
                }
            })
        }
    }

    let lineResponse = document.createElement("div")
    lineResponse.innerText= "bien placés : " + cptGoodPlace + "| Mal placés : " + cptBadPlace
    allSelectDiv.appendChild(lineResponse)

    if(cptGoodPlace == colorTabToFind.length) {
        Confetti.launchAnimationConfeti();
        setTimeout(() => {
          Confetti.stopAnimationConfeti();
        },5000)
    }
    else{
        let finded = false
        colorTabToFind.forEach(color => {
            if(propal[i] == color) {
                finded = true
            }
        })
        if(finded) {
            cptBadPlace++
        }
    }
    generateLineSelect()
}

function generateLineSelect() {
    let line = document.createElement("div")
    for(let index = 0; index < nbColorToFind; index++) {
        generateSelect(line)
    }
    let btn = document.createElement("button")
    btn.innerText="ok"
    line.appendChild(btn)
    btn.addEventListener("click", () => {
        checkProposition()
    })
    allSelectDiv.appendChild(line)
}

function generateSelect(target){
    let mySelect = document.createElement("select")
    colors.forEach(color => {
        let colorOption=document.createElement("option")
        colorOption.innerHTML = color
        colorOption.value = color
        mySelect.appendChild(colorOption)
        colorOption.style.backgroundColor = color
    })
    target.appendChild(mySelect)
}

function setAleaColorTab(size = 4) {
    colorTabToFind = []
    for(let index = 0; index < size; index++) {
        colorTabToFind.push(getAleaColor())
    }
}

function getAleaColor(){
    let aleaIndex = Utils.getRandomInt(colors.length)
    let aleaColor = colors[aleaIndex]
    return aleaColor
}