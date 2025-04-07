const nome = document.getElementById("fname");
const sobrenome = document.getElementById("lname");
const idade = document.getElementById("age");
const sexo = document.getElementById('sex');
const avaliacao = document.getElementById("opiniao");
const botao = document.querySelector("button")

botao.addEventListener("click", e=>{
    e.preventDefault;

    console.log(nome.value);
    console.log(sobrenome.value);
    console.log(idade.value);
    console.log(sexo.value);
    console.log(avaliacao.value);

    avalPessimo();
})


const avalPessimo = () =>{
    let count = 0;
    if(avaliacao.value == 1){
        count++
    }
    console.log(`O total de avaliações péssimas foi de ${count}`);
}

const avalPorcenBomOtimo = () =>{
    let countB = 0;
    let countO = 0;
    let porcentagemTotal;

    if(avaliacao.value == 3){
        countB++;
    }
    if(avaliacao.value == 4){
        countO++;
    }

    porcentagemTotal = ((countB + countO) / 100 ) * 100
}