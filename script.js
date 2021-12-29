const container = document.getElementById("container");
function addDivs() {
  let div;
  for (let i = 0; i < 256; i++) {
    div = document.createElement("div");
    div.classList.add("etch");
    container.appendChild(div);
  }
}
addDivs();

const divs = document.querySelectorAll(".etch");

divs.forEach(addClass());

function addClass() {
  divs.addEventListener("mouseover", () => divs.setAttribute("style", "background-color:blue;"), false);
}
