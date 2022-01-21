import { Cliente } from "../modulo_5/Cliente.js";
import { ContaCorrente } from "../modulo_5/ContaCorrente.js";


const cliente1 = new Cliente("Erick Fernandes", 777788884444);
const cliente2 = new Cliente("Alicia", 888999333777);

console.log(cliente2.cpf);

const contaCorrenteErick = new ContaCorrente(1001, cliente1);
contaCorrenteErick.depositar(500);

const conta2 = new ContaCorrente(102, cliente2);
 
let valor = 100;//primitivos copiam seus valores;
//copia eu valor pra dentri de um método 
contaCorrenteErick.transferir(valor, conta2);

console.log(contaCorrenteErick);
console.log("\n", ContaCorrente.numeroDeContas)
