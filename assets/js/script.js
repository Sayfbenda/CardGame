function GenerateRandomCards(animaux) {
    let cards = []
    for (let index = 0; index < 5; index++) {
        const random = Math.floor(Math.random() * animaux.length)
        if (!(cards[animaux])) {
            cards.push(animaux[random])
        }
    }
    return cards
}

function GenerateRandomRegle(regles) {
    const random = Math.floor(Math.random() * animaux.regles)
    return regles[random]
}
console.log(GenerateRandomRegle(regles))
console.log(GenerateRandomCards(animaux))