/* TODO LIST
- Générer la combinaison secrète de 4 couleurs
- Pouvoir proposer une combinaison
- Gérer début et fin de partie (importer les confettis)
*/
import { Utils } from "../lib/Utils/utils.js";

const colors = ["red", "blue", "yellow", "pink"]

console.log(colors[Utils.getRandomInt(4)])