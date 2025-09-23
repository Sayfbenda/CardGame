import random
crocodile = ("crocodile du Nil", 5500, 850000, 80*360)
chauvesouris = ("La Chauve-souris", 140, 70, 20*360)
mygale = ("La mygale", 110, 90, 18*360)
mouton = ("Un mouton", 110, 90, 25*360)
vache = ("Une vache", 110, 90, 30*360)
poule = ("Une poule", 110, 90, 5*360)

# Table vide
tabledejeu = []

print(tabledejeu)
print("Vous avez pioché la carte suivante :", mygale[0])
print("La condition du round : Poids")

conditionpoid = [crocodile[2], chauvesouris[2]]
position = int(input("Choisissez dans quelle position voulez vous mettre votre carte"))
if  conditionpoid[position] <= mygale[2]:
    tabledejeu.insert(position+1, mygale[0])
    print(tabledejeu)
    print("Vous avez gagné !")
else:
    print("Vous avez perdu !")