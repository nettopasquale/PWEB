let jogador1;
let jogador2; //computador
let verdade = true;

let arrayEscolhas = ["pedra", "papel", "tesoura"]; // 

alert("Vamos brincar de pedra, papel e tesoura!")

while(verdade){
    let escolhaJogador1 = parseInt(prompt("Digite uma nas opções: "));
    
    let escolhaJogador2 = Math.floor(Math.random() * 3); //int entre 0 e 2
    console.log(escolhaJogador2)
    
    if(arrayEscolhas[escolhaJogador1] == arrayEscolhas[escolhaJogador2]){
        alert("Empate!");
    }
    else if(arrayEscolhas[escolhaJogador1] != arrayEscolhas[escolhaJogador2]){
        if(arrayEscolhas[escolhaJogador1] == 0 && arrayEscolhas[escolhaJogador2] == 1
            || arrayEscolhas[escolhaJogador1] == 1 && arrayEscolhas[escolhaJogador2] == 2
            || arrayEscolhas[escolhaJogador1] == 2 && arrayEscolhas[escolhaJogador2] == 0
        ){
            alert("Você perdeu!");
        }
        else{
            alert("Você venceu!")
        }
    }
    else{
        alert("valor inválido! Digite uma opcao correta")
    }

}

