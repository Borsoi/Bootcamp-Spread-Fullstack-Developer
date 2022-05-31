let N = 5;
let frase = "";

for (let i = 0; i < N; i++) {
  if (N - i > 1) {
    frase += "Ho ";
  } else frase += "Ho!";
}

console.log(frase);
