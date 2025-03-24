const button = document.querySelector("button");
let apertado = confirm("Vamos apertar o botão?");

button.addEventListener("click", e => {
    e.preventDefault;

    if (apertado) {
        alert("VAMOS CALCULAR AS MÉDIAS!");
        let nomeAluno = prompt("Digite seu nome: ");

        let nota1 = parseFloat(prompt("Digite sua nota 1: "));

        let nota2 = parseFloat(prompt("Digite sua nota 2: "));
        
        let nota3 = parseFloat(prompt("Digite sua nota 3: "));
        
        let nota4 = parseFloat(prompt("Digite sua nota 4: "));
        
        alert(`${nomeAluno}, a sua média é: ${mediaAlunos(nota1, nota2, nota3, nota4)}`);
        
    }
    else {
        alert("Vamos lá, aperte o botão...");
    }

})


function mediaAlunos(n1, n2, n3, n4){
    return ((n1 + n2 + n3 + n4) / 4).toFixed(2);
}