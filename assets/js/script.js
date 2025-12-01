function GenerateRandomCards(animaux) {
    let cards = []
    while (cards.length < 5) {
        let isInliste = false
        const random = Math.floor(Math.random() * animaux.length)
        if (cards.length == 0) {
            cards.push(animaux[random])
        }
        cards.forEach(element => {
            if (element == animaux[random]) {
                isInliste = true
            }
        });
        if (!isInliste) {
            cards.push(animaux[random])
        }
    }
    return cards
}

function GenerateRandomRegle(regles) {
    const random = Math.floor(Math.random() * regles.length)
    const divphrase = document.getElementById("instruction")
    divphrase.innerText = regles[random].phrase
    return regles[random]
}

function SetCardsToCardsPlace(cards) {
    const cardslots = document.getElementsByClassName("card-slot")
    for (let index = 0; index < cardslots.length; index++) {
        if (cardslots[index].children[0].classList.contains("back-face")) {
            cardslots[index].children[0].classList.remove("back-face")
            cardslots[index].children[0].setAttribute("style", `background-image : url('${cards[index].image}');`)
        }
        
    }
}

function Play() {
    GenerateRandomRegle(regles)
    
    SetCardsToCardsPlace(GenerateRandomCards(animaux))
}

Play()
