// Variáveis
const main = document.querySelector("main");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const openCookie = document.querySelector("#fortune-cookie");
const btnReset = document.querySelector("#btnReset");

// Ajuste CSS

// Eventos
openCookie.addEventListener("click", toggleScreen);
btnReset.addEventListener("click", toggleScreen);

// Funções

function toggleScreen() {
  screen1.classList.toggle("hidden");
  screen2.classList.toggle("hidden");
  console.log(screen1.classList);
  console.log(screen2.classList);

  if (!screen2.classList.contains("hidden")) {
    main.style.paddingBottom = "4.8rem";
  } else {
    main.style.paddingBottom = "6.4rem";
  }
}
