let cartes = []
let cartesenmain = []
let listecondition = ["Taille", "Poid", "Espérence de vie"]

function genererCondition(listecondition) {
    let index = Math.floor(Math.random() * listecondition.length)
    let condition = listecondition[index]
    console.log("La condition de la partie est la suivante : ", condition)
    generCarte(cartes, cartesenmain)
}

function listerTouteLescartes(cartes) {
    for (let index = 0; index < cartes.length; index++) {
        console.log(cartes[index].nom)
        
    }
}

function generCarte(cartes, cartesenmain) {
    for (let index = 0; index < 3; index++) {
        let i = Math.floor(Math.random() * cartes.length)
        let carte = cartes[i]
        cartes.splice(i, 1)
        cartesenmain.push(carte)
        console.log(cartesenmain[index].nom)
    }
}

function reset() {
    cartesenmain = []
}

function jouer() {
    listerTouteLescartes(cartes)
    reset()
    genererCondition(listecondition)
}