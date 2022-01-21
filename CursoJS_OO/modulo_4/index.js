import { Cliente } from "../modulo_4/Cliente.js";
import { ContaCorrente } from "../modulo_4/ContaCorrente.js";


const cliente1 = new Cliente();
cliente1.nome = "Erick Fernandes";
cliente1.cpf = 777788884444;

// const cliente2 = new Cliente();
// cliente2.nome = "Alicia";
// cliente2.cpf = 888776565433

const contaCorrenteErick = new ContaCorrente();
contaCorrenteErick.agencia = 1001;
contaCorrenteErick.depositar(500);


const conta2 = new ContaCorrente();
conta2.cliente = cliente1;
// conta2.cliente.nome = "Alicia";
// conta2.cliente.cpf = 888776565433;
conta2.agencia = 102;
 
let valor = 100;//primitivos copiam seus valores;
//copia eu valor pra dentri de um método 
contaCorrenteErick.transferir(valor, conta2);


// console.log(conta2);
// console.log(contaCorrenteErick);
console.log(conta2.cliente);