let currentNumberWrapper = document.getElementById("currentNumber");
let currentNumber = 0;

const incrementar = document.getElementById("adicionar");
incrementar.addEventListener("click", increment);

const diminuir = document.getElementById("subtrair");
diminuir.addEventListener("click", decrement);

function increment() {
  if (currentNumber >= 10) {
    return;
  } else {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
  }
}

function decrement() {
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
}
