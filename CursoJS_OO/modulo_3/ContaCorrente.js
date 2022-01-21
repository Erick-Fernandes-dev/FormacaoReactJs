export class ContaCorrente {

    agencia;
    cliente;

    _saldo = 0;

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
        // não é muito utilizado
        conta.cidade = "São Paulo";// adcionar atributo dinamicamente no nosso objeto conta

        const valorSacado = this.sacar(valor);
    
        conta.depositar(valorSacado);
    
    }


}