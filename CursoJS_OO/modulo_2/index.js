import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"


const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;


const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.depositar(500);

// contaCorrenteRicardo.depositar(-100);
// contaCorrenteRicardo.depositar(100);
// contaCorrenteRicardo.depositar(100);

// const valorSacado = contaCorrenteRicardo.sacar(50);
// contaCorrenteRicardo.cliente = cliente1;

// console.log(contaCorrenteRicardo);


const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;
contaCorrenteRicardo.transferir(200, conta2);

console.log(conta2);
console.log(contaCorrenteRicardo);

// const conta3 = new ContaCorrente();
// conta3.depositar(300);

// conta3.transferir(100, conta2);

// console.log(conta2);
// console.log(conta3);

