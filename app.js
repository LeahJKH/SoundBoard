// IMAGES
const bongo = document.querySelector("#bongo")
const drumstick = document.querySelector("#drumsticks")
const drumkit = document.querySelector("#drumkit")
// IMAGES

// Containers
const soundCard = document.querySelector("#sound-card")
const btns = document.querySelector("#btns")
// Containers

const soundInfo = [
    {
        nameOf: "bongo",
        keyOf: "b",
        audioFile: "bongo.mp3",
    },
    {
        nameOf: "kick",
        keyOf: "q",
        audioFile: "kick.mp3",
    },
    {
        nameOf: "roll",
        keyOf: "r",
        audioFile: "roll.mp3",
    },
    {
        nameOf: "single beat",
        keyOf: "w",
        audioFile: "single_beat.mp3",
    },
    {
        nameOf: "snare",
        keyOf: "e",
        audioFile: "snare.mp3",
    }
]

function AudioPlay(name) {
    let audio = new Audio(`./audios/${name}`)
    audio.play()
}

bongo.addEventListener("click", () => {AudioPlay(soundInfo[0].audioFile)})
drumstick.addEventListener("click", () => {AudioPlay(soundInfo[2].audioFile)})
drumkit.addEventListener("click", () => {AudioPlay(soundInfo[1].audioFile)})

function createTxtSound (name, key, cardName) {
    if (cardName === soundCard) {
        const p = document.createElement("p")
        const text = document.createTextNode(`${name} = ${key}`)
        p.append(text)
        p.className = "key-txt"
        cardName.appendChild(p)
    } 
    else {
        const btn = document.createElement("button")
        const text = document.createTextNode(`${name}`)
        btn.append(text)
        btn.className = "btn-sounds"
        cardName.appendChild(btn)
    }
}

soundInfo.forEach((item) => createTxtSound(item.nameOf, item.keyOf, soundCard))
soundInfo.forEach((item) => createTxtSound(item.nameOf, item.keyOf, btns))