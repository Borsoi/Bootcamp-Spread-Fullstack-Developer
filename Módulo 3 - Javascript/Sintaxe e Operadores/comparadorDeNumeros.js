function compararNumeros(num1, num2) {
  const boolean1 = num1 === num2 ? " são" : " não são";
  const soma = num1 + num2;
  const boolean2 = soma >= 10 ? " maior" : " menor";
  const boolean3 = soma >= 20 ? " maior" : " menor";

  const resultado =
    "Os números " +
    num1 +
    " e " +
    num2 +
    boolean1 +
    " iguais. Sua soma é " +
    soma +
    ", que é" +
    boolean2 +
    " que 10 e" +
    boolean3 +
    " que 20.";

  return resultado;
}

console.log(compararNumeros(1, 2));
console.log(compararNumeros(1, 1));
console.log(compararNumeros(5, 6));
console.log(compararNumeros(6, 6));
console.log(compararNumeros(10, 12));
console.log(compararNumeros(11, 11));
