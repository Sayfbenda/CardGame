let animaux = []

class Animal {
    constructor(nom, taille, poid, esperence_de_vie, image) {
        this.nom = nom
        this.taille = taille
        this.poid = poid
        this.esperence_de_vie = esperence_de_vie*360
        this.image = image
        animaux.push(this)
    }
}

let mygale = new Animal("La mygale", 110, 15, 18, "assets/img/mygale.jpg"); // Note: Taille ajustée en cm
let fourmi = new Animal("La fourmi", 0.01, 1, 1, "assets/img/fourmi.jpg");
let abeille = new Animal("L'abeille", 0.1, 1.5, 3, "assets/img/abeille.jpg"); // Reine: ~3 ans
let papillon = new Animal("Le monarque", 0.5, 10, 0.7, "assets/img/papillon.jpg"); // Vie en années (~9 mois)
let colibri = new Animal("Le colibri", 4, 10, 5, "assets/img/colibri.jpg");
let scorpion = new Animal("Le scorpion", 30, 18, 5, "assets/img/scorpion.jpg");

let chat = new Animal("Le chat domestique", 4500, 50, 15, "assets/img/chat.jpg");
let chien = new Animal("Le labrador", 30000, 90, 12, "assets/img/chien.jpg");
let loup = new Animal("Le loup gris", 40000, 150, 14, "assets/img/loup.jpg");
let lion = new Animal("Le lion", 190000, 250, 12, "assets/img/lion.jpg");
let elephant = new Animal("L'éléphant d'Afrique", 6000000, 330, 65, "assets/img/elephant.jpg");
let girafe = new Animal("La girafe", 1200000, 550, 25, "assets/img/girafe.jpg");
let hippopotame = new Animal("L'hippopotame", 1500000, 400, 45, "assets/img/hippo.jpg");
let kangourou = new Animal("Le kangourou roux", 85000, 160, 22, "assets/img/kangourou.jpg");
let gorille = new Animal("Le gorille", 160000, 170, 40, "assets/img/gorille.jpg");
let ours = new Animal("L'ours polaire", 450000, 260, 25, "assets/img/ours.jpg");

let baleine = new Animal("La baleine bleue", 150000000, 3000, 85, "assets/img/baleine.jpg");
let dauphin = new Animal("Le grand dauphin", 300000, 300, 45, "assets/img/dauphin.jpg");
let requin = new Animal("Le grand requin blanc", 1100000, 450, 70, "assets/img/requin.jpg");
let orque = new Animal("L'orque", 4500000, 700, 50, "assets/img/orque.jpg");
let meduse = new Animal("La méduse", 2000, 40, 1, "assets/img/meduse.jpg");

let aigle = new Animal("L'aigle royal", 5000, 80, 25, "assets/img/aigle.jpg");
let autruche = new Animal("L'autruche", 110000, 250, 40, "assets/img/autruche.jpg");
let manchot = new Animal("Le manchot empereur", 35000, 120, 20, "assets/img/manchot.jpg");
let crocodile = new Animal("Le crocodile du Nil", 500000, 450, 75, "assets/img/crocodile.jpg");
let tortue = new Animal("La tortue des Galapagos", 250000, 150, 150, "assets/img/tortue.jpg");
let cameleon = new Animal("Le caméléon", 150, 30, 5, "assets/img/cameleon.jpg");

console.log(animaux)