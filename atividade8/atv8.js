const nome = document.getElementById("fname");
const sobrenome = document.getElementById("lname");
const idade = document.getElementById("age");
const sexo = document.getElementById('sex');
const avaliacao = document.getElementById("opiniao");
const botaoResposta = document.getElementById("resposta");
const botaoEstatistica = document.getElementById("estatistica");

let forms = [];

botaoResposta.addEventListener("click", e => {
    e.preventDefault();

    let form = {
        idade: parseInt(idade.value),
        sexo: sexo.value.toString(),
        opiniao: parseInt(avaliacao.value)
    }

    forms.push(form);

    document.forms[0].reset();

    console.log("adicionado", { forms });
})

botaoEstatistica.addEventListener("click", e=>{
    e.preventDefault();

    mediaIdade();
    idadeMaior();
    idadeMenor();
    avalPessimo();
    avalPorcenBomOtimo();
    qtdTotalSexo();

})

function mediaIdade() {
    let somaIdade = 0;
    for (let i = 0; i < forms.length; i++){
        somaIdade += forms[i].idade;
    }

    return window.alert(`A média das idades é de: ${somaIdade / forms.length}`);

}

function idadeMaior() {
    let max = forms[0].idade;
    for (let i = 1; i < forms.length; i++){
        if (forms[i].idade > max) {
            max = forms[i].idade;
        }
    }

    return window.alert(`A idade da pessoa mais velha é: ${max}`);
}

function idadeMenor() {
    let min = forms[0].idade;
    for (let i = 1; i < forms.length; i++){
        if (forms[i].idade < min) {
            min = forms[i].idade;
        }
    }

    return window.alert(`A idade da pessoa mais nova é: ${min}`);
}

function avalPessimo(){
    let countPessimo = 0;
    for (let i = 0; i < forms.length; i++){
        console.log(forms[i].opiniao)
        if (forms[i].opiniao == 1) {
            countPessimo++;
        }
    }

    return window.alert(`O total de avaliações péssimas foi de ${countPessimo}`);
}

function avalPorcenBomOtimo(){
    let countB = 0;
    let countO = 0;

    for (let i = 0; i < forms.length; i++){
        console.log(forms[i].opiniao)
        if(forms[i].opiniao== 3){
            countB++;
        }else if(forms[i].opiniao == 4){
            countO++;
        }

    }

    let porcentagemBom = (((countB) / forms.length ) * 100).toFixed(2)
    let porcentagemOtimo = (((countO) / forms.length) * 100).toFixed(2)
    
    return window.alert(`A porcentagem de avaliações Boas foi de ${porcentagemBom}%, enquanto que a porcentagem de avaliações Ótimas foi de ${porcentagemOtimo}%.`)
}

function qtdTotalSexo() {
    let countH, countM, countO  = 0;

    for (let i = 0; i < forms.length; i++){
        console.log(forms[i].sexo)
        if (forms[i].sexo === "homem") {
            countH++;
        } else if (forms[i].sexo === "mulher") {
            countM++;
        } else {
            countO++;
        }
    }

    return window.alert(`O número total de homens foi de ${countH}. De mulheres foi de ${countM}. E outros foi de ${countO}`);
}