const toogleMode = document.getElementById("mode-selector");
toogleMode.addEventListener("click", trocarModo);
toogleMode.addEventListener("click", mudarTexto);

const partesHTML = document.querySelectorAll("h1, body, button, footer");
const textoH1 = document.querySelector("h1");
const textoBotao = document.querySelector("button");

function trocarModo() {
  partesHTML.forEach((el) => {
    el.classList.toggle("dark-mode");
  });
}

function mudarTexto() {
  console.log(textoH1);
  console.log(textoBotao);

  if (textoH1.innerText == "Light Mode ON") {
    textoH1.innerText = "Dark Mode ON";
  } else if (textoH1.innerText == "Dark Mode ON") {
    textoH1.innerText = "Light Mode ON";
  }

  if (textoBotao.innerText == "Dark Mode") {
    textoBotao.innerText = "Light Mode";
  } else if (textoBotao.innerText == "Light Mode") {
    textoBotao.innerText = "Dark Mode";
  }
}
