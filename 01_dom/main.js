const input = document.querySelector("#fullname")
const result = document.querySelector(".text")

input.addEventListener("input", event => {
  result.innerText = event.target.value
})