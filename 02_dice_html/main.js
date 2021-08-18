const button = document.querySelector(".roll-dice")
const img1 = document.querySelector(".dice-1")
const img2 = document.querySelector("#dice-2")

const images = [
  "./images/dice1.png",
  "./images/dice2@2x.png",
  "./images/dice3@2x.png",
  "./images/dice4@2x.png",
  "./images/dice5@2x.png",
  "./images/dice6@2x.png",
]

button.addEventListener("click", () => {
  img1.src = images[Math.floor(Math.random(0) * (images.length - 1))]
  img2.src = images[Math.floor(Math.random(0) * (images.length - 1))]
})