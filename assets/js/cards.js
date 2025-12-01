let animaux = []

class Animal {
    constructor(nom, id, taille, poid, esperence_de_vie, image) {
        this.nom = nom
        this.id = id
        this.taille = taille
        this.poid = poid
        this.esperence_de_vie = esperence_de_vie*360
        this.image = image
        animaux.push(this)
    }
}

const fourmi = new Animal("La fourmi", "FOURMI", 0.01, 1, 1, "assets/img/fourmi.png");
const abeille = new Animal("L'abeille", "ABEILLE", 0.1, 1.5, 3, "assets/img/abeille.png");
const papillon = new Animal("Le monarque", "PAPILLON", 0.5, 10, 0.7, "assets/img/papillon.png");
const colibri = new Animal("Le colibri", "COLIBRI", 4, 10, 5, "assets/img/colibri.jpg");
const scorpion = new Animal("Le scorpion", "SCORPION", 30, 18, 5, "assets/img/scorpion.jpg");

const chat = new Animal("Le chat domestique", "CHAT", 4500, 50, 15, "assets/img/chat.png");
const chien = new Animal("Le labrador", "CHIEN", 30000, 90, 12, "assets/img/chien.png");
const loup = new Animal("Le loup gris", "LOUP", 40000, 150, 14, "assets/img/loup.png");
const lion = new Animal("Le lion", "LION", 190000, 250, 12, "assets/img/lion.png");
const elephant = new Animal("L'éléphant d'Afrique", "ELEPHANT", 6000000, 330, 65, "assets/img/elephant.jpg");
const girafe = new Animal("La girafe", "GIRAFE", 1200000, 550, 25, "assets/img/girafe.jpg");
const hippopotame = new Animal("L'hippopotame", "HIPPOPOTAME", 1500000, 400, 45, "assets/img/hippopotame.jpg");
const kangourou = new Animal("Le kangourou roux", "KANGOUROU", 85000, 160, 22, "assets/img/kangourou.jpg");

const baleine = new Animal("La baleine bleue", "BALEINE", 150000000, 3000, 85, "assets/img/baleine.jpg");
const requin = new Animal("Le grand requin blanc", "REQUIN", 1100000, 450, 70, "assets/img/requin.jpg");

const aigle = new Animal("L'aigle royal", "AIGLE", 5000, 80, 25, "assets/img/aigle.jpg");
const manchot = new Animal("Le manchot empereur", "MANCHOT", 35000, 120, 20, "assets/img/manchot.jpg");
const crocodile = new Animal("Le crocodile du Nil", "CROCODILE", 500000, 450, 75, "assets/img/crocoddile.jpg");
const tortue = new Animal("La tortue des Galapagos", "TORTUE", 250000, 150, 150, "assets/img/tortue.jpg");
const cameleon = new Animal("Le caméléon", "CAMELEON", 150, 30, 5, "assets/img/cameleon.jpg");


let regles = []

class Regle {
    constructor(nom, condtion, phrase) {
        this.nom = nom
        this.condtion = condtion
        this.phrase = phrase
        regles.push(this)
    }
}

const poids = new Regle("poids", "poid", "Classez les cartes du moins lourd au plus lourd")
const vie = new Regle("espérence de vie", "esperence_de_vie", "Classez dans l'ordre croissant")
const taille = new Regle("taille", "taille", "Classez du plus petit au plus grand")
