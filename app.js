// IMAGES
const bongo = document.querySelector("#bongo")
const drumstick = document.querySelector("#drumsticks")
const drumkit = document.querySelector("#drumkit")
// IMAGES

// Containers
const soundCard = document.querySelector("#sound-card")
const btns = document.querySelector("#btns")
// Containers

// random btn
const randomBtn = document.querySelector("#random-btn")
// random btn

const soundInfo = [
    {
        nameOf: "bongo",
        keyOf: "b",
    },
    {
        nameOf: "kick",
        keyOf: "q",
    },
    {
        nameOf: "roll",
        keyOf: "r",
    },
    {
        nameOf: "single_beat",
        keyOf: "w",
    },
    {
        nameOf: "snare",
        keyOf: "e",
    },
    {
        nameOf: "floor_tom",
        keyOf: "t",
    }
]

// this plays the sounds
function AudioPlay(name) {
    let audio = new Audio(`./audios/${name}.mp3`)
    audio.play()
}

// this puts sounds on the images
bongo.addEventListener("click", () => {AudioPlay(soundInfo[0].nameOf)})
drumstick.addEventListener("click", () => {AudioPlay(soundInfo[2].nameOf)})
drumkit.addEventListener("click", () => {
    let newarr = soundInfo.filter((item) => item.nameOf !== "bongo")
    let random = Math.floor(Math.random() * newarr.length)
    AudioPlay(newarr[random].nameOf)
})

function createTxtSound (name, key, cardName) {
    // this checks which card it should fix
    if (cardName === soundCard) {
        const p = document.createElement("p")
        const text = document.createTextNode(`${name} = ${key}`)
        p.append(text)
        p.className = "key-txt"
        cardName.appendChild(p)
        window.addEventListener("keydown", (e) => {
            if (e.key.toLowerCase() === key.toLowerCase()) {
                AudioPlay(name)
            }
        })} 
    else {
        const btn = document.createElement("button")
        const text = document.createTextNode(`${name}`)
        btn.append(text)
        btn.className = "btn-sounds"
        cardName.appendChild(btn)
        btn.addEventListener("click", () => {
            AudioPlay(name)
        })}
}

//this gives a random sound to random btn
randomBtn.addEventListener("click", () => {
    let random = Math.floor(Math.random() * soundInfo.length)
    AudioPlay(soundInfo[random].nameOf) 
})


    // this creates both sound card and the buttons
soundInfo.forEach((item) => createTxtSound(item.nameOf, item.keyOf, soundCard))
soundInfo.forEach((item) => createTxtSound(item.nameOf, item.keyOf, btns))