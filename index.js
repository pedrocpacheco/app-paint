const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const drawColor = document.querySelector("#color");
const lineWidthInput = document.querySelector("#lineWidth");

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let position = {
  x: 0,
  y: 0,
};

//Começar a desenhar
document.addEventListener("mousedown", (e) => {
  document.addEventListener("mousemove", draw);
  reposition(e);
});

//Parar de desenhar
document.addEventListener("mouseup", () => {
  document.removeEventListener("mousemove", draw);
});

//Mudar tamanho de linha e cor
let color = "black";
let lineWidth = 5;

document.addEventListener("change", () => {
  color = drawColor.value;
});
document.addEventListener("change", () => {
  lineWidth = lineWidthInput.value;
});

function reposition(e) {
  position.x = e.clientX - canvas.offsetLeft;
  position.y = e.clientY - canvas.offsetTop;
}

function draw(e) {
  ctx.beginPath();
  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";
  ctx.strokeStyle = color;
  ctx.moveTo(position.x, position.y);
  reposition(e);
  ctx.lineTo(position.x, position.y);
  ctx.stroke();
  ctx.closePath;
}

//Limpar
const btnLimpar = document.querySelector("#btnLimpar");

btnLimpar.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
