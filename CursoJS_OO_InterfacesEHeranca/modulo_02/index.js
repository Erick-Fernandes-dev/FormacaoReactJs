import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js"

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 8882223309);

const ContaCorrenteRicardo = new ContaCorrente(cliente1, 1001)
ContaCorrenteRicardo.depositar(500);
ContaCorrenteRicardo.sacar(100);

// const conta2 = new ContaCorrente(102, cliente2);

// let valor = 200;
// ContaCorrenteRicardo.transferir(valor, conta2);


const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
contaPoupanca.sacar(10);
// console.log(contaPoupanca)
// console.log(ContaCorrenteRicardo);

ContaCorrenteRicardo.teste();
console.log(contaPoupanca);
console.log(ContaCorrenteRicardo);