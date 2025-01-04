// IMAGES
const bongo = document.querySelector("#bongo")
const drumstick = document.querySelector("#drumsticks")
const drumkit = document.querySelector("#drumkit")
// IMAGES

// Containers
const soundCard = document.querySelector("#sound-card")
const btns = document.querySelector("#btns")
// Containers

const randomBtn = document.querySelector("#random-btn")

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
drumkit.addEventListener("click", () => {
    let random = Math.floor(Math.random() * soundInfo.length + 1)
    if (random === 5) {
        AudioPlay(soundInfo[4].audioFile)
    } else {
        AudioPlay(soundInfo[random].audioFile)
    }
})

function createTxtSound (name, key, cardName, audioFileSent) {
    if (cardName === soundCard) {
        const p = document.createElement("p")
        const text = document.createTextNode(`${name} = ${key}`)
        p.append(text)
        p.className = "key-txt"
        cardName.appendChild(p)
        window.addEventListener("keydown", (e) => {
            if (e.key.toLowerCase() === key.toLowerCase()) {
                AudioPlay(audioFileSent)
            }
        })
    } 
    else {
        const btn = document.createElement("button")
        const text = document.createTextNode(`${name}`)
        btn.append(text)
        btn.className = "btn-sounds"
        cardName.appendChild(btn)
        
    }
}

randomBtn.addEventListener("click", () => {
    let random = Math.floor(Math.random() * soundInfo.length)
    AudioPlay(soundInfo[random].audioFile) 
    })

soundInfo.forEach((item) => createTxtSound(item.nameOf, item.keyOf, soundCard, item.audioFile))
soundInfo.forEach((item) => createTxtSound(item.nameOf, item.keyOf, btns, item.audioFile))