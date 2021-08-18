const input = document.querySelector("#fullname")
const resultEle = document.querySelector(".text")

input.addEventListener("input", event => {
  resultEle.innerText = event.target.value
})