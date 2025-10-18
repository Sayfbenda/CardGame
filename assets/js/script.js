let cartes = []
let cartesenmain = []
let listecondition = ["Taille", "Poid", "Espérence de vie"]

function genererCondition(listecondition) {
    let index = Math.floor(Math.random() * listecondition.length)
    let condition = listecondition[index]
    console.log("La condition de la partie est la suivante : ", condition)
    generCarte(cartes, cartesenmain)
}

function generCarte(cartes, cartesenmain) {
    for (let index = 0; index < 3; index++) {
        let i = Math.floor(Math.random() * cartes.length)
        let carte = cartes[i]
        cartesenmain.push(carte)
        cartes.splice[carte , 1]
    }
    for (let index = 0; index < cartesenmain.length; index++) {
        console.log(cartesenmain[index].nom)
        
    }
}

function reset() {
    cartesenmain = []
}

function jouer() {
    reset()
    genererCondition(listecondition)
}