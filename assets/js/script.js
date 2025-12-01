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
    return regles[random]
}

function SetCardsToCardsPlace(cards) {
    console.log(cards)
}

function Play() {
    SetCardsToCardsPlace(GenerateRandomCards(animaux))
}

Play()
