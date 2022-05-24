const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function multiplicar(item, valorMultiplicacao) {
  return item * valorMultiplicacao;
}

console.log(array.map((item) => multiplicar(item, 5)));

let usuários = [
  { name: "Susan", idade: 15 },
  { name: "Daniel", idade: 25 },
  { name: "Jacob", idade: 35 },
];

function calcularIdade(idade, anosAFrente) {
  return idade + anosAFrente;
}

console.log(usuários.map(({ idade }) => calcularIdade(idade, 5)));

function mapComThis(array, thisArgs) {
  return array.map(function (item) {
    return item * this.value;
  }, thisArgs);
}

const maca = {
  value: 2,
};

console.log(mapComThis(array, maca));
