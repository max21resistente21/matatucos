const container = document.querySelector(".container");
const bloodSpot = document.querySelector(".bloodSpot");
const startBtn = document.querySelector(".startBtn");

const terrorist = document.createElement("img");
terrorist.setAttribute("class", "terrorist");
terrorist.setAttribute("src", "img/terrorist.png");

const pedro = document.createElement("img");
pedro.setAttribute("class", "pedro");
pedro.setAttribute("src", "img/pedro.png");

const vladimir = document.createElement("img");
vladimir.setAttribute("class", "vladimir");
vladimir.setAttribute("src", "img/vladimir.png");

const guillermito = document.createElement("img");
guillermito.setAttribute("class", "guillermito");
guillermito.setAttribute("src", "img/guillermito.png");

const guido = document.createElement("img");
guido.setAttribute("class", "guido");
guido.setAttribute("src", "img/guido.png");

const contHeight = container.offsetHeight;
const contWidth = container.offsetWidth;

setInterval(() => {
  const randTop = Math.random() * (contHeight - 100);
  const randLeft = Math.random() * (contWidth - 100);

  terrorist.style.position = "absolute";
  terrorist.style.top = randTop + "px";
  terrorist.style.left = randLeft + "px";
}, 1000);

setInterval(() => {
  const randTop = Math.random() * (contHeight - 100);
  const randLeft = Math.random() * (contWidth - 100);

  pedro.style.position = "absolute";
  pedro.style.top = randTop + "px";
  pedro.style.left = randLeft + "px";
}, 1000);

setInterval(() => {
  const randTop = Math.random() * (contHeight - 100);
  const randLeft = Math.random() * (contWidth - 100);

  vladimir.style.position = "absolute";
  vladimir.style.top = randTop + "px";
  vladimir.style.left = randLeft + "px";
}, 1000);

setInterval(() => {
  const randTop = Math.random() * (contHeight - 100);
  const randLeft = Math.random() * (contWidth - 100);

  guillermito.style.position = "absolute";
  guillermito.style.top = randTop + "px";
  guillermito.style.left = randLeft + "px";
}, 1000);

setInterval(() => {
  const randTop = Math.random() * (contHeight - 100);
  const randLeft = Math.random() * (contWidth - 100);

  guido.style.position = "absolute";
  guido.style.top = randTop + "px";
  guido.style.left = randLeft + "px";
}, 1000);


let score = 0;


startBtn.addEventListener("click", () => {
  container.appendChild(terrorist);
  
  startBtn.innerText = "SCORE: " + score;
});

startBtn.addEventListener("click", () => {
  container.appendChild(pedro);
  
  startBtn.innerText = "SCORE: " + score;
});

startBtn.addEventListener("click", () => {
  container.appendChild(vladimir);
  
  startBtn.innerText = "SCORE: " + score;
});

startBtn.addEventListener("click", () => {
  container.appendChild(guillermito);
  
  startBtn.innerText = "SCORE: " + score;
});

startBtn.addEventListener("click", () => {
  container.appendChild(guido);
  
  startBtn.innerText = "SCORE: " + score;
});




window.addEventListener("click", (e) => {
  bloodSpot.style.top = e.pageY + "px";
  bloodSpot.style.left = e.pageX + "px";

  if (e.target === terrorist) score++;

  startBtn.innerText = "SCORE: " + score;
});

window.addEventListener("click", (e) => {
  bloodSpot.style.top = e.pageY + "px";
  bloodSpot.style.left = e.pageX + "px";

  if (e.target === pedro) score++;

  startBtn.innerText = "SCORE: " + score;
});

window.addEventListener("click", (e) => {
  bloodSpot.style.top = e.pageY + "px";
  bloodSpot.style.left = e.pageX + "px";

  if (e.target === vladimir) score++;

  startBtn.innerText = "SCORE: " + score;
});

window.addEventListener("click", (e) => {
  bloodSpot.style.top = e.pageY + "px";
  bloodSpot.style.left = e.pageX + "px";

  if (e.target === guillermito) score++;

  startBtn.innerText = "SCORE: " + score;
});

window.addEventListener("click", (e) => {
  bloodSpot.style.top = e.pageY + "px";
  bloodSpot.style.left = e.pageX + "px";

  if (e.target === guido) score++;

  startBtn.innerText = "SCORE: " + score;
});



const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});