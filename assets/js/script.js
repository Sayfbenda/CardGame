let cartes = []
let cartesenmain = []
let condition = ["Taille", "Poid", "Espérence de vie"]
const titrecondition = document.getElementById("condition") 
const premierePos = document.getElementById("premiereposition")
const deuxiemePos = document.getElementById("deuxiemeposition")
const troisiemePos = document.getElementById("troisiemeposition")
const premiereMainPos = document.getElementById("premieremain")
const deuxiemeMainPos = document.getElementById("deuxiememain")
const troisiemeMainPos = document.getElementById("troisiememain")
const posiotionmain = [premiereMainPos, deuxiemeMainPos, troisiemeMainPos]
const pos = [deuxiemePos, premierePos , troisiemePos]
let dragtest = ""

let mygale = new Object()
mygale.nom = "La mygale"
mygale.taille = 110
mygale.poid = 90
mygale.vie = 18*360
mygale.image = 'assets/img/mygale.jpg'
cartes.push(mygale)

let crocodile = new Object()
crocodile.nom = "Crocodile du Nil"
crocodile.taille = 5500
crocodile.poid = 850000
crocodile.vie = 80*360
crocodile.image = 'assets/img/NileCrocodile.jpg'
cartes.push(crocodile)

let chauvesouris = new Object()
chauvesouris.nom = "La chauve-souris"
chauvesouris.taille = 140
chauvesouris.poid = 70
chauvesouris.vie = 20*360
chauvesouris.image = 'assets/img/chauvesouris.jpg'
cartes.push(chauvesouris)

let mouton = new Object()
mouton.nom = "Un mouton"
mouton.taille = 2010
mouton.poid = 15000
mouton.vie = 25*360
mouton.image = 'assets/img/mouton.jpg'
cartes.push(mouton)

let vache = new Object()
vache.nom = "Une vache"
vache.taille = 3010
vache.poid = 200000
vache.vie = 30*360
vache.image = 'assets/img/vache.jpg'
cartes.push(vache)

let poule = new Object()
poule.nom = "Une poule"
poule.taille = 310
poule.poid = 1200
poule.vie = 5*360
poule.image = 'assets/img/poule.jpg'
cartes.push(poule)

