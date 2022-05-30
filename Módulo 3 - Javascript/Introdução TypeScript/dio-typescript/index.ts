/* function soma(a: number, b: number) {
  return a + b;
}

//INTERFACE
interface IAnimal {
  nome: string;
  tipo: "terreste" | "aquático";
  domestico: boolean;
}

interface IFelino extends IAnimal {
  visaoNoturna: boolean;
}

const felino: IFelino = {
  nome: "Leão",
  tipo: "terreste",
  visaoNoturna: true,
  domestico: false,
};

//TYPES
interface ICanino extends IAnimal {
  porte: "Pequeno" | "Médio" | "Grande";
}

type IDomestico = IFelino | ICanino;

const animal: IDomestico = {
  nome: "Cachorro",
  tipo: "terreste",
  porte: "Médio",
  domestico: true,
};
 */

const input = document.getElementById("input") as HTMLInputElement;

input.addEventListener("input", (event) => {
  const i = event.currentTarget as HTMLInputElement;
  console.log(i.value);
});

//GENERIC TYPES

function adicionaApendiceALista<T>(array: any[], valor: T) {
  return array.map((item) => item + valor);
}

adicionaApendiceALista([1, 2, 3], 1);

interface IUsuario {
  id: string;
  email: string;
  cargo?: "funcionário" | "coordernador" | "supervisor" | "gerente";
}

function redirecionar(usuario: IUsuario) {
  if (usuario.cargo) {
    //Redicionar para área de adminstração
  }
  //Redicionar para área do usuário
}

interface ICachorro {
  nome: string;
  idade: number;
  parqueFavorito?: string;
}

type CachorroSomenteLeitura = {
  +readonly [K in keyof ICachorro]-?: ICachorro[K];
};

class MeuCachorro implements CachorroSomenteLeitura {
  nome;
  idade;
  parqueFavorito;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

import $ from "jquery";

$.fn.extend({
  novaFuncao() {
    console.log("Chamou nova função");
  },
});

$("body").novaFuncao();
