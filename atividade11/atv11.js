//1ª forma
const Funcionario1 = {
    matricula: "123456",
    nome: "Pasquale Milone Netto",
    funcao: "Estudante de ADS"
}

console.log(Funcionario1.matricula);
console.log(Funcionario1.nome);
console.log(Funcionario1.funcao);

// 2ª forma
const novoFuncionario1 = new Object();
novoFuncionario1.matricula = "7890123";
novoFuncionario1.nome = "Alexandre Tsurumaki";
novoFuncionario1.funcao = "Enfermeiro técnico";

console.log(novoFuncionario1.matricula);
console.log(novoFuncionario1.nome);
console.log(novoFuncionario1.funcao);

// 3ª forma
function Funcionario(matricula, nome, funcao){
    this.matricula = matricula;
    this.nome = nome;
    this.funcao = funcao;
}

const outroNovoFuncionario1 = new Funcionario("56474", "Juliano da Silva", "Professor de ADS");

console.log(outroNovoFuncionario1.matricula);
console.log(outroNovoFuncionario1.nome);
console.log(outroNovoFuncionario1.funcao);