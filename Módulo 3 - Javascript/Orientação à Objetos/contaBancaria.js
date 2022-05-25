class ContaBancaria {
  constructor(agencia, numero, tipo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this.saldo = 0;
  }

  getSaldo() {
    return this.saldo;
  }

  setSaldo(saldo) {
    this.saldo = saldo;
  }

  sacar(saque) {
    if (saque > this.saldo) {
      return "O valor do saque é superior ao seu saldo, operação negada";
    }
    this.saldo -= saque;
    return "Saque realizado com sucesso";
  }

  depositar(deposito) {
    this.saldo += deposito;
    return "Deposito realizado com sucesso";
  }
}

class ContaCorrente extends ContaBancaria {
  constructor(cartaoCredito) {
    super(),
      (this.tipo = "Conta Corrente"),
      (this.cartaoCredito = cartaoCredito);
  }

  getCartaoCredito() {
    return this.cartaoCredito;
  }

  setCartaoCredito(cartaoCredito) {
    this.cartaoCredito = cartaoCredito;
  }
}

class ContaPoupanca extends ContaCorrente {
  constructor() {
    super();
    this.tipo = "Conta Poupança";
  }
}

class ContaUniversitaria extends ContaCorrente {
  constructor() {
    super();
    this.tipo = "Conta Poupança";
  }

  sacar(saque) {
    if (saque > this.saldo) {
      return "O valor do saque é superior ao seu saldo, operação negada";
    } else if (saque > 500) {
      return "Não é possível sacar um valor maior que 500 reais na conta universitária";
    } else {
      this.saldo -= saque;
      return "Saque realizado com sucesso";
    }
  }
}
