const sessao = document.querySelector("section");
let nota1;
let nota2;
let nota3;
let nota4;

alert("VAMOS CALCULAR AS MÉDIAS!")
let nomeAluno = prompt("Digite seu nome: ");
nota1 = parseFloat(prompt("Digite sua nota 1: "))

console.log(nomeAluno);
console.log(nota1);
nota2 = parseFloat(prompt("Digite sua nota 2: "))

console.log(nota2);

nota3 = parseFloat(prompt("Digite sua nota 3: "))

console.log(nota3);

nota4 = parseFloat(prompt("Digite sua nota 4: "))

console.log(nota4);

console.log(`A média dos alunos é 
    ${mediaAlunos(nota1, nota2, nota3, nota4)}`
)

alert(`A média dos alunos é 
    ${mediaAlunos(nota1, nota2, nota3, nota4)}`
)

function mediaAlunos(n1, n2, n3, n4){
    return ((n1 + n2 + n3 + n4) / 4);
}