let cartesenmain = []
let verifierCarte = []
let copieCarte = []
let joueurscore = 0

let premierecarte = document.getElementById("premierecarte")
let deuxiemecarte = document.getElementById("deuxiemecarte")
let troisiemecarte = document.getElementById("troisiemecarte")

let premiereplace = document.getElementById("premiereplace")
let deuxiemeplace = document.getElementById("deuxiemeplace")
let troisiemeplace = document.getElementById("troisiemeplace")

let carteMainPos = [premierecarte, deuxiemecarte, troisiemecarte]
let listecondition = ["Taille", "Poid", "Espérence de vie"]
let cartePos = [premiereplace, deuxiemeplace, troisiemeplace]

let conditionindex = 0
let condition = ""

let dragtarget

let divverifier = document.getElementById("verifier")
let divcartemain = document.getElementById("divcartemain")
let btnjouer = document.getElementById("btnjouer")
let sectionjouer = document.getElementById("sectionjouer")
let divscore = document.getElementById("score")
let divcondition = document.getElementById("condition")
let btnreset = document.getElementById("btnreset")

let fieldset
let h2value

function listeCarteCopie() {
    for (let index = 0; index < cartes.length; index++) {
        copieCarte.push(cartes[index]) 
    }
}
listeCarteCopie()

function listeCarte() {
    for (let index = 0; index < copieCarte.length; index++) {
        cartes.push(copieCarte[index]) 
    }
}

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


function jouer() {
    variables()
    ajouterFieldsets()
    affhicherFieldsets()
    variables()
    dragAndDrop()
    genererCondition(listecondition)
    afficherCarte()
}

function variables() {
    verifierCarte = []
    cartesenmain = []
    cartes = []
    listeCarte()
    divverifier = document.getElementById("verifier")
    divcartemain = document.getElementById("divcartemain")
    btnjouer = document.getElementById("btnjouer")
    sectionjouer = document.getElementById("sectionjouer")
    premierecarte = document.getElementById("premierecarte")
    deuxiemecarte = document.getElementById("deuxiemecarte")
    troisiemecarte = document.getElementById("troisiemecarte")

    premiereplace = document.getElementById("premiereplace")
    deuxiemeplace = document.getElementById("deuxiemeplace")
    troisiemeplace = document.getElementById("troisiemeplace")
    
    premiereplace = document.getElementById("premiereplace")
    deuxiemeplace = document.getElementById("deuxiemeplace")
    troisiemeplace = document.getElementById("troisiemeplace")
    divscore = document.getElementById("score")
    divcondition = document.getElementById("condition")
    btnreset = document.getElementById("btnreset")

    carteMainPos = [premierecarte, deuxiemecarte, troisiemecarte]
    listecondition = ["Taille", "Poid", "Espérence de vie"]
    cartePos = [premiereplace, deuxiemeplace, troisiemeplace]

    conditionindex = 0
    condition = ""

    dragtarget

}

function genererCondition(listecondition) {
    conditionindex = Math.floor(Math.random() * listecondition.length)
    let condition = listecondition[conditionindex]
    console.log("La condition de la partie est la suivante : ", condition)
    genererCarte(cartes, cartesenmain)
    afficherCondition()
}

function afficherCondition() {
    let condition = listecondition[conditionindex]
    let html = `
    <h2>Classez les cartes en fonction de cette condtion : ${condition}</h2>
    `
    divcondition.innerHTML = html
}

function genererCarte(cartes, cartesenmain) {
    for (let index = 0; index < 3; index++) {
        let i = Math.floor(Math.random() * cartes.length)
        let carte = cartes[i]
        cartes.splice(i, 1)
        cartesenmain.push(carte)
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
    })
    cartePos[index].addEventListener("dragstart", (event)=>{
        dragtarget = event.target
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
            fieldset = divverifier.children[index]
            h2value = parseInt(fieldset.children[2].innerHTML)
            verifierCarte.push(h2value)
        }
        verifierResultat(verifierCarte)
    }
}

function score(a) {
    joueurscore += a
    console.log(joueurscore)
    let html = `
    <h3>${joueurscore}</h3>
    ` 
    divscore.innerHTML = html
}

function scorefinal(joueurscore) {
    let html = `
    <h3>Score final : ${joueurscore}</h3>
    ` 
    divscore.innerHTML = html
}

function resetScore() {
    joueurscore = 0
    let html = `
    <h3>${joueurscore}</h3>
    ` 
    divscore.innerHTML = html
}

function verifierResultat(verifierCarte) {
    if (verifierCarte[0] > verifierCarte[1] && verifierCarte[1] > verifierCarte[2]){
        console.log("le goat")
        score(1)
        jouer()
    }else{
        console.log("le noob")
        perdu()
    }
}

function boutonreset() {
    btnreset.setAttribute("style", "visibility : visible")
}

function perdu() {
    scorefinal(joueurscore)
    boutonreset()
}

function affhicherFieldsets() {
    divverifier.style.setProperty("visibility", "visible")
    divcartemain.style.setProperty("visibility", "visible")
    btnjouer.style.setProperty("visibility", "hidden")
}





