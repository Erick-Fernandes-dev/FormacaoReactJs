import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {

    static numeroDeContas = 1;
    // agencia;
    // _cliente;

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    constructor(cliente, agencia) {
        super(0, cliente, agencia)// vai chamar o construtor da classe pai
        ContaCorrente.numeroDeContas += 1;
    }

    teste() {
        super.teste();
        console.log("Teste na classe conta corrente");
    }

    sacar(valor) {
        let taxa = 1.1;
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
    }

}