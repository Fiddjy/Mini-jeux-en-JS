/* TODO LIST
- Générer la combinaison secrète de 4 couleurs => DONE
- Pouvoir proposer une combinaison
- Gérer début et fin de partie (importer les confettis)
*/
import { Utils } from "../lib/Utils/utils.js";

const colors = ["red", "blue", "yellow", "pink"]
let colorTabToFind = null

setAleaColorTab()
console.log(colorTabToFind)

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