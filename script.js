const container = document.getElementById("container");

function addDivs(rows, columns) {
  let div;
  columns = prompt("Choose the gridsize");
  rows = columns;
  let size = 100 / columns;
  container.setAttribute(
    "style",
    `display: grid;
     grid-template-rows: repeat(${rows}, ${size}%);
     grid-template-columns: repeat(${columns}, ${size}%);`
  );
  if (rows >= 100 || columns >= 100) return alert("ERROR, Don't go above 100");
  for (let i = 0; i < rows * columns; i++) {
    div = document.createElement("div");
    div.classList.add("etch");
    container.appendChild(div);
  }
}

addDivs();

function addColors() {
  const divs = document.querySelectorAll(".etch");

  for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("mouseover", () => {
      if (divs[i].style.backgroundColor) return;
      divs[i].setAttribute("style", `background-color: ${generateColors()};`);
    });
  }
}

addColors();

const button = document.querySelector("button");
button.addEventListener("click", () => {
  window.location.reload();
});

function generateColors() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  if (color == "#FFFFFF") return;
  return color;
}
