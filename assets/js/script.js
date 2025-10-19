let cartes = []
let cartesenmain = []
let premierecarte = document.getElementById("premierecarte")
let deuxiemecarte = document.getElementById("deuxiemecarte")
let troisiemecarte = document.getElementById("troisiemecarte")
let listescartes = [premierecarte, deuxiemecarte, troisiemecarte]
let listecondition = ["Taille", "Poid", "Espérence de vie"]
let conditionindex = 0
let condition = ""


function genererCondition(listecondition) {
    conditionindex = Math.floor(Math.random() * listecondition.length)
    let condition = listecondition[conditionindex]
    console.log("La condition de la partie est la suivante : ", condition)
    conditionManage(conditionindex)
    genererCarte(cartes, cartesenmain)
}

function genererCarte(cartes, cartesenmain) {
    for (let index = 0; index < 3; index++) {
        let i = Math.floor(Math.random() * cartes.length)
        let carte = cartes[i]
        cartes.splice(i, 1)
        cartesenmain.push(carte)
        console.log(cartesenmain[index].nom)
    }
}

function conditionManage(conditionindex) {
    
    console.log(condition)
}

function afficherCarte() {
    for (let index = 0; index < listescartes.length; index++) {
        if (conditionindex == 0){
            condition = `<h3>${cartesenmain[index].taille}</h3>`
        }else if (conditionindex == 1){
            condition = `<h3>${cartesenmain[index].poid}</h3>`
        }else{
            condition = `<h3>${cartesenmain[index].vie}</h3>`
        }
        console.log(condition)
        let html = `
        <h2>${cartesenmain[index].nom}</h2>
        <img src="${cartesenmain[index].image}" alt="">
        ${condition}
        `
        listescartes[index].innerHTML = html
    }
}

function reset() {
    cartesenmain = []
}

function jouer() {
    reset()
    genererCondition(listecondition)
    afficherCarte()
}