import random

# Initialisation des tuples animaux :
crocodile = ("crocodile du Nil", 5500, 850000, 80*360)
chauvesouris = ("La Chauve-souris", 140, 70, 20*360)
mygale = ("La mygale", 110, 90, 18*360)
mouton = ("Un mouton", 110, 15000, 25*360)
vache = ("Une vache", 110, 20000, 30*360)
poule = ("Une poule", 110, 1200, 5*360)

# les conditions du round 

Poid = ("Poid", 1)
Taille = ("Taille", 2)
Esp = ("Espérence de vie", 3)

indexConditions = [Poid, Taille, Esp]

# Liste des animaux : 
cartes = [crocodile, chauvesouris, mygale, mouton, vache, poule]

# Au début : la table du jeu et la main sont vides 
tabledejeu = [1, 2, 3]
cartesenmain = []

# Tirer 3 cartes au hasard au début et l'enlève de la liste carte

def cartesauhasard():
    for i in range(3):
        number = random.randint(0, cartes.__len__()-1)
        cartesenmain.append(cartes[number])
        cartes.remove(cartes[number])

# Début du jeu :

# Annoncer la condition :

def conditionauhasard():
    conditionhasard = random.randint(0,2)
    return conditionhasard

hasard = conditionauhasard()

# Informer l'utilisateur sur les cartes qu'il a en main

def carteenmaindujoueur():
    print("Voici les cartes que vous avez tiré : ")
    for i in range(len(cartesenmain)):
        print(cartesenmain[i][0])

# Fonction pour annoncer les cartes sur la table

def cartesurtable():
    for i in range(len(tabledejeu)):
        print(tabledejeu[i][0])

# Demander à l'utilisateur l'ordre des cartes :

def ordredescartes():
    while len(cartesenmain) != 0 :
        x = 0
        carteenmaindujoueur()
        placecarte = int(input("En quelle position voulez vous placer votre carte ? "))
        tabledejeu[placecarte] = cartesenmain[x]
        cartesenmain.remove(cartesenmain[x])
        x += 1
    print("Votre main est maintenant libre")
    

# Traitement (gagner ou perdre)


def gagnerouperdre():
    condition = indexConditions[hasard][1]
    if tabledejeu[0][hasard] > tabledejeu[1][hasard] > tabledejeu[2][hasard]:
        print("Vous avez gangé")
    else:
        print("Vous avez perdu !")
    

def jouerleround():
    conditionauhasard()
    condtion = indexConditions[hasard][0]
    print("La condition du round est : ", condtion)
    cartesauhasard()
    ordredescartes()
    cartesurtable()
    gagnerouperdre()
    

jouerleround()


# Définir la condition du round :
    

    
