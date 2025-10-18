let cartes = []
let cartesenmain = []
let listecondition = ["Taille", "Poid", "Espérence de vie"]

function genererCondition(listecondition) {
    let index = Math.floor(Math.random() * listecondition.length)
    let condition = listecondition[index]
    console.log("La condition de la partie est la suivante : ", condition)
}


function jouer() {
    genererCondition(listecondition)
}