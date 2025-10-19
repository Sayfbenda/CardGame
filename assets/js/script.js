let cartesenmain = []
let verifierCarte = []
cartes = []
let copieCarte = cartes

const divverifier = document.getElementById("verifier")
const divcartemain = document.getElementById("divcartemain")
const btnjouer = document.getElementById("btnjouer")
const sectionjouer = document.getElementById("sectionjouer")

function ajouterFieldsets() {
    let premierhtml = `
    <fieldset id="premiereplace" draggable="false">
                
                </fieldset>
                <fieldset id="deuxiemeplace" draggable="false">

                </fieldset>
                <fieldset id="troisiemeplace" draggable="false">

                </fieldset>
    `
    divverifier.innerHTML = premierhtml
    let deuxiemehtml = `
    <fieldset id="premierecarte" draggable="true">

                </fieldset>
                <fieldset id="deuxiemecarte" draggable="true">

                </fieldset>
                <fieldset id="troisiemecarte" draggable="true">

                </fieldset>
    `
    divcartemain.innerHTML = deuxiemehtml
}

ajouterFieldsets()

function jouer() {
    reset()
    affhicherFieldsets()
    dragAndDrop()
    genererCondition(listecondition)
    afficherCarte()
}

const premierecarte = document.getElementById("premierecarte")
const deuxiemecarte = document.getElementById("deuxiemecarte")
const troisiemecarte = document.getElementById("troisiemecarte")

const premiereplace = document.getElementById("premiereplace")
const deuxiemeplace = document.getElementById("deuxiemeplace")
const troisiemeplace = document.getElementById("troisiemeplace")

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
    genererCarte(copieCarte, cartesenmain)
}

function genererCarte(copieCarte, cartesenmain) {
    for (let index = 0; index < 3; index++) {
        let i = Math.floor(Math.random() * copieCarte.length)
        let carte = copieCarte[i]
        copieCarte.splice(i, 1)
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
        const html = `
        <h2>${cartesenmain[index].nom}</h2>
        <img src="${cartesenmain[index].image}" alt="" draggable="false">
        ${condition}
        `
        carteMainPos[index].innerHTML = html
    }
}

function dragAndDrop() {
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
}

function verifier() {
    if (divcartemain.children.length == 0) {
        for (let index = 0; index < 3; index++) {
            let fieldset = divverifier.children[index]
            let h2value = parseInt(fieldset.children[2].innerHTML)
            verifierCarte.push(h2value)
        }
        console.log(verifierCarte)   
        verifierResultat(verifierCarte)
    }
}

function verifierResultat(verifierCarte) {
    if (verifierCarte[0] > verifierCarte[1] && verifierCarte[1] > verifierCarte[2]){
        console.log("le goat")
        reset()
    }else{
        console.log("le noob")
    }
}

function affhicherFieldsets() {
    divverifier.style.setProperty("visibility", "visible")
    divcartemain.style.setProperty("visibility", "visible")
    btnjouer.style.setProperty("visibility", "hidden")
}

function reset() {
    cartesenmain = []
    copieCarte = cartes
}



