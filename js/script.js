let cartes = []
let cartesenmain = []
let condition = ["Taille", "Poid", "Espérence de vie"]

let mygale = new Object()
mygale.nom = "La mygale"
mygale.taille = 110
mygale.poid = 90
mygale.vie = 18*360
cartes.push(mygale)

let crocodile = new Object()
crocodile.nom = "Crocodile du Nil"
crocodile.taille = 5500
crocodile.poid = 850000
crocodile.vie = 80*360
cartes.push(crocodile)

let chauvesouris = new Object()
chauvesouris.nom = "La chauve-souris"
chauvesouris.taille = 140
chauvesouris.poid = 70
chauvesouris.vie = 20*360
cartes.push(chauvesouris)

let mouton = new Object()
mouton.nom = "Un mouton"
mouton.taille = 2010
mouton.poid = 15000
mouton.vie = 25*360
cartes.push(mouton)

let vache = new Object()
vache.nom = "Une vache"
vache.taille = 3010
vache.poid = 200000
vache.vie = 30*360
cartes.push(vache)

let poule = new Object()
poule.nom = "Une poule"
poule.taille = 310
poule.poid = 1200
poule.vie = 5*360
cartes.push(poule)

console.log(cartes)
function genererCarte() {
    for (let index = 0; index < 3; index++) {
        let nbhasard = Math.floor(Math.random()*cartes.length)
        cartesenmain.push(cartes[nbhasard])
        cartes.splice(nbhasard, 1)
    }
    
}
genererCarte()

function afficherCartes() {
    for (let index = 0; index < cartesenmain.length; index++) {
        let carte = cartesenmain[index]
        console.log(carte.nom)
    }
}

afficherCartes()

function genererRegle() {
    console.log("Condition : ", condition[Math.floor(Math.random()*condition.length)])
}
genererRegle()