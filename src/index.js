let input = document.querySelector("#input-text");

let redButton = document.querySelector("#btn-red");
let greenButton = document.querySelector("#btn-green");
let blueButton = document.querySelector("#btn-blue");
let output = document.querySelector("#output");

redButton.addEventListener("click", handleRed);

blueButton.addEventListener("click", handleblueButton);

greenButton.addEventListener("click", handlegreenButton);

function handleRed() {
  let inputtedValue = input.value;
  output.innerText = inputtedValue;
  output.style.color = "red";
}

function handleblueButton() {
  let inputtedValue = input.value;
  output.innerText = inputtedValue;
  output.style.color = "blue";
}

function handlegreenButton() {
  let inputtedValue = input.value;
  output.innerText = inputtedValue;
  output.style.color = "green";
}
