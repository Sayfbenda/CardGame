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

function SetCardsToCardsPlace(cards, regle) {
    const reglecondtion = regle.condtion
    console.log(reglecondtion)
    const cardslots = document.getElementsByClassName("card-slot")
    for (let index = 0; index < cardslots.length; index++) {
        if (cardslots[index].children[0].classList.contains("back-face")) {
            cardslots[index].children[0].classList.remove("back-face")
            cardslots[index].children[0].setAttribute("style", `background-image : url('${cards[index].image}');`)
            cardslots[index].children[0].setAttribute('data-label', `${cards[index][reglecondtion]}`)
            cardslots[index].children[0].setAttribute('draggable', "true")
        }
        
    }
}


function GetAnimalByID(id) {
    animaux.forEach(element => {
        if (element.id == id) {
            return element
        }
    });
}

function SetEmptyCards() {
    const timeline = document.getElementById("timeline")
    timeline.innerHTML = ""
    for (let index = 0; index < 5; index++) {
        const html = `
                <div class="drop-zone">
                    <i class="ph-bold ph-plus"></i>
                    <span>Place Card Here</span>
                    <span>${index+1}</span>
                </div>
        `
        timeline.insertAdjacentHTML("beforeend", html)
        
    }
}


function SetDragAndDrop() {
    const cardslots = document.getElementsByClassName("card-slot")
    const dropzone = document.getElementsByClassName("drop-zone")
    for (let index = 0; index < dropzone.length; index++) {
        dropzone[index].addEventListener("dragover", function(e){
            e.preventDefault()
        })
        dropzone[index].addEventListener("drop", function(e){
            e.preventDefault()
            console.log("helo")
            const data = e.dataTransfer.getData("background");
            e.target.setAttribute("style", data)
        })
    }
    for (let index = 0; index < cardslots.length; index++) {
        cardslots[index].addEventListener("dragstart", function(e){
            e.dataTransfer.setData("background", e.target.getAttribute("style", "background-image"))
            console.log(e.dataTransfer.getData("background"))
        })
    }
}

function Play() {
    SetDragAndDrop()
    SetEmptyCards()
    const regle = GenerateRandomRegle(regles)
    const cartes = GenerateRandomCards(animaux)
    SetCardsToCardsPlace(cartes, regle)
}

Play()
