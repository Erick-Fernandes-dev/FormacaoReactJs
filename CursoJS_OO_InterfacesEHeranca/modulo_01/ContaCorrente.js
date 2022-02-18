import { Cliente } from "./Cliente.js";

export class ContaCorrente {

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

    get _saldo() {
        return this._saldo;
    }

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        _saldo = 0;
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }

        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = conta.sacar(valor);
        conta.depositar(valorSacado); 
    }
}