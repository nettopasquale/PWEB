const button = document.querySelector("button");
let apertado = confirm("Vamos apertar o botão?");

button.addEventListener("click", e => {
    e.preventDefault;

    if (apertado) {
        alert("Vamos brincar de pedra, papel e tesoura!");
        let jogador = parseInt(prompt("Digite uma nas opções na tela: "));
        console.log(jogador)
            
        let computador = (Math.random() * (2 - 0) + 0).toFixed();
        console.log(computador)

        if (jogador > 2 || jogador == NaN) {
            resultado("Opção inválida!");
        }
            
        else if ((jogador == 0 && computador == 1) ||
            (jogador == 1 && computador == 2) ||
            (jogador == 2 && computador == 0)) {
            
            resultado("Você perdeu!");
        }
        else if (jogador == computador) {
            resultado("Empate!");
        }
        else{
            resultado("Você venceu!");
        }
        
    }
    else {
        alert("Vamos lá, aperte o botão...");
    }
})

function resultado(mensagem) {
    document.querySelector("span").innerHTML = mensagem;
}