function soma(a: number, b: number) {
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
