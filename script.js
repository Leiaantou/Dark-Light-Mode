const switchBox = document.querySelector(".switch");
const btn = document.querySelector(".btn");
const icone = document.querySelector("i");
const container = document.querySelector(".container");
const titre = document.querySelector("h1");

switchBox.addEventListener("click", function () {
  btn.classList.toggle("btn-change");
  icone.classList.toggle("icone-change");
  icone.classList.toggle("fa-sun");
  switchBox.classList.toggle("switch-change");
  container.classList.toggle("container-change");
  if (titre.innerText === "Dark Mode") {
    titre.innerText = "Light Mode";
  } else {
    titre.innerText = "Dark Mode";
  }
});
