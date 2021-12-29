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

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener("mouseover", () => {
    divs[i].classList.add("hovery");
  });
}
