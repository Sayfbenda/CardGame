let cartes = []
let cartesenmain = []
let verifierCarte = []

const premierecarte = document.getElementById("premierecarte")
const deuxiemecarte = document.getElementById("deuxiemecarte")
const troisiemecarte = document.getElementById("troisiemecarte")

const premiereplace = document.getElementById("premiereplace")
const deuxiemeplace = document.getElementById("deuxiemeplace")
const troisiemeplace = document.getElementById("troisiemeplace")

const divverifier = document.getElementById("verifier")
const divcartemain = document.getElementById("divcartemain")

const carteMainPos = [premierecarte, deuxiemecarte, troisiemecarte]
const listecondition = ["Taille", "Poid", "Espérence de vie"]
const cartePos = [premiereplace, deuxiemeplace, troisiemeplace]

let conditionindex = 0
let condition = ""

let dragtarget

function genererCondition(listecondition) {
    conditionindex = Math.floor(Math.random() * listecondition.length)
    let condition = listecondition[conditionindex]
    console.log("La condition de la partie est la suivante : ", condition)
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

function afficherCarte() {
    for (let index = 0; index < carteMainPos.length; index++) {
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
        <img src="${cartesenmain[index].image}" alt="" draggable="false">
        ${condition}
        `
        carteMainPos[index].innerHTML = html
    }
}


for (let index = 0; index < carteMainPos.length; index++) {
    carteMainPos[index].addEventListener("dragstart", (event)=>{
        dragtarget = event.target
        console.log(dragtarget)
        console.log(divcartemain.children)
    })
    cartePos[index].addEventListener("dragstart", (event)=>{
        dragtarget = event.target
        console.log(dragtarget)
    })
    cartePos[index].addEventListener("dragover", (event)=>{
        event.preventDefault()
    })
    cartePos[index].addEventListener("drop", (event)=>{
        event.target.replaceWith(dragtarget)
        dragtarget.setAttribute("draggable", false)
        verifier()
    })
}

function verifier() {
    if (divcartemain.children.length == 0) {
        for (let index = 0; index < 3; index++) {
            let fieldset = divverifier.children[index]
            let h2value = parseInt(fieldset.children[2].innerHTML)
            verifierCarte.push(h2value)
        }
        console.log(verifierCarte)   
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