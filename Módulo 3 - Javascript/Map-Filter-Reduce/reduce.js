const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(
  array.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual, 0)
);

const listaPrecos = [11.99, 15.99, 10.99, 5.99, 12.99];

function calcularSaldoFinal(listaPrecos, saldoDisponivel) {
  return listaPrecos.reduce(function (acumulador, valorAtual) {
    return acumulador - valorAtual;
  }, saldoDisponivel);
}

console.log(Math.round(calcularSaldoFinal(listaPrecos, 60)));
