class Conta{
    constructor(){
        this.nome;
        this.correntista;
        this.banco;
        this.nConta;
        this.saldo;
    }

    setNome(value){
        this.nome = value;
    }
    getNome(){
        return this.nome;
    }

    setCorrentista(value){
        this.correntista = value;
    }
    getCorrentista(){
        return this.correntista;
    }

    setBanco(value){
        this.banco = value;
    }
    getBanco(){
        return this.banco;
    }

    setNConta(value){
        this.nConta = value;
    }
    getNConta(){
        return this.nConta;
    }

    setSaldo(value){
        this.saldo = value;
    }
    getSaldo(){
        return this.saldo;
    }
}

class contaCorrente extends Conta{
    constructor(){
        super();
        this.saldoEspecial;
    }

    setSaldoEspecial(value){
        this.saldoEspecial = value;
    }
    getSaldoEspecial(){
        return this.saldoEspecial;
    }

}

class contaPoupanca extends Conta{
    constructor(){
        super();
        this.juros;
        this.dataVencimento;
    }

    setJuros(value){
        this.juros = value;
    }
    getJuros(){
        return this.juros;
    }

    setDataVencimento(value){
        this.dataVencimento = value;
    }
    getDataVencimento(){
        return this.dataVencimento;
    }

}

const novaContaCorrente = new contaCorrente();
const novaContaPoupanca = new contaPoupanca();

// Conta Corrente

novaContaCorrente.setNome(prompt("Informe o nome: "));
novaContaCorrente.setCorrentista(prompt("Informe correntista: "));
novaContaCorrente.setBanco(prompt("Informe o Banco Correntista: "));
novaContaCorrente.setNConta(prompt("informe o nº da conta: "));
novaContaCorrente.setSaldo(parseFloat(prompt("Informe o saldo atual: ")));
novaContaCorrente.setSaldoEspecial(parseFloat(prompt("Informe o saldo especial: ")));

// Conta Poupança
novaContaPoupanca.setNome(prompt("Informe o nome: "));
novaContaPoupanca.setCorrentista(prompt("Informe correntista: "));
novaContaPoupanca.setBanco(prompt("Informe o Banco Correntista: "));
novaContaPoupanca.setNConta(prompt("informe o nº da conta: "));
novaContaPoupanca.setSaldo(parseFloat(prompt("Informe o saldo atual: ")));
novaContaPoupanca.setJuros(parseFloat(prompt("informe os juros: ")));
novaContaPoupanca.setDataVencimento(prompt("Informe a data de vencimento: "));


let corrente = document.getElementById("corrente");
let poupanca = document.getElementById("poupanca");

mostrarCorrente();
mostrarPoupanca();

function mostrarCorrente(){
    corrente.innerHTML = `
        O nome do usuário é: ${novaContaCorrente.getNome()}\n
        \nO correntista é: ${novaContaCorrente.getCorrentista()}\n
        \nO banco é: ${novaContaCorrente.getBanco()}\n
        \nO nº da conta corrente é: ${novaContaCorrente.getNConta()}\n
        \nO saldo informado é: ${novaContaCorrente.getSaldo()}\n
        \nO saldo especial é: ${novaContaCorrente.getSaldoEspecial()}\n
    `
}

function mostrarPoupanca(){
    poupanca.innerHTML = `
        O nome do usuário é: ${novaContaPoupanca.getNome()}\n
        \nO correntista é: ${novaContaPoupanca.getCorrentista()}\n
        \nO banco é: ${novaContaPoupanca.getBanco()}\n
        \nO nº da conta corrente é: ${novaContaPoupanca.getNConta()}\n
        \nO saldo informado é: ${novaContaPoupanca.getSaldo()}\n
        \nO juros é: ${novaContaPoupanca.getJuros()}%\n
        \nA data de vencimento é: ${novaContaPoupanca.getDataVencimento()}\n
    `
}