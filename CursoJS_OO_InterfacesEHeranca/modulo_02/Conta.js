export class Conta {

    constructor(saldo, cliente, agencia) {

        this._saldo = saldo;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    sacar(valor) {

        valor = 1.0 * valor;

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
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

    teste() {
        console.log("Teste na classe conta")
    }

}