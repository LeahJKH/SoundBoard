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